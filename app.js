'use strict';
const projects = [
  {
    "id": "grape-house",
    "title": "Grape House",
    "en": "GRAPE HOUSE",
    "category": "visual",
    "type": "Packaging design",
    "bg": "#ede8df",
    "className": "portrait-work",
    "images": [
      "grape-structure",
      "grape-visual"
    ],
    "role": "Team project · Packaging design · Reinterpreting regional culture",
    "description": "Grape House brings the architecture of Xinjiang's traditional grape-drying houses and grapevine ornament into contemporary fruit packaging. Its biodegradable corrugated structure balances protection, ventilation, and environmental considerations. A side opening and a pull-out arrangement echo the experience of picking grapes from a vine. Illustrated guidance helps consumers distinguish natural grape bloom from mould, reducing avoidable waste and supporting food safety.",
    "extra": "Three representative Turpan grape varieties—Thompson Seedless, Flame Seedless, and Black Beauty—inform a pixel-based visual language. Die-cut information tags, envelopes, and cultural introduction cards extend the packaging into an experience of identification, interaction, and cultural storytelling.",
    "award": "Silver Award, Packaging Design — 18th China Star Design Award; Excellence Award — 4th XJ-STAR Design Awards",
    "note": "Team: Siya Wang, Aiping Zuo, and Hanqi Ou. Supervisor: Lei Yang.",
    "authorship": "Team project",
    "concept": "Reinterpreting regional culture"
  },
  {
    "id": "sealink",
    "title": "SeaLink",
    "en": "OCEAN-FRIENDLY REFILL TRAVEL KIT",
    "category": "visual",
    "type": "Product design",
    "bg": "#e4edf0",
    "className": "wide-work",
    "images": [
      "sealink"
    ],
    "role": "Team project · Product design · A more sustainable way to travel",
    "description": "SeaLink is an ocean-friendly refillable toiletry kit for travel. Reusable modular silicone bottles respond to the plastic waste associated with disposable travel products, while addressing portability, leakage, and flexible combinations of everyday essentials.",
    "extra": "Marine illustrations connect separate bottles into a complete image. Snap-on modules, wide refill openings, and precision nozzles address the stages of packing, refilling, and use. A companion comic booklet extends the product's environmental message through a story about marine plastic pollution.",
    "note": "Team project. Siya Wang is the first-listed author.",
    "authorship": "Team project",
    "concept": "A more sustainable way to travel"
  },
  {
    "id": "poetry",
    "title": "Poetry into Form",
    "en": "TYPOGRAPHIC POETRY",
    "category": "visual",
    "type": "Typographic posters",
    "bg": "#e8e8e5",
    "className": "series-work",
    "images": [
      "poem-1",
      "poem-2",
      "poem-3"
    ],
    "role": "Individual project · Typographic posters · Giving language a visual rhythm",
    "description": "A typographic exploration of how Chinese characters can communicate beyond their literal meaning. Scale, density, repetition, direction, and negative space turn words into a moon, flowing water, crowds, and an outpouring of emotion. The compositions translate the rhythm and feeling of reading into visual form.",
    "note": "The poems were written by another author. Siya Wang created the visual interpretation, typography, layout, and graphic compositions.",
    "authorship": "Individual project",
    "concept": "Giving language a visual rhythm"
  },
  {
    "id": "sonic-archives",
    "title": "Sonic Archives of Chaoyang Healthcare",
    "en": "SONIC ARCHIVES OF CHAOYANG HEALTHCARE",
    "category": "digital",
    "type": "Data visualization",
    "bg": "#f1e8ee",
    "className": "wide-work",
    "images": [
      "sonic-archives"
    ],
    "role": "Team project · Data visualization · Making hospital soundscapes visible",
    "description": "Based on field recordings and research at five hospitals in Beijing's Chaoyang District, this project organizes the sounds of entrance halls, emergency infusion rooms, nurses' stations, and waiting areas into a sonic archive. Decibel readings, foot traffic, spatial information, and emotional experience become visual evidence of the healthcare environment.",
    "extra": "Circular charts, heat maps, line graphs, and scatter plots compare hospitals and zones, bringing attention to an environmental pressure that is persistent yet easily overlooked.",
    "authorship": "Team project",
    "concept": "Making hospital soundscapes visible"
  },
  {
    "id": "combat-crusher",
    "title": "Combat Crusher",
    "en": "COMBAT CRUSHER",
    "category": "3d",
    "type": "3D environment art",
    "bg": "#d9dcdd",
    "className": "wide-work",
    "images": [
      "combat-crusher"
    ],
    "role": "Individual project · 3D environment art · Mechanical structure and hard surfaces",
    "description": "A hard-surface modeling study of an armoured combat vehicle. The overall silhouette, three-view presentation, and close-up details explore the construction and hierarchy of tracks, the chassis, armour, and mounted mechanical components.",
    "note": "A high-poly modeling presentation, including orthographic views and mechanical details.",
    "authorship": "Individual project",
    "concept": "Mechanical structure and hard surfaces"
  },
  {
    "id": "wasteland-suv",
    "title": "Wasteland Exploration SUV",
    "en": "WASTELAND EXPLORATION SUV",
    "category": "3d",
    "type": "3D environment art",
    "bg": "#141719",
    "className": "wide-work uncropped-work",
    "images": [
      "suv-05",
      "suv-02",
      "suv-03"
    ],
    "role": "Individual project · 3D environment art · A vehicle shaped by use and wear",
    "description": "A vehicle asset produced during my internship at Tencent Games. The SUV's structure, weathering, and material layers suggest a history of exploration in a worn environment. Multiple views reveal the vehicle's proportions, external fittings, and surface details.",
    "note": "All three views show the same vehicle, captured in Unreal Engine.",
    "authorship": "Individual project",
    "concept": "A vehicle shaped by use and wear"
  },
  {
    "id": "popmart",
    "title": "Embrace Your Thorns",
    "en": "POP MART · ZSIGA",
    "category": "visual",
    "type": "Illustrated posters",
    "bg": "#eee9e0",
    "className": "series-work",
    "images": [
      "popmart-1",
      "popmart-2",
      "popmart-3"
    ],
    "role": "Team project · Illustrated posters · Individuality, growth, and self-acceptance",
    "description": "A hand-drawn poster series inspired by POP MART's Zsiga, combining illustrated characters with photographs of campus life. Cherry blossoms, a running track, and a bicycle connect everyday scenes to three themes: dreams and romance, growth and resilience, and the freedom to start again.",
    "note": "A creative study featuring an existing brand character. The original character designs belong to their respective rights holders.",
    "authorship": "Team project",
    "concept": "Individuality, growth, and self-acceptance"
  },
  {
    "id": "care",
    "title": "See Her, Free and Strong",
    "en": "PUBLIC WELFARE POSTER DESIGN",
    "category": "visual",
    "type": "Public-interest posters",
    "bg": "#eee5e5",
    "className": "series-work",
    "images": [
      "care-1",
      "care-2",
      "care-3"
    ],
    "role": "Individual project · Public-interest posters · Recognizing women through menopause",
    "description": "A public-interest poster series focused on care and respect for women experiencing menopause. Everyday portraits meet hand-painted lettering, doodles, and expressive colours to address stereotypes, bodily change, and the contributions that often go unrecognized.",
    "extra": "Three complementary messages—challenging the stigma of being a middle-aged woman, moving forward, and recognizing the need for love—invite understanding, respect, and support.",
    "authorship": "Individual project",
    "concept": "Recognizing women through menopause"
  },
  {
    "id": "editorial",
    "title": "Content with a Voice",
    "en": "EDITORIAL & SOCIAL CONTENT",
    "category": "digital",
    "type": "Editorial & social design",
    "bg": "#e3e9e5",
    "className": "wide-work",
    "images": [
      "social-headers",
      "social-profile",
      "social-dschool"
    ],
    "role": "Individual project · Editorial & social design · Building identity through image and text",
    "description": "Visual and editorial work for the Communication University of China Student Union and design-thinking-related WeChat accounts. The work includes event headers, personality features, course showcases, and admissions information. Across different topics, image and text are organized into clear hierarchies that support recognition and communication.",
    "authorship": "Individual project",
    "concept": "Building identity through image and text"
  },
  {
    "id": "barrel",
    "title": "Wooden Barrel",
    "en": "WOODEN BARREL · FULL PIPELINE",
    "category": "3d",
    "type": "3D environment art",
    "bg": "#e4ded2",
    "className": "wide-work",
    "images": [
      "barrel"
    ],
    "role": "Individual project · 3D environment art · Exploring wood and metal materials",
    "description": "One of my earliest full-pipeline environment-prop studies. From the base forms to wood grain, metal bands, and surface wear, this project developed my understanding of modeling, sculpting, texture baking, material creation, and final presentation.",
    "authorship": "Individual project",
    "concept": "Exploring wood and metal materials"
  },
  {
    "id": "jinx",
    "title": "Bomb Maniac · Jinx",
    "en": "3D CHARACTER MODELING",
    "category": "3d",
    "type": "3D character art",
    "bg": "#e7ded0",
    "className": "wide-work",
    "images": [
      "jinx"
    ],
    "role": "Individual project · 3D character art · From a character image to 3D form",
    "description": "An early 3D character study of Jinx, exploring the translation of a two-dimensional character into three-dimensional form through silhouette, proportions, costume, and prop details.",
    "note": "A modeling exercise based on an existing character. Jinx and the original character design © Riot Games.",
    "authorship": "Individual project",
    "concept": "From a character image to 3D form"
  },
  {
    "id": "demon",
    "title": "Demon Enchantress",
    "en": "3D CHARACTER MODELING",
    "category": "3d",
    "type": "3D character art",
    "bg": "#101521",
    "className": "portrait-work uncropped-work",
    "images": [
      "demon"
    ],
    "role": "Individual project · 3D character art · Character form, materials, and light",
    "description": "An early 3D character modeling study focused on the relationships between horns, hair, facial features, and accessories. The work explores character form, surface materials, and lighting for presentation.",
    "note": "A character modeling exercise developed from an original-art reference.",
    "authorship": "Individual project",
    "concept": "Character form, materials, and light"
  },
  {
    "id": "vehicle-tricycle",
    "title": "Weathered Three-Wheeler",
    "en": "VEHICLE MODELING STUDY",
    "category": "3d",
    "type": "3D environment art",
    "bg": "#dfe3dd",
    "className": "wide-work",
    "images": [
      "vehicle-tricycle"
    ],
    "role": "Individual project · 3D environment art · The material traces of everyday use",
    "description": "A vehicle study centred on the cab of an old three-wheeler. Broken glass, corroded paint, and worn surfaces express the effects of prolonged use. Three viewing angles reveal the relationship between the vehicle's structure and its material details.",
    "authorship": "Individual project",
    "concept": "The material traces of everyday use"
  }
];
const asset = id => `https://sheawsy19.github.io/shea-personal-website/assets/${id}.webp?v=${id.startsWith('perf/')?6:5}`;
const imageInfo = {"grape-structure":{"width":2380,"height":3368,"widths":[{"name":480,"width":480,"bytes":45086},{"name":960,"width":960,"bytes":126446},{"name":2000,"width":2000,"bytes":429920}]},"grape-visual":{"width":2380,"height":3368,"widths":[{"name":480,"width":480,"bytes":52164},{"name":960,"width":960,"bytes":163188},{"name":2000,"width":2000,"bytes":546006}]},"sealink":{"width":11898,"height":6858,"widths":[{"name":480,"width":480,"bytes":26720},{"name":960,"width":960,"bytes":85632},{"name":2000,"width":2000,"bytes":285500}]},"poem-1":{"width":1448,"height":2048,"widths":[{"name":480,"width":480,"bytes":16130},{"name":960,"width":960,"bytes":39878},{"name":2000,"width":1448,"bytes":78352}]},"poem-2":{"width":1448,"height":2048,"widths":[{"name":480,"width":480,"bytes":18636},{"name":960,"width":960,"bytes":42584},{"name":2000,"width":1448,"bytes":81160}]},"poem-3":{"width":1448,"height":2048,"widths":[{"name":480,"width":480,"bytes":35428},{"name":960,"width":960,"bytes":84020},{"name":2000,"width":1448,"bytes":159056}]},"sonic-archives":{"width":6957,"height":3945,"widths":[{"name":480,"width":480,"bytes":17328},{"name":960,"width":960,"bytes":58486},{"name":2000,"width":2000,"bytes":228734}]},"combat-crusher":{"width":5688,"height":2681,"widths":[{"name":480,"width":480,"bytes":18990},{"name":960,"width":960,"bytes":57394},{"name":2000,"width":2000,"bytes":223516}]},"suv-05":{"width":2479,"height":1573,"widths":[{"name":480,"width":480,"bytes":20630},{"name":960,"width":960,"bytes":57340},{"name":2000,"width":2000,"bytes":202740}]},"suv-02":{"width":3257,"height":1609,"widths":[{"name":480,"width":480,"bytes":16778},{"name":960,"width":960,"bytes":47718},{"name":2000,"width":2000,"bytes":189026}]},"suv-03":{"width":2446,"height":1609,"widths":[{"name":480,"width":480,"bytes":23530},{"name":960,"width":960,"bytes":67266},{"name":2000,"width":2000,"bytes":288026}]},"popmart-1":{"width":3508,"height":4961,"widths":[{"name":480,"width":480,"bytes":91928},{"name":960,"width":960,"bytes":309848},{"name":2000,"width":2000,"bytes":1423512}]},"popmart-2":{"width":3508,"height":4961,"widths":[{"name":480,"width":480,"bytes":63422},{"name":960,"width":960,"bytes":200400},{"name":2000,"width":2000,"bytes":817598}]},"popmart-3":{"width":3508,"height":4961,"widths":[{"name":480,"width":480,"bytes":120212},{"name":960,"width":960,"bytes":401678},{"name":2000,"width":2000,"bytes":1648014}]},"care-1":{"width":1079,"height":1527,"widths":[{"name":480,"width":480,"bytes":65226},{"name":960,"width":960,"bytes":173766},{"name":2000,"width":1079,"bytes":297626}]},"care-2":{"width":1079,"height":1527,"widths":[{"name":480,"width":480,"bytes":55190},{"name":960,"width":960,"bytes":149490},{"name":2000,"width":1079,"bytes":263882}]},"care-3":{"width":1079,"height":1527,"widths":[{"name":480,"width":480,"bytes":64968},{"name":960,"width":960,"bytes":172330},{"name":2000,"width":1079,"bytes":296938}]},"social-headers":{"width":2880,"height":2160,"widths":[{"name":480,"width":480,"bytes":47710},{"name":960,"width":960,"bytes":145186},{"name":2000,"width":2000,"bytes":579146}]},"social-profile":{"width":2880,"height":2160,"widths":[{"name":480,"width":480,"bytes":29654},{"name":960,"width":960,"bytes":96208},{"name":2000,"width":2000,"bytes":346148}]},"social-dschool":{"width":2880,"height":2160,"widths":[{"name":480,"width":480,"bytes":31360},{"name":960,"width":960,"bytes":101682},{"name":2000,"width":2000,"bytes":381086}]},"barrel":{"width":5688,"height":2681,"widths":[{"name":480,"width":480,"bytes":14190},{"name":960,"width":960,"bytes":45236},{"name":2000,"width":2000,"bytes":193522}]},"jinx":{"width":3500,"height":1650,"widths":[{"name":480,"width":480,"bytes":16176},{"name":960,"width":960,"bytes":42602},{"name":2000,"width":2000,"bytes":163930}]},"demon":{"width":1803,"height":2125,"widths":[{"name":480,"width":480,"bytes":16224},{"name":960,"width":960,"bytes":37718},{"name":2000,"width":1803,"bytes":107298}]},"vehicle-tricycle":{"width":3508,"height":1974,"widths":[{"name":480,"width":480,"bytes":12138},{"name":960,"width":960,"bytes":38274},{"name":2000,"width":2000,"bytes":176064}]}};
function previewImage(id, {sizes='(max-width:760px) 88vw, 44vw', detail=false, alt='', loading='lazy'}={}){
 const meta=imageInfo[id];
 const candidates=meta.widths.filter(x=>detail||x.name<=960);
 const fallback=detail?2000:960;
 return `<img src="${asset('perf/'+id+'-'+fallback)}" srcset="${candidates.map(x=>asset('perf/'+id+'-'+x.name)+' '+x.width+'w').join(', ')}" sizes="${sizes}" width="${meta.width}" height="${meta.height}" alt="${alt}" loading="${loading}" decoding="async">`;
}
const grid=document.querySelector('#project-grid');
let activeFilter='all',currentProject=null,dialogReturnFocus=null,toastTimer;
const dialog=document.querySelector('.project-dialog');
const content=dialog.querySelector('.dialog-content');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;

