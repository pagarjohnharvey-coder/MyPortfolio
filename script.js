const S=window.SITE,P=window.PROJECTS,$=i=>document.getElementById(i),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");P.forEach(p=>p.id=p.id||slug(p.title));
const link=(u,t,c,fx,ic)=>u?`<a class="btn ${c}" data-fx="${fx}" href="${esc(u)}" target="_blank" rel="noopener noreferrer"><span>${t}</span>${ic?`<i>${ic}</i>`:""}</a>`:"";
const toast=m=>{const t=document.createElement("div");t.className="toast";t.textContent=m;$("toasts").append(t);setTimeout(()=>t.classList.add("bye"),2000);setTimeout(()=>t.remove(),2450)};
const copy=async(txt,ok)=>{try{await navigator.clipboard.writeText(txt);toast(ok)}catch(e){toast(txt)}};
const kick=(el,c,ms=700)=>{el.classList.remove(c);void el.offsetWidth;el.classList.add(c);setTimeout(()=>el.classList.remove(c),ms)};
// ---- profile
$("nm").textContent=S.name;document.title=S.name+" — Digital Systems & Google Sheets Portfolio";
$("em").textContent=S.email||"Add your email";$("lo").textContent=S.location||"Add your location";
$("av").innerHTML=S.photo?`<img src="${esc(S.photo)}" alt="">`:esc(S.name.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase());
$("av").onclick=()=>{kick($("av"),"flip");toast("Hi, I'm "+S.name.split(" ")[0]+"!")};
$("em").onclick=()=>S.email?copy(S.email,"Email copied"):toast("Add your email in data/projects.js");
$("social").innerHTML=link(S.email&&"mailto:"+S.email,"Email","","slide","✉")+link(S.github,"GitHub","","arrow","→")+link(S.linkedin,"LinkedIn","","pulse","↗");
const roles=S.roles||[S.role,"Dashboards & CRM tools","Financial trackers"];
if(RM)$("role").textContent=S.role;else{let r=0,c=0,d=false;(function t(){const w=roles[r];c+=d?-1:1;$("role").textContent=w.slice(0,c);let ms=d?30:65;if(!d&&c===w.length){d=true;ms=1500}else if(d&&c===0){d=false;r=(r+1)%roles.length;ms=300}setTimeout(t,ms)})()}
$("vcf").onclick=()=>{const v=`BEGIN:VCARD\nVERSION:3.0\nFN:${S.name}\nTITLE:${S.role}\n${S.email?"EMAIL:"+S.email+"\n":""}${S.github?"URL:"+S.github+"\n":""}END:VCARD`;const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([v],{type:"text/vcard"}));a.download=slug(S.name)+".vcf";a.click();toast("Contact card downloaded")};
const root=document.documentElement;let th;try{th=localStorage.getItem("th")}catch(e){}
root.dataset.theme=th||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
$("theme").onclick=()=>{if(!RM){document.body.classList.add("tt");setTimeout(()=>document.body.classList.remove("tt"),600)}kick($("theme"),"spin");const n=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}toast(n==="dark"?"Dark mode":"Light mode")};
// ---- ripple
document.addEventListener("pointerdown",e=>{const b=e.target.closest("[data-fx=ripple]");if(!b)return;const r=b.getBoundingClientRect(),s=document.createElement("span");s.className="rip";s.style.cssText=`width:40px;height:40px;left:${e.clientX-r.left-20}px;top:${e.clientY-r.top-20}px`;b.append(s);setTimeout(()=>s.remove(),650)});
// ---- spotlight + tilt
document.addEventListener("pointermove",e=>{const it=e.target.closest(".item");if(it){const r=it.getBoundingClientRect();it.style.setProperty("--mx",e.clientX-r.left+"px");it.style.setProperty("--my",e.clientY-r.top+"px")}
 if(e.pointerType!=="mouse"||RM)return;const c=e.target.closest(".card");document.querySelectorAll(".card").forEach(x=>{if(x!==c){x.style.setProperty("--rx","0deg");x.style.setProperty("--ry","0deg")}});
 if(c){const r=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*10+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*10+"deg")}});
// ---- accordion
function acc(el,items,single=true){el.innerHTML=items.map(([t,s,b],i)=>`<div class="acc"><button class="acch" aria-expanded="false"><span><b>${t}</b>${s?`<small>${s}</small>`:""}</span><i>+</i></button><div class="accb"><div>${b}</div></div></div>`).join("");
 el.addEventListener("click",e=>{const h=e.target.closest(".acch");if(!h)return;const a=h.parentElement,o=!a.classList.contains("open");if(single)el.querySelectorAll(".acc.open").forEach(x=>{x.classList.remove("open");x.firstChild.setAttribute("aria-expanded","false")});a.classList.toggle("open",o);h.setAttribute("aria-expanded",o)})}
