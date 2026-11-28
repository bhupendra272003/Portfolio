const fs=require('fs');const assert=require('assert');const html=fs.readFileSync('index.html','utf8');
for(const id of ['home','about','work','book','contact'])assert(html.includes('id="'+id+'"'),'Missing section: '+id);
assert(html.includes('.reveal{opacity:1;transform:none}'),'Content must be visible by default');
assert(html.includes("document.documentElement.classList.add('reveal-motion')"),'Reveal motion must be enabled only after observer setup');
assert(html.includes("if(!canvas||!window.THREE)"),'Missing no-Three fallback');
assert(html.includes('catch(err){canvas.style.display=\'none\''),'Missing WebGL creation fallback');
assert(html.includes('prefers-reduced-motion:reduce'),'Missing reduced-motion support');
console.log('Portfolio smoke checks passed.');