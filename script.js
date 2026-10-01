const S=window.SITE,P=window.PROJECTS,$=i=>document.getElementById(i);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const secs=["Home","About","Projects","Services","Process","Skills","Contact"];
$("links").innerHTML=secs.map(s=>`<li><a href="#${s.toLowerCase()}">${s}</a></li>`).join("");
$("mobile").innerHTML=secs.map(s=>`<a href="#${s.toLowerCase()}">${s}</a>`).join("");
$("logo").textContent=S.name;$("foot").textContent="© "+new Date().getFullYear()+" "+S.name;document.title=S.name+" — Digital Systems & Google Sheets Portfolio";
const menu=$("menu"),mob=$("mobile");
menu.onclick=()=>{const o=mob.classList.toggle("open");menu.setAttribute("aria-expanded",o);menu.textContent=o?"✕":"☰"};
mob.onclick=e=>{if(e.target.tagName==="A"){mob.classList.remove("open");menu.textContent="☰";menu.setAttribute("aria-expanded","false")}};
$("aboutText").textContent=S.about;
$("stats").innerHTML=(S.stats||[]).map(s=>`<div class="glass"><b data-n="${esc(s.value)}">${esc(s.value)}</b><br><span class="sub" style="margin:0">${esc(s.label)}</span></div>`).join("");
document.querySelectorAll("[data-n]").forEach(el=>{const n=parseInt(el.dataset.n);if(isNaN(n))return;const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();let x=0;const t=setInterval(()=>{x++;el.textContent=el.dataset.n.replace(/^\d+/,x);if(x>=n)clearInterval(t)},Math.max(20,900/n))});io.observe(el)});
const cats=["All","Google Sheets","CRM","Finance","Business","Automation","Dashboard","Productivity"];let cur="All";
$("chips").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c==="All"}">${c}</button>`).join("");
const link=(u,t,c)=>u?`<a class="btn ${c}" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${t}</a>`:"";
function render(){const l=P.filter(p=>cur==="All"||p.category===cur||(p.tags||[]).includes(cur));
 $("cards").innerHTML=l.length?l.map((p,i)=>`<article class="card glass rv" style="--d:${i*.07}s"><div class="img"><img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy" onerror="this.style.display='none'"></div><div class="bd"><span class="tag">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="row"><button class="btn p" data-i="${P.indexOf(p)}">View details</button></div></div></article>`).join(""):`<p class="sub">No projects in this category yet.</p>`;
 requestAnimationFrame(()=>document.querySelectorAll("#cards .rv").forEach(e=>e.classList.add("in")))}
$("chips").onclick=e=>{const b=e.target.closest(".chip");if(!b)return;cur=b.textContent;document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));render()};
render();
const modal=$("modal"),sheet=$("sheet");let last;
function open(i){const p=P[i];last=document.activeElement;
 const embed=p.showPreview&&p.googleSheetUrl&&/docs\.google\.com/.test(p.googleSheetUrl);
 sheet.innerHTML=`<button class="x" aria-label="Close">✕</button><h3>${esc(p.title)}</h3><h4>Problem</h4><p>${esc(p.problem)}</p><h4>Solution</h4><p>${esc(p.solution)}</p><h4>Features</h4><ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><h4>Tools</h4><p>${esc(p.tools.join(", "))}</p>
 ${embed?`<iframe src="${esc(p.googleSheetUrl)}" title="${esc(p.title)} preview" loading="lazy"></iframe><p class="note" style="margin-top:8px">Preview blank? Google may block embedding. Use the button below.</p>`:""}
 <div class="row" style="margin-top:20px">${link(p.demoUrl,"Open Demo","m")}${link(p.googleSheetUrl,"Open Interactive Google Sheet","p")}<a class="btn" href="#contact" data-c="1">Contact me</a></div>${!p.demoUrl&&!p.googleSheetUrl?`<p class="note" style="margin-top:12px">Links not added yet: set googleSheetUrl / demoUrl in data/projects.js.</p>`:""}`;
 modal.classList.add("open");document.body.style.overflow="hidden";sheet.querySelector(".x").focus()}
function close(){modal.classList.remove("open");document.body.style.overflow="";last&&last.focus()}
$("cards").onclick=e=>{const b=e.target.closest("[data-i]");b&&open(+b.dataset.i)};
modal.onclick=e=>{if(e.target===modal||e.target.closest(".x")||e.target.dataset.c)close()};
addEventListener("keydown",e=>e.key==="Escape"&&close());
$("svc").innerHTML=[["Google Sheets Systems","Custom spreadsheets, dashboards, trackers, and calculators."],["CRM Systems","Client databases, pipelines, follow-ups, and tracking systems."],["Financial Dashboards","Revenue, expenses, profitability, forecasting, and reporting."],["Business Automation","Reduce repetitive manual work through automation."],["Dashboard Design","Clear business dashboards and KPI systems."],["Digital Products","Professional templates and business systems."]].map(([t,d],i)=>`<div class="sv glass rv" style="--d:${i*.07}s"><h3>${t}</h3><p>${d}</p></div>`).join("");
$("tl").innerHTML=[["Discover","Understand the problem."],["Plan","Design the workflow."],["Build","Create the system."],["Test","Check formulas, usability, and functionality."],["Deliver","Provide the finished system."]].map(([t,d],i)=>`<li class="rv" data-n="${i+1}" style="--d:.05s"><h3>${t}</h3><p>${d}</p></li>`).join("");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll("#svc .rv,#tl .rv").forEach(e=>io.observe(e));
$("social").innerHTML=link(S.email&&"mailto:"+S.email,"Email","")+link(S.github,"GitHub","")+link(S.linkedin,"LinkedIn","");
if(!S.email)$("formNote").textContent="Setup needed: add your email in data/projects.js so this form can reach you.";
$("form").onsubmit=e=>{e.preventDefault();if(!S.email){$("formNote").textContent="Setup needed: add your email in data/projects.js.";return}
 const f=new FormData(e.target);location.href=`mailto:${S.email}?subject=${encodeURIComponent("Project inquiry: "+f.get("type"))}&body=${encodeURIComponent(`Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`)}`};
const nav=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&document.querySelectorAll("#links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))),{rootMargin:"-45% 0px -50% 0px"});
secs.forEach(s=>nav.observe($(s.toLowerCase())));