function renderProjects(){
 grid.innerHTML=projects.map((p,i)=>`<article class="project-card ${p.className}" data-category="${p.category}"><button class="project-button" data-project="${p.id}" aria-label="Explore ${p.title}"><div class="project-image" style="--project-bg:${p.bg}"><span class="image-index">${String(i+1).padStart(2,'0')} / ${p.type}</span><div class="project-preview">${(p.className==='series-work'?p.images:p.images.slice(0,1)).map(img=>`${previewImage(img,{alt:p.title+' project preview',sizes:p.className==='series-work'?'(max-width:760px) 28vw, 14vw':'(max-width:760px) 88vw, 44vw'})}`).join('')}</div><span class="image-open" aria-hidden="true"><svg class="inline-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div><div class="project-caption"><div><h3>${p.title}</h3></div></div><p class="project-role"><span class="caption-authorship">${p.authorship}</span><span class="caption-separator" aria-hidden="true"> · </span><span class="caption-medium">${p.type}</span><span class="caption-separator" aria-hidden="true"> · </span><span class="caption-concept">${p.concept}</span></p></button></article>`).join('');
}
renderProjects();

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  let count=0;
  grid.querySelectorAll('.project-card').forEach(card=>{card.hidden=activeFilter!=='all'&&card.dataset.category!==activeFilter;if(!card.hidden)count++;});
  document.querySelector('.work-status').textContent=`${count} projects shown in ${button.textContent.replace(/\d/g,'').trim()}`;
}));
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  grid.classList.toggle('list-view',button.dataset.view==='list');
  document.querySelectorAll('[data-view]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}));

function showDialog(){
 if(!dialog.open){dialogReturnFocus=document.activeElement;dialog.showModal();document.body.classList.add('dialog-open');}
 dialog.scrollTop=0;
 document.querySelector('.hover-cursor').classList.remove('visible');
}
function openProject(id){
 const p=projects.find(p=>p.id===id);if(!p)return;
 currentProject=id;
 content.innerHTML=`<span class="eyebrow">${p.type}</span><h2 id="dialog-title">${p.title}</h2><p class="dialog-subtitle">${p.en}</p><div class="project-facts"><span>${p.role}</span><span>${p.images.length} project ${p.images.length===1?'image':'images'}</span></div><div class="project-prose"><p>${p.description}</p>${p.extra?`<p>${p.extra}</p>`:''}</div>${p.award?`<p class="dialog-award">${p.award}</p>`:''}${p.note?`<p class="authorship-note">${p.note}</p>`:''}<div class="gallery-topline"><span>PROJECT GALLERY</span><span>Click an image to enlarge <svg class="inline-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div><div class="dialog-images">${p.images.map((img,i)=>`<figure><a href="${asset(img)}" target="_blank" rel="noopener" aria-label="View full-resolution ${p.title}, image ${i+1}">${previewImage(img,{alt:p.title+' · Image '+(i+1),detail:true,sizes:'(max-width:1200px) 88vw, 1056px',loading:i===0?'eager':'lazy'})}</a><figcaption>${String(i+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')}<a href="${asset(img)}" target="_blank" rel="noopener">View full resolution <svg class="inline-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a></figcaption></figure>`).join('')}</div><div class="dialog-end"><p>Every project opens another possibility.</p><button class="next-project">Next project <svg class="inline-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`;
 content.querySelector('.next-project').addEventListener('click',()=>{const filtered=projects.filter(x=>activeFilter==='all'||x.category===activeFilter);const index=filtered.findIndex(x=>x.id===currentProject);openProject(filtered[(index+1)%filtered.length].id);});
 showDialog();
}
document.querySelectorAll('[data-open-project]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openProject(a.dataset.openProject);}));

grid.addEventListener('click',event=>{const b=event.target.closest('[data-project]');if(b)openProject(b.dataset.project);});
document.querySelectorAll('[data-certificate]').forEach(button=>button.addEventListener('click',()=>{
 content.innerHTML=`<h2 id="dialog-title">${button.dataset.award}</h2><p class="dialog-subtitle">RECOGNITION / AWARD CERTIFICATE</p><p class="authorship-note">Full award certificate. Team authorship follows the names listed on the certificate.</p><div class="dialog-images"><a href="${asset(button.dataset.certificate)}" target="_blank" rel="noopener" aria-label="View full award certificate"><img src="${asset(button.dataset.certificate)}" alt="${button.dataset.award} certificate"></a></div><p class="certificate-help">Click the certificate to enlarge it in a new tab.</p>`;
 showDialog();
}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogReturnFocus?.focus({preventScroll:true});});

const menu=document.querySelector('#mobile-nav');
const menuButton=document.querySelector('.menu-toggle');
function setMenu(open){menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('span').textContent=open?'Close':'Menu';document.body.classList.toggle('menu-open',open);}
menuButton.addEventListener('click',()=>setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);menuButton.focus();}});
matchMedia('(min-width:701px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});

function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2800);}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const value=button.dataset.copy;
 try{
   if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);}
   else {const input=document.createElement('textarea');input.value=value;input.style.cssText='position:fixed;left:-1000px';document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();if(!ok)throw new Error('Copy unavailable');button.focus();}
   toast('WeChat ID copied: '+value);
 }catch{toast('WeChat ID: '+value+', please copy this ID manually');}
}));

function updateClock(){document.querySelector('#beijing-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
updateClock();setInterval(updateClock,30000);
document.querySelector('#copyright-year').textContent=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Shanghai'}).format(new Date());
if(!reducedMotion){
 document.documentElement.classList.add('js-motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
let scrollTick=false;
function onScroll(){
 if(scrollTick)return;scrollTick=true;
 requestAnimationFrame(()=>{
  const range=document.documentElement.scrollHeight-innerHeight;
  document.querySelector('.scroll-progress').style.width=`${range>0?scrollY/range*100:0}%`;
  scrollTick=false;
 });
}
addEventListener('scroll',onScroll,{passive:true});
if(finePointer&&!reducedMotion){
 const cursor=document.querySelector('.hover-cursor');
 grid.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.classList.toggle('visible',!!e.target.closest('.project-image'));});
 grid.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));

}

