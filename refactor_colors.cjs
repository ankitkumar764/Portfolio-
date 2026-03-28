const fs = require('fs');
const path = require('path');

const walk = function(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.jsx') || file.endsWith('.css')) results.push(file);
        }
    });
    return results;
};

const map = [
    [/#0a0a0b/gi, 'var(--bg)'],
    [/#f8fafc/gi, 'var(--text)'],
    [/#94a3b8/gi, 'var(--text-dim)'],
    [/#64748b/gi, 'var(--text-mut)'],
    [/#d4af37/gi, 'var(--gold)'],
    [/#000000|#000/g, 'var(--pure-black)'],
    [/#111112/g, 'var(--bg-card)'],
    [/rgba\(255\,\s*255\,\s*255\,\s*0\.05\)/g, 'var(--border)'],
    [/rgba\(255\,\s*255\,\s*255\,\s*0\.08\)/g, 'var(--border-strong)'],
    [/rgba\(10,\s*10,\s*11,/g, 'rgba(var(--bg-rgb),'],
    [/rgba\(15,\s*15,\s*17,/g, 'rgba(var(--bg-card-rgb),'],
    [/rgba\(20,\s*20,\s*22,/g, 'rgba(var(--bg-card-str-rgb),']
];

const files = walk('./src');
files.forEach(file => {
    if(file.includes('ThemeContext.jsx')) return;
    if(file.includes('index.css')) return; // handled separately
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    map.forEach(([regex, replacement]) => {
        if(regex.test(content)) {
            content = content.replace(regex, replacement);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    }
});