// ---- tabs
const T=[["about","◉","About"],["projects","▦","Projects"],["services","✦","Services"],["process","➜","Process"],["resume","▤","Resume"],["skills","⚙","Skills"],["contact","✉","Contact"]];
$("tabs").insertAdjacentHTML("beforeend",T.map(([id,i,l])=>`<button role="tab" data-t="${id}" aria-selected="false"><b aria-hidden="true">${i}</b>${l}</button>`).join(""));
let curTab=-1;const ind=$("ind");
function moveInd(){const b=document.querySelector('#tabs [aria-selected=true]');if(!b)return;ind.style.width=b.offsetWidth+"px";ind.style.transform=`translateX(${b.offsetLeft}px)`;b.scrollIntoView({inline:"center",block:"nearest",behavior:RM?"auto":"smooth"})}
function show(id,keepHash){let n=T.findIndex(t=>t[0]===id);if(n<0)n=0;id=T[n][0];const dir=n>=curTab?"fromR":"fromL";
 T.forEach(([k])=>{const p=$(k);p.classList.remove("on","fromR","fromL");if(k===id){void p.offsetWidth;p.classList.add("on",dir)}});
 document.querySelectorAll("#tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===id));curTab=n;moveInd();
 if(!keepHash)history.replaceState(null,"","#"+id);scrollTo({top:0,behavior:RM?"auto":"smooth"});if(id==="about")count()}
$("tabs").addEventListener("click",e=>{const b=e.target.closest("button");b&&show(b.dataset.t)});addEventListener("resize",moveInd);
let sx,sy;$("projects").parentElement.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$("projects").parentElement.addEventListener("touchend",e=>{if(e.target.closest(".chips,input,textarea,select"))return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>80&&Math.abs(dy)<50)show(T[Math.max(0,Math.min(T.length-1,curTab+(dx<0?1:-1)))][0])},{passive:true});
$("hire").onclick=()=>show("contact");
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g)show(g.dataset.go);const k=e.target.closest("[data-ask]");if(k){const s=SV[+k.dataset.ask];prefill(SVT[+k.dataset.ask],"Hi, I'd like to ask about: "+s[0]+".\n")}
 const s=e.target.closest("[data-s]");if(s){closeModal();q=s.dataset.s.toLowerCase();cur="All";$("q").value=s.dataset.s;syncChips();render();show("projects");toast("Showing: "+s.dataset.s)}});
// ---- about
$("aboutText").textContent=S.about;
$("stats").innerHTML=[{label:"Projects in this portfolio",value:String(P.length),go:"projects"}].concat(S.stats||[]).map(s=>`<button data-go="${s.go||"about"}"><b data-n="${esc(s.value)}">${esc(s.value)}</b><span class="note">${esc(s.label)}</span></button>`).join("");
function count(){document.querySelectorAll("#stats [data-n]").forEach(el=>{const n=parseInt(el.dataset.n);if(isNaN(n)||RM)return;let x=0;const t=setInterval(()=>{x++;el.textContent=el.dataset.n.replace(/^\d+/,x);if(x>=n)clearInterval(t)},Math.max(40,700/n))})}
acc($("rules"),[["Blue cells are for typing; grey cells calculate","","Users only touch input cells, so the formulas stay safe."],["One dashboard shows the whole picture","","Key numbers roll up in one place, so nobody hunts through tabs."],["Green, amber and red indicators","","Status colors show what needs attention at a glance."],["Sample rows and a built-in manual","","Examples show what to type, so setup is quick."],["Dropdowns keep data clean","","Fixed choices stop typos from breaking formulas."]]);
const SV=[["Google Sheets Systems","Custom spreadsheets, dashboards, trackers, and calculators.","Typical results: input tabs, calculation tabs, a dashboard, and a short manual."],["CRM Systems","Client databases, pipelines, follow-ups, and tracking systems.","Typical results: a lead log, stages with win probabilities, follow-up dates, and pipeline totals."],["Financial Dashboards","Revenue, expenses, profitability, forecasting, and reporting.","Typical results: a ledger, monthly P&L, cash runway, and invoice aging."],["Business Automation","Reduce repetitive manual work through automation.","Typical results: auto-calculated fields, reminder-message generators, and dropdown-driven workflows."],["Dashboard Design","Clear business dashboards and KPI systems.","Typical results: KPI cards, charts, and status indicators fed by your data tabs."],["Digital Products","Professional templates and business systems.","Typical results: a template with a setup page, sample rows, and instructions, ready to share or sell."]];
const SVT=["Google Sheets system","CRM","Financial dashboard","Automation","Other","Other"];
$("what").innerHTML=SV.slice(0,2).map(([t,d],i)=>`<div class="item" style="padding:18px;border-radius:18px;background:var(--soft)"><h3 style="margin:0 0 6px">${t}</h3><p class="note" style="font-size:14px">${d}</p></div>`).join("");
acc($("svc"),SV.map(([t,d,x],i)=>[t,d,x+`<br><button class="btn p" data-fx="slide" data-ask="${i}"><span>Ask about this</span><i>✉</i></button>`]));
acc($("tl"),[["1. Discover","Understand the problem.","We talk through what you track today, what is slow, and what the numbers should help you decide."],["2. Plan","Design the workflow.","We sketch the tabs, the input cells, and the dashboard before building anything."],["3. Build","Create the system.","I build the sheets with formulas, dropdowns, and status colors."],["4. Test","Check formulas, usability, and functionality.","I try sample data, edge cases, and a first-time-user walkthrough."],["5. Deliver","Provide the finished system.","You get the working sheet, a short manual, and sample rows to overwrite."]]);
// ---- projects
const cats=["All","Google Sheets","CRM","Finance","Business","Automation","Dashboard","Productivity","Saved"];let cur="All",q="",sort="default",favs=new Set();
try{favs=new Set(JSON.parse(localStorage.getItem("fav")||"[]"))}catch(e){}
const saveFav=()=>{try{localStorage.setItem("fav",JSON.stringify([...favs]))}catch(e){}};
const chipsEl=$("chips");chipsEl.innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c==="All"}">${c==="Saved"?"♥ Saved":c}</button>`).join("");
const syncChips=()=>chipsEl.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c.textContent.replace("♥ ","")===cur));
chipsEl.onclick=e=>{const b=e.target.closest(".chip");if(!b)return;cur=b.textContent.replace("♥ ","");syncChips();render(true)};
$("q").oninput=e=>{q=e.target.value.trim().toLowerCase();render(false)};
$("sort").onclick=()=>{sort=sort==="default"?"az":"default";$("sort").firstChild.textContent=sort==="az"?"Sort: A–Z ":"Sort: Default ";render(true)};
function list(){let l=P.filter(p=>{if(cur==="Saved")return favs.has(p.id);if(cur!=="All"&&p.category!==cur&&!(p.tags||[]).includes(cur))return false;return !q||[p.title,p.description,p.category,...(p.tags||[]),...p.tools,...p.features,...(p.inside||[])].join(" ").toLowerCase().includes(q)});if(sort==="az")l.sort((a,b)=>a.title.localeCompare(b.title));return l}
function render(anim){const go=()=>{const l=list();$("count").textContent=`${l.length} of ${P.length} projects`;
 $("cards").innerHTML=l.length?l.map((p,i)=>`<article class="item card" data-id="${p.id}" style="--i:${i}"><div class="img"><img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy" onerror="this.style.display='none'"></div><div class="bd"><button class="tag" data-cat="${esc(p.category)}">${esc(p.category)}</button><h3 style="margin:2px 0 0">${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="row l"><button class="btn p" data-fx="shine" data-a="open"><span>View details</span></button><button class="fav ${favs.has(p.id)?"on":""}" data-a="fav" aria-label="Save project" aria-pressed="${favs.has(p.id)}">♥</button><button class="ic" data-a="share" aria-label="Copy project link">⧉</button></div></div></article>`).join(""):`<p class="lead">${cur==="Saved"?"Nothing saved yet. Tap ♥ on a project.":"No projects match. No project lists that yet, or try a different word."}</p>`;$("cards").classList.remove("leaving")};
 if(anim&&!RM){$("cards").classList.add("leaving");setTimeout(go,190)}else go()}
const shareUrl=id=>location.origin+location.pathname+"#projects/"+id;
function toggleFav(id,btn){favs.has(id)?favs.delete(id):favs.add(id);saveFav();toast(favs.has(id)?"Saved to favorites":"Removed from favorites");document.querySelectorAll(`.fav[data-id="${id}"],.card[data-id="${id}"] .fav`).forEach(b=>{b.classList.toggle("on",favs.has(id));kick(b,"pop")});if(btn)btn.classList.toggle("on",favs.has(id))}
$("cards").addEventListener("click",e=>{const card=e.target.closest(".card");if(!card)return;const id=card.dataset.id,a=e.target.closest("[data-a]"),t=e.target.closest("[data-cat]");
 if(t){cur=t.dataset.cat;syncChips();render(true);return}
 if(a&&a.dataset.a==="fav"){toggleFav(id);return}if(a&&a.dataset.a==="share"){copy(shareUrl(id),"Project link copied");return}openModal(id)});
render(false);
// ---- modal
const modal=$("modal"),sheet=$("sheet");let mid=null,last;
function openModal(id,dir){const l=list().length?list():P,i0=P.findIndex(p=>p.id===id),p=P[i0];if(!p)return;if(!modal.classList.contains("open"))last=document.activeElement;mid=id;
 const emb=p.showPreview&&p.googleSheetUrl&&/docs\.google\.com/.test(p.googleSheetUrl);
 sheet.innerHTML=`<button class="x" aria-label="Close">✕</button><h3 style="margin:0;padding-right:40px">${esc(p.title)}</h3>
 <img class="zoom" src="${esc(p.image)}" alt="${esc(p.title)} screenshot (tap to enlarge)" onerror="this.style.display='none'">
 <div class="row" style="justify-content:flex-start"><button class="fav ${favs.has(p.id)?"on":""}" data-id="${p.id}" data-m="fav" aria-label="Save project">♥</button><button class="ic" data-m="share" aria-label="Copy project link">⧉</button></div>
 <h4>Problem</h4><p>${esc(p.problem)}</p><h4>Solution</h4><p>${esc(p.solution)}</p><h4>Features</h4><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
 ${p.inside?`<h4>What's inside (${p.inside.length} sections) - tap to search</h4><div>${p.inside.map(x=>`<button class="pill" data-s="${esc(x)}">${esc(x)}</button>`).join("")}</div>`:""}
 <h4>Tools - tap to find similar</h4><div>${p.tools.map(x=>`<button class="pill" data-s="${esc(x)}">${esc(x)}</button>`).join("")}</div><p class="note" style="margin-top:12px">Screenshots use sample data.</p>
 ${emb?`<iframe src="${esc(p.googleSheetUrl)}" title="${esc(p.title)} preview" loading="lazy"></iframe><p class="note" style="margin-top:8px">Preview blank? Google may block embedding. Use the button below.</p>`:""}
 <div class="row" style="margin-top:20px;justify-content:flex-start">${link(p.demoUrl,"Open Demo","m","pulse")}${link(p.googleSheetUrl,"Open Interactive Google Sheet","p","arrow","→")}<button class="btn" data-fx="slide" data-m="contact"><span>Ask about this</span><i>✉</i></button></div>
 ${!p.demoUrl&&!p.googleSheetUrl?`<p class="note" style="margin-top:10px">Links not added yet: set googleSheetUrl / demoUrl in data/projects.js.</p>`:""}
 <div class="nav"><button class="btn sm" data-m="prev">← Prev</button><span class="note">${i0+1} / ${P.length}</span><button class="btn sm" data-m="next">Next →</button></div>`;
 sheet.className="sheet"+(dir?(dir>0?" nR":" nL"):"");sheet.scrollTop=0;modal.classList.add("open");document.body.style.overflow="hidden";history.replaceState(null,"","#projects/"+id)}
function closeModal(){if(!modal.classList.contains("open"))return;modal.classList.remove("open");document.body.style.overflow="";history.replaceState(null,"","#projects");last&&last.focus&&last.focus()}
const step=d=>{const i=P.findIndex(p=>p.id===mid);openModal(P[(i+d+P.length)%P.length].id,d)};
modal.addEventListener("click",e=>{if(e.target===modal||e.target.closest(".x")){closeModal();return}
 const m=e.target.closest("[data-m]");if(e.target.classList.contains("zoom")){$("lb").firstChild.src=e.target.src;$("lb").classList.add("open");return}if(!m)return;const k=m.dataset.m;
 if(k==="fav"){toggleFav(mid,m)}else if(k==="share")copy(shareUrl(mid),"Project link copied");else if(k==="prev")step(-1);else if(k==="next")step(1);
 else if(k==="contact"){const p=P.find(x=>x.id===mid);closeModal();prefill("Google Sheets system","Hi, I'd like something similar to: "+p.title+".\n")}});
$("lb").onclick=()=>$("lb").classList.remove("open");
addEventListener("keydown",e=>{if(e.key==="Escape"){$("lb").classList.contains("open")?$("lb").classList.remove("open"):closeModal();return}
 if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;const k=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(!k)return;modal.classList.contains("open")?step(k):show(T[Math.max(0,Math.min(T.length-1,curTab+k))][0])});
// ---- skills
const SK=["Google Sheets","Google Apps Script","Excel","CRM","Dashboard Design","Financial Modeling","Automation","Canva","AI Tools","GitHub","Vercel"];
$("sk").innerHTML=SK.map((s,i)=>`<button style="--i:${i}" data-s="${s}">${s}</button>`).join("");
// ---- resume
const grp=(t,a)=>a&&a.length?`<h3>${t}</h3>`+a.map(x=>`<div class="rs item"><b>${esc(x.title)}</b><span>${esc([x.org,x.period].filter(Boolean).join(" · "))}</span>${x.detail?`<br><span>${esc(x.detail)}</span>`:""}</div>`).join(""):"";
$("resumeBody").innerHTML=grp("Experience",S.experience)+grp("Education",S.education)+grp("Certifications",S.certifications)||`<p class="lead">Add your real experience, education and certifications in data/projects.js. Nothing is shown until you do.</p>`;
const H=S.helpWith||[];$("help").innerHTML=H.map((x,i)=>`<li><button class="chkb" data-h="${i}" aria-pressed="false"><i>✓</i><span>${esc(x)}</span></button></li>`).join("");
$("help").onclick=e=>{const b=e.target.closest(".chkb");if(!b)return;b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");const n=$("help").querySelectorAll('[aria-pressed=true]').length;$("req").hidden=!n;$("req").firstChild.textContent=`Request selected (${n})`};
$("req").innerHTML="<span>Request selected</span>";$("req").onclick=()=>{const sel=[...$("help").querySelectorAll('[aria-pressed=true] span')].map(s=>"- "+s.textContent).join("\n");prefill("Other","Hi, I'd like help with:\n"+sel+"\n")};
// ---- contact
const form=$("form");
function prefill(type,msg){form.type.value=type;form.message.value=msg;$("cnt").textContent=msg.length+"/600";show("contact");toast("Message started for you")}
form.message.oninput=e=>$("cnt").textContent=e.target.value.length+"/600";
acc($("faq"),[["How do we start?","","Tell me the problem in the contact form. I will reply with questions, then we agree on what the finished system should do."],["Will I be able to use it myself?","","Yes. Each system is built with marked input cells, a setup page or manual, and sample rows to overwrite."],["Do you work in Google Sheets or Excel?","","My workbooks are built in Google Sheets and also work in Excel."],["Is my data safe?","","Portfolio examples use sample data only. For real client work, the sheet stays in your own Google account."]]);
if(!S.email)$("formNote").textContent="Setup needed: add your email in data/projects.js so this form can reach you.";
form.addEventListener("invalid",()=>kick(form,"shake",500),true);
form.onsubmit=e=>{e.preventDefault();if(!S.email){kick(form,"shake",500);$("formNote").textContent="Setup needed: add your email in data/projects.js.";return}
 const f=new FormData(form),b=$("send");b.classList.add("busy");setTimeout(()=>{b.classList.remove("busy");toast("Opening your email app...");location.href=`mailto:${S.email}?subject=${encodeURIComponent("Project inquiry: "+f.get("type"))}&body=${encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`)}`},800)};
$("copy").onclick=()=>{kick($("copy"),"go",600);S.email?copy(S.email,"Email copied"):toast("Add your email in data/projects.js first")};
$("ld").textContent=JSON.stringify({"@context":"https://schema.org","@type":"Person",name:S.name,jobTitle:S.role,...(S.email?{email:S.email}:{}),sameAs:[S.github,S.linkedin].filter(Boolean)});
// ---- scroll extras
addEventListener("scroll",()=>{const h=document.documentElement;$("prog").style.width=(scrollY/Math.max(1,h.scrollHeight-innerHeight)*100)+"%";$("topbtn").classList.toggle("show",scrollY>400)},{passive:true});
$("topbtn").onclick=()=>scrollTo({top:0,behavior:RM?"auto":"smooth"});
// ---- start
const hs=location.hash.slice(1).split("/");show(hs[0],true);if(hs[0]==="projects"&&hs[1])openModal(hs[1]);
