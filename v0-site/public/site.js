/* Site behaviour: routing, demos, audio player, ⌘K. Plain browser JS, loaded after the page renders. */


/* =================== sliding nav (WANT) =================== */
const LK=document.querySelector(".links"),LHL=LK.querySelector(".hl"),LACT=LK.querySelector(".act");
function place(el,a){el.style.left=a.offsetLeft+"px";el.style.width=a.offsetWidth+"px"}
function placeAct(){const a=LK.querySelector("a.on");if(a){LACT.style.opacity=1;place(LACT,a)}else LACT.style.opacity=0}
LK.querySelectorAll("a").forEach(a=>a.addEventListener("mouseenter",()=>{LHL.style.opacity=1;place(LHL,a)}));
LK.addEventListener("mouseleave",()=>LHL.style.opacity=0);
addEventListener("resize",placeAct);

/* =================== MAYBE switchboard =================== */
const MAYBE=[["focus","Spotlight the active ship","greys out the ships you’re not on"],["island","Mini player that follows you","Apple · leave Why me while it plays"],["spot","Spotlight cards","Linear · home doors"],["photos","Photos you can drag","Arc · Why me"],["hover","Source preview on hover","Wikipedia · Why Vercel"]];
const on=id=>!document.body.classList.contains("off-"+id);
const OFF0=[];OFF0.forEach(id=>document.body.classList.add("off-"+id));
if(document.getElementById("switch"))document.getElementById("switch").innerHTML=MAYBE.map(([id,n,w])=>`<label><span>${n}<small>${w}</small></span><input type="checkbox" ${OFF0.includes(id)?"":"checked"} data-id="${id}"/></label>`).join("");
document.getElementById("switch")&&document.getElementById("switch").addEventListener("change",e=>{const id=e.target.dataset.id;document.body.classList.toggle("off-"+id,!e.target.checked);if(id==="island")paintIsland();if(id==="words")words()});

/* =================== router =================== */
const routes=[...document.querySelectorAll(".route")];
let CUR="/";
function navigate(path){try{if(location.hash!=="#"+path)history.pushState(null,"","#"+path)}catch(e){}route(path)}
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#/"]');if(!a||a.dataset.jump||a.closest(".dd"))return;e.preventDefault();navigate(a.getAttribute("href").slice(1))});
addEventListener("popstate",()=>route());
function route(force){
  const h=(typeof force==="string"&&force)||location.hash.replace(/^#/,"")||"/";
  const path=h.startsWith("/")?h:null;
  if(!path){return} // in-page anchor
  CUR=path;routes.forEach(r=>r.classList.toggle("on",r.dataset.route===path));
  document.querySelectorAll(".links a").forEach(a=>a.classList.toggle("on",a.dataset.r===path));
  placeAct();
  window.scrollTo({top:0});
  if(path==="/my-ships"){setTimeout(()=>typeof coach==="function"&&coach(),700)}
}
addEventListener("hashchange",route);
// in-page anchors inside ships page without breaking routing
document.querySelectorAll(".ship-nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();document.getElementById(a.dataset.s).scrollIntoView({behavior:"smooth"});}));
const sObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll(".ship-nav a").forEach(a=>a.classList.toggle("on",a.dataset.s===e.target.id))}}),{rootMargin:"-40% 0px -55% 0px"});
["s-how","s-var","s-alloc","s-cm"].forEach(id=>sObs.observe(document.getElementById(id)));

/* =================== theme =================== */
(()=>{let t=null;try{t=localStorage.getItem("ba-theme")}catch(e){}
 if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
 document.documentElement.dataset.theme=t;
 document.getElementById("theme").onclick=()=>{const n=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=n;try{localStorage.setItem("ba-theme",n)}catch(e){};if(window.paintA)paintA()};
})();

/* =================== backdrop crosshairs on Geist grid =================== */
function crosses(){const svg=document.getElementById("cross");const W=innerWidth,H=innerHeight,c=96,ox=(W/2)%c;let d="";
 for(let x=ox;x<W;x+=c*3)for(let y=0;y<H;y+=c*2){if(((x/c|0)+(y/c|0))%2)continue;d+=`M${x-6} ${y}h12M${x} ${y-6}v12`}
 svg.setAttribute("viewBox",`0 0 ${W} ${H}`);svg.innerHTML=`<path d="${d}"/>`}
crosses();addEventListener("resize",crosses);

/* =================== home: live peeks =================== */
(()=>{const w=document.getElementById("wave");const N=56;let h="";for(let i=0;i<N;i++){const v=6+Math.abs(Math.sin(i*.55)*14+Math.sin(i*1.7)*6);h+=`<i style="height:${Math.min(26,v)}px"></i>`}w.innerHTML=h;
 const bars=[...w.children];const lines=["My first finance roles taught me how numbers get recorded, checked and explained.","Nobody assigned me a tool to build.","Automation only helps if it respects the controls around it.","To understand those businesses properly, I built a model of one myself."];
 let k=0,li=0;setInterval(()=>{k=(k+1)%N;bars.forEach((b,i)=>b.classList.toggle("p",i<=k));const secs=Math.round(k/N*102);document.getElementById("wt").textContent=`${Math.floor(secs/60)}:${String(secs%60).padStart(2,"0")} / 1:42`;
  if(k%14===0){const c=document.getElementById("capline");c.style.opacity=0;setTimeout(()=>{li=(li+1)%lines.length;c.textContent=lines[li];c.style.opacity=1},300)}},110);
})();

(()=>{const P=[["“treating Finance like a product”","Designed and built a revenue allocation tool the team now plans with"],["“we want our own team to work like one”","Spotted a two-hour manual process and replaced it, unassigned"],["Iterate to greatness: ship a first version fast, then keep improving it","Shipped my variance tool into the monthly cycle, then improved it with the team’s feedback"],["The CFO uses v0 to get ideas in front of technical colleagues faster","Built CloudMargin in v0 to understand an AI infrastructure business"],["Move fast without losing control: speeding tickets, not parking tickets","Took the CFO’s revised figures mid-cycle and re-reconciled immediately"],["“Internal tools often decay…”","Built for handoff: the team runs both tools without me"]];let i=0;const el=document.getElementById("vpeek");
 function paint(){const [a,b]=P[i];el.innerHTML=`<div class="q"><span class="v">Vercel</span><br/><b>${a}</b><hr/><span class="v">Me</span><br/><b>${b}</b></div>`}
 paint();setInterval(()=>{const q=el.querySelector(".q");q.style.opacity=0;setTimeout(()=>{i=(i+1)%P.length;paint()},350)},4200);
})();

/* =================== WHY ME: audio story =================== */
const CH=[
 {t:"Learning the systems",img:"Kaiser Permanente · IRC",s:[
  [0,"My first finance roles taught me how numbers get recorded, checked and explained."],
  [7,"At Kaiser Permanente I ran monthly budget-versus-actual variance analysis across 27 locations."],
  [15,"At the International Rescue Committee I saw what clean records mean for the people behind them."]]},
 {t:"From using tools to building them",img:"CBS Studios",s:[
  [23,"In June 2026 I joined the planning and strategy team at CBS Studios."],
  [29,"Nobody assigned me a tool to build."],
  [33,"I spent my first weeks learning how the team worked, and flagging the processes that were static and manual."],
  [42,"Then I designed and built applications to replace two of them, on my own, and the team made them part of its workflow."]]},
 {t:"Respecting the controls",img:"NBCUniversal",s:[
  [50,"Now, at NBCUniversal, I work on close, reconciliations and invoice review."],
  [58,"It has taught me that automation only helps if it respects the controls around it."]]},
 {t:"Learning new businesses",img:"HP Tech Ventures · CloudMargin",s:[
  [66,"At HP Tech Ventures I researched cloud and AI infrastructure startups."],
  [73,"To understand those businesses properly, I built a model of one myself."]]},
 {t:"What I want next",img:"UCLA · Vercel",s:[
  [81,"I’m not trying to become a software engineer."],
  [86,"I’m becoming a finance professional who can build what the team needs,"],
  [93,"and I want to do that somewhere finance is expected to build."]]}
];
const DUR=130;const ISL={ch:0,w:-1};
const sents=[];CH.forEach((c,ci)=>c.s.forEach(([t,x])=>sents.push({t,x,ci})));
sents.forEach((s,i)=>s.end=i<sents.length-1?sents[i+1].t:CH[CH.length-1].s.slice(-1)[0][0]+9);
const tr=document.getElementById("transcript");
// word-level timing: each sentence's duration is split across its words by length
const WORDS=[];
sents.forEach(s=>{const ws=s.x.split(" ");const tot=ws.reduce((a,w)=>a+w.length+1,0);let acc=0;ws.forEach(w=>{const st=s.t+(s.end-s.t)*acc/tot;acc+=w.length+1;WORDS.push({w,st,en:s.t+(s.end-s.t)*acc/tot,ci:s.ci,si:s})})});
let wi=0;
tr.innerHTML=CH.map((c,ci)=>`<p class="ch">${String(ci+1).padStart(2,"0")} · ${c.t}</p><p>${WORDS.filter(x=>x.ci===ci).map(x=>`<span class="w" data-i="${WORDS.indexOf(x)}">${x.w}</span>`).join(" ")}</p>`).join("");
const WEL=[...tr.querySelectorAll("span.w")];
const fmt=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
const endT=sents[sents.length-1].end;
document.getElementById("chapters").innerHTML=CH.map((c,i)=>`<button data-c="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><span>${c.t}</span><span class="t">${fmt(c.s[0][0])}</span></button>`).join("");
document.getElementById("scene").innerHTML=CH.map((c,i)=>`<div class="img" data-c="${i}"><div class="slot">scene ${i+1} image<br/>${c.img}<br/>(photo or sanitised document)</div></div>`).join("")+`<div class="cap"><b id="capt"></b><span id="capn"></span></div>`;
const bar=document.getElementById("bar");
CH.forEach(c=>{const k=document.createElement("i");k.className="tick";k.style.left=(c.s[0][0]/endT*100)+"%";bar.appendChild(k)});
let T=0,playing=false,rate=1,last=0;
function paintT(){
  document.getElementById("fill").style.width=(T/endT*100)+"%";
  document.getElementById("time").textContent=`${fmt(T)} / ${fmt(endT)}`;
  let cur=-1,nowW=-1;WORDS.forEach((x,i)=>{const el=WEL[i];const now=T>=x.st&&T<x.en;el.classList.toggle("past",T>=x.en);el.classList.toggle("now",now);if(now){cur=x.ci;nowW=i}});
  if(cur<0){const last=[...WORDS].reverse().find(x=>T>=x.st);if(last)cur=last.ci}
  ISL.ch=cur;ISL.w=nowW;if(typeof paintIsland==="function")paintIsland();
  if(cur<0)cur=T>=endT?CH.length-1:0;
  document.querySelectorAll("#chapters button").forEach(b=>b.classList.toggle("on",+b.dataset.c===cur));
  document.querySelectorAll("#scene .img").forEach(b=>b.classList.toggle("on",+b.dataset.c===cur));
  document.getElementById("capt").textContent=CH[cur].t;document.getElementById("capn").textContent=`${String(cur+1).padStart(2,"0")} / ${String(CH.length).padStart(2,"0")}`;
}
function tick(now){if(!playing)return;const dt=(now-last)/1000;last=now;T=Math.min(endT,T+dt*rate);paintT();if(T>=endT){setPlay(false);return}requestAnimationFrame(tick)}
function setPlay(p){playing=p;setTimeout(()=>typeof paintIsland==="function"&&paintIsland(),0);const b=document.getElementById("play");b.textContent=p?"❚❚":"▶";b.setAttribute("aria-label",p?"Pause":"Play");if(p){if(T>=endT)T=0;last=performance.now();requestAnimationFrame(tick)}}
document.getElementById("play").onclick=()=>setPlay(!playing);
document.getElementById("speed").onclick=e=>{rate=rate===1?1.5:rate===1.5?2:1;e.target.textContent=rate+"×"};
bar.onclick=e=>{const r=bar.getBoundingClientRect();T=(e.clientX-r.left)/r.width*endT;paintT()};
tr.addEventListener("click",e=>{const s=e.target.closest("span.w");if(!s||tr.classList.contains("read"))return;T=WORDS[+s.dataset.i].st+.01;paintT();if(!playing)setPlay(true)});
document.getElementById("chapters").onclick=e=>{const b=e.target.closest("button");if(!b)return;T=CH[+b.dataset.c].s[0][0];paintT()};
document.getElementById("tmode").onclick=e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#tmode button").forEach(x=>x.classList.toggle("on",x===b));const read=b.dataset.m==="read";tr.classList.toggle("read",read);if(read)setPlay(false)};
paintT();

/* decisions */
const DEC=[
 {l:["See it: ship 01","#s-var"],k:"Learn before building",s:"Joined CBS Studios with a mandate to modernise, but no assigned project.",o:"Start building tools straight away, or learn the team’s processes first.",c:"Spent my first weeks learning long-range planning, variance, reconciliation and allocation, and flagged what was static and manual.",r:"Built for the workflow the team actually had, which is why they adopted it."},
 {l:["See it: ship 02","#s-alloc"],k:"Design for revisions",s:"The CFO sent revised figures to the VP of Strategy I worked for, mid-cycle.",o:"Rebuild the allocation by hand, or have the tool take revisions as an input.",c:"Built the allocation so revised inputs flow through and reconcile automatically.",r:"Incorporated the revisions immediately, then presented the work to the CFO."},
 {l:["See it: ship 03","#s-cm"],k:"Build to learn",s:"Wanted to understand AI infrastructure economics: usage, cost, margin.",o:"Read about it, or model it.",c:"Built CloudMargin on synthetic data, using v0, Next.js and Python.",r:"A working model I can reason with, and the reason I’m interested in Product Finance."}
];
let di=0;
function paintD(){document.getElementById("dtabs").innerHTML=DEC.map((d,i)=>`<button class="${i===di?"on":""}" data-i="${i}">${d.k}</button>`).join("");
 const d=DEC[di];document.getElementById("flow").innerHTML=[["Situation",d.s],["Options",d.o],["My choice",d.c],["Result",d.r]].map(([a,b])=>`<div><dt><i></i>${a}</dt><dd>${b}</dd></div>`).join("")+`<div style="grid-column:1/-1;padding-top:14px"><a class="proof" data-jump="${d.l[1]}" href="#/my-ships">${d.l[0]} ↓</a></div>`}
/* old decision tabs removed (moved into How I ship) */

/* =================== SHIPS v7 =================== */
const $=id=>document.getElementById(id);

/* ---------- How I ship: simple six-step stepper ---------- */
const STEPS=[
 {t:"Understand the workflow",v:"In Vercel’s v0 story with Stripe, the tool came from the person closest to the problem: a finance professional who could build it himself.",src:["Vercel · Stripe customer story","https://vercel.com/customers/how-stripe-built-a-game-changing-app-in-a-single-flight-with-v0"],me:"At CBS Studios I learned the long-range plan, the production schedules and the allocation model before building anything.",p:["Ship 01","#s-var"]},
 {t:"Build by prompting",v:"Vercel’s CFO, Marten Abrahamsen, uses v0 to get ideas in front of technical colleagues faster.",src:["Vercel press page","https://vercel.com/press"],me:"I build with AI tools rather than as a trained engineer: both CBS Studios tools were AI-assisted, and CloudMargin was built in v0.",p:["Ship 03","#s-cm"]},
 {t:"Ship a first version",v:"Iterate to greatness: launch an initial version rapidly, then keep iterating.",src:["Paraform · How Vercel hires","https://www.paraform.com/blog/how-vercel-hires"],me:"The variance tool went into the monthly cycle early, then kept growing, all the way to a version the VP planned to run from his own Claude.",p:["Ship 01","#s-var"]},
 {t:"Make it right",v:"Vercel’s internal mantra, per its VP of Engineering: “make it work, make it fast, make it good.”",src:["Jam · How Vercel uses AI","https://jam.dev/blog/how-vercel-uses-ai-w-vp-of-eng-lindsey-simon/"],me:"Before trusting the allocation, I mapped every way it could fail. Checking that pool sums tied is how I found the $6.4M error.",p:["Ship 02","#s-alloc"]},
 {t:"Move fast with control",v:"Abrahamsen’s “speeding tickets vs. parking tickets” framework for moving fast without losing control.",src:["Run the Numbers podcast","https://pocketcasts.com/podcast/run-the-numbers/90a2f2e0-8bee-013c-9fd7-0acc26574db2/vercels-cfo-marten-abrahamsen-move-fast-or-fall-behind/d6989da8-d07f-44fd-b983-4e6acbe8f958"],me:"When the CFO wanted to test higher viewership for one show, the pool shifted instantly, and still tied.",p:["Ship 02","#s-alloc"]},
 {t:"Build it to last",v:"“Internal tools often decay due to high maintenance costs and security tradeoffs.”",src:["Vercel blog · Dec 2025","https://vercel.com/blog/stopping-the-slow-death-of-internal-tools"],me:"Both CBS Studios tools are run by the team without me. Then I start again on the next manual process.",p:["Ship 01","#s-var"]}
];
let si=0;
function paintSteps(){
 const N=STEPS.length;
 $("steps6").innerHTML=`<span class="pf" style="width:calc(${si/(N-1)*100}% - ${si/(N-1)*28}px)"></span>`+STEPS.map((x,i)=>`<button class="${i===si?"on":i<si?"done":""}" data-i="${i}"><i>${String(i+1).padStart(2,"0")}</i><span>${x.t}</span></button>`).join("");
 const x=STEPS[si];
 $("steppanel").innerHTML=`<dl class="sp-c"><dt>Vercel</dt><dd>${x.v}<small><a href="${x.src[1]}" target="_blank" rel="noopener">${x.src[0]} ↗</a></small></dd></dl><dl class="sp-c"><dt>Me</dt><dd>${x.me}</dd></dl><dl class="sp-c"><dt>Proof</dt><dd><a href="#/my-ships" data-jump="${x.p[1]}">${x.p[0]} ↓</a></dd></dl>`;
}
$("steps6").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;si=+b.dataset.i;paintSteps()});
paintSteps();

/* ---------- chain: curve linking the ships + spotlight ---------- */
(()=>{const chain=$("chain"),svg=$("chaincurve"),ships=[...chain.querySelectorAll(".ship")];let L=0;chain.classList.add("focus");
 function layout(){if(!chain.offsetParent)return;const c=chain.getBoundingClientRect();
  const pts=ships.map(sh=>{const r=sh.getBoundingClientRect();return{x:r.left-c.left,top:r.top-c.top+60,bot:r.bottom-c.top-60}});
  let d=`M${pts[0].x} ${pts[0].top}`;
  for(let i=0;i<pts.length;i++){const p=pts[i];d+=` L${p.x} ${p.bot}`;if(i<pts.length-1){const q=pts[i+1];const mid=(p.bot+q.top)/2;d+=` C${p.x-46} ${p.bot+30}, ${q.x-46} ${q.top-30}, ${q.x} ${q.top}`}}
  svg.setAttribute("viewBox",`0 0 ${c.width} ${c.height}`);svg.innerHTML=`<path d="${d}" transform="translate(-1 0)"/><path class="lit" id="chainlit" d="${d}" transform="translate(-1 0)"/>`;
  const lp=$("chainlit");L=lp.getTotalLength();lp.style.strokeDasharray=L;prog()}
 function prog(){const lp=$("chainlit");if(!lp||!chain.offsetParent)return;const c=chain.getBoundingClientRect();const f=Math.max(0,Math.min(1,(innerHeight*.55-c.top)/c.height));lp.style.strokeDashoffset=L*(1-f)}
 addEventListener("scroll",prog,{passive:true});addEventListener("resize",layout);
 new ResizeObserver(layout).observe(chain);
 const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){ships.forEach(s=>s.classList.toggle("active",s===e.target))}}),{rootMargin:"-40% 0px -40% 0px"});ships.forEach(s=>ob.observe(s));
 ships[0].classList.add("active");
 const _r=route;route=function(f){_r(f);setTimeout(layout,120)};setTimeout(layout,300)})();

/* ---------- 01 · variance demo ---------- */
const V_TITLES=[["Harbor Lights S2","2027-11",24.0],["The Long Field","2027-04",31.5],["Night Desk S3","2027-06",18.2],["Copper Road","2027-09",22.8],["Saltwater","2028-05",15.6],["Low Tide S2","2028-01",19.4],["Glass Avenue","2027-02",27.0],["Northline S4","2027-12",26.3],["Paper Moons","2028-08",12.9],["The Quiet Year","2027-07",16.7]];
const V_TEXT=`Harbor Lights S2 — production start: 2027-11 → 2028-02
Copper Road — production start: 2027-09 → 2027-12
Low Tide S2 — production start: 2028-01 → 2027-10
Northline S4 — production start: 2027-12 → 2028-03`;
const YEARS=[2027,2028,2029];
const norm=x=>x.toUpperCase().replace(/\(.*?\)|-\s*P\+|[^A-Z0-9 ]/g," ").replace(/SEASON\s*(\d+)/g,"S$1").replace(/\s+/g," ").trim();
function split(start,b){const y=+start.slice(0,4);const o={};YEARS.forEach(Y=>o[Y]=0);if(o[y]!==undefined)o[y]+=b*.6;if(o[y+1]!==undefined)o[y+1]+=b*.4;return o}
function parseSched(txt){const out={};txt.split("\n").forEach(l=>{const m=l.match(/^\s*(.+?)\s*(?:—|–|-|:|\|)+\s*.*?(\d{4})-(\d{2})\s*(?:→|->|to)\s*(\d{4})-(\d{2})/i);if(!m)return;const t=V_TITLES.find(x=>norm(x[0])===norm(m[1]));if(t)out[t[0]]=`${m[4]}-${m[5]}`});return out}
const mdiff=(a,b)=>(+b.slice(0,4)-+a.slice(0,4))*12+(+b.slice(5)-+a.slice(5));
let vT=[],vRan=false;
function vRender(instant){
 const rev=parseSched($("vtext").value);
 const rows=V_TITLES.map(([n,s,b])=>{const r=rev[n]||s;return{n,s,r,b,shift:mdiff(s,r),L:split(s,b),R:split(r,b)}});
 const tb=$("vtable").querySelector("tbody");
 tb.innerHTML=rows.map(x=>`<tr class="${x.shift?"chg":""}"><td class="name">${x.n}</td><td>${x.s}</td><td>${x.r}</td><td>${x.shift?`<span class="sh">${x.shift>0?"+":""}${x.shift} mo</span>`:"—"}</td>${YEARS.map(Y=>{const a=x.L[Y],b=x.R[Y];return`<td>${b.toFixed(1)}${Math.abs(a-b)>.01?`<span class="mv">was ${a.toFixed(1)}</span>`:""}</td>`}).join("")}</tr>`).join("")+
  `<tr class="tot"><td class="name">Total</td><td></td><td></td><td></td>${YEARS.map(Y=>`<td>${rows.reduce((a,x)=>a+x.R[Y],0).toFixed(1)}</td>`).join("")}</tr>`;
 const moved=rows.filter(x=>x.shift);const d27=rows.reduce((a,x)=>a+x.R[2027]-x.L[2027],0);
 const slate=(k)=>rows.filter(x=>(k==="L"?x.s:x.r).startsWith("2027")).length;
 const totL=rows.reduce((a,x)=>a+YEARS.reduce((q,Y)=>q+x.L[Y],0),0),totR=rows.reduce((a,x)=>a+YEARS.reduce((q,Y)=>q+x.R[Y],0),0);
 const crossed=moved.filter(x=>x.s.slice(0,4)!==x.r.slice(0,4)).length;
 $("kpis").innerHTML=`<div class="kpi"><small>Titles moved</small><b>${moved.length}</b><span>${crossed} crossed into a different year</span></div><div class="kpi"><small>FY27 spend change</small><b>${d27>=0?"+":"−"}$${Math.abs(d27).toFixed(1)}M</b><span>${d27<0?"moves into later years":"pulled into FY27"}</span></div><div class="kpi"><small>FY27 production starts</small><b>${slate("L")} → ${slate("R")}</b><span>titles starting in 2027</span></div>`;
 const tie=Math.abs(totL-totR)<.01;
 $("vstatus").className="status "+(tie?"good":"bad");
 $("vstatus").innerHTML=`<span>${tie?"Reconciled: every dollar moved between years, none lost":"Does not reconcile"}</span><span class="mono">$${totR.toFixed(1)}M total · ${moved.length} of ${rows.length} titles changed</span>`;
}
function vReset(){vT.forEach(clearTimeout);vT=[];vRan=false;$("vtext").value=V_TEXT;$("vextract").classList.remove("on");document.querySelectorAll(".att").forEach(a=>a.classList.remove("pulled"));
 document.querySelectorAll("#vsteps span").forEach(s=>s.className="");$("kpis").innerHTML="";
 $("vtable").querySelector("tbody").innerHTML=V_TITLES.map(([n,s])=>`<tr><td class="name">${n}</td><td>${s}</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>`).join("");
 $("vstatus").className="status";$("vstatus").innerHTML=`<span>Press “Download email” to start.</span><span class="mono"></span>`;$("vdl").textContent="Download email"}
function vRun(){vT.forEach(clearTimeout);vT=[];const st=[...document.querySelectorAll("#vsteps span")];const later=(ms,f)=>vT.push(setTimeout(f,ms));
 st.forEach(s=>s.className="");st[0].className="run";
 later(500,()=>{st[0].className="done";st[1].className="run";document.querySelectorAll(".att").forEach(a=>a.classList.add("pulled"))});
 later(1100,()=>{st[1].className="done";st[2].className="run";$("vextract").classList.add("on")});
 later(1700,()=>{st[2].className="done";st[3].className="run";vRender()});
 later(2300,()=>{st[3].className="done";st[4].className="run"});
 later(2700,()=>{st[4].className="done";vRan=true;$("vdl").textContent="Run again"});}
$("vdl").onclick=vRun;$("vreset").onclick=vReset;
let vDeb;$("vtext").addEventListener("input",()=>{if(!vRan)return;clearTimeout(vDeb);vDeb=setTimeout(vRender,250)});
vReset();

/* ---------- 02 · allocation demo ---------- */
const A_T=[["HARBOR LIGHTS (S2) - P+","Harbor Lights S2",18,10],["THE LONG FIELD - P+","The Long Field",15,14],["NIGHT DESK SEASON 3","Night Desk S3",13,9],["Copper Road","Copper Road",11,12],["LOW TIDE (S2) - P+","Low Tide S2",10,8],["NORTHLINE - SEASON 4","Northline S4",14,11],["Glass Avenue","Glass Avenue",9,13],["PAPER MOONS - P+","Paper Moons",7,6]]; // paramount name, cbs name, viewing hours (M), cable weight
const POOL=120;let AS={model:"stream",title:5,pct:0,src:"mine"};
function shares(st){const w=A_T.map((t,i)=>(st.model==="stream"?t[2]:t[3])*(i===st.title?1+st.pct/100:1));const s=w.reduce((a,b)=>a+b,0);return w.map(x=>x/s)}
function paintMatch(){let nmz=0;$("mtable").querySelector("tbody").innerHTML=A_T.map(([p,c])=>{const ex=p.trim().toUpperCase()===c.toUpperCase();if(!ex)nmz++;return`<tr><td class="name" style="font-family:var(--mono);font-size:11px">${p}</td><td class="name">${c}</td><td>${ex?'<span class="mtag ex">exact</span>':'<span class="mtag nm">normalized</span>'}</td></tr>`}).join("");
 $("msum").textContent=`${A_T.length} / ${A_T.length} titles matched · ${nmz} only after normalizing names, seasons and suffixes`}
function paintAlloc(){const sh=shares(AS),base=shares({...AS,pct:0});const al=sh.map(x=>x*POOL),b0=base.map(x=>x*POOL);
 const dupI=4;const dup=AS.src==="old"?b0[dupI]*.5:0; // the old process also carried a FY27 amount forward for one title
 const max=Math.max(...al,dup)*1.05;
 $("abars").innerHTML=A_T.map(([,c],i)=>{const d=al[i]-b0[i];return`<div class="ab ${i===AS.title&&AS.pct?"hl":""}"><span>${c}</span><span class="bar2"><i style="width:${al[i]/max*100}%"></i></span><span class="v">$${al[i].toFixed(1)}M${Math.abs(d)>.05?`<small class="${d>0?"up":"dn"}">${d>0?"+":"−"}${Math.abs(d).toFixed(1)}</small>`:""}</span></div>`}).join("")+
  (dup?`<div class="ab dup"><span>Low Tide S2 · FY27 carry-fwd</span><span class="bar2"><i style="width:${dup/max*100}%"></i></span><span class="v">$${dup.toFixed(1)}M</span></div>`:"");
 const tot=al.reduce((a,b)=>a+b,0)+dup;const st=$("astatus");
 if(Math.abs(tot-POOL)<.05){st.className="status good";st.innerHTML=`<span>Ties to the pool${AS.pct?" , even after the what-if":""}</span><span class="mono">$${tot.toFixed(1)}M of $${POOL.toFixed(1)}M</span>`}
 else{st.className="status bad";st.innerHTML=`<span>Pool sums don’t tie: over by $${(tot-POOL).toFixed(1)}M. One title is counted in two years.</span><span class="mono">$${tot.toFixed(1)}M vs $${POOL.toFixed(1)}M</span>`}
 $("wpctv").textContent=(AS.pct>=0?"+":"")+AS.pct+"%";$("wpct").value=AS.pct;$("wtitle").value=AS.title;
 document.querySelectorAll("#amodel button").forEach(b=>b.classList.toggle("on",b.dataset.m===AS.model));
 document.querySelectorAll("#asrc button").forEach(b=>b.classList.toggle("on",b.dataset.s===AS.src))}
$("wtitle").innerHTML=A_T.map(([,c],i)=>`<option value="${i}">${c}</option>`).join("");
$("wtitle").onchange=e=>{AS.title=+e.target.value;paintAlloc()};$("wpct").oninput=e=>{AS.pct=+e.target.value;paintAlloc()};
$("amodel").onclick=e=>{const b=e.target.closest("button");if(b){AS.model=b.dataset.m;paintAlloc()}};
$("asrc").onclick=e=>{const b=e.target.closest("button");if(b){AS.src=b.dataset.s;paintAlloc()}};
function aReset(){AS={model:"stream",title:5,pct:0,src:"mine"};paintAlloc()}
$("areset").onclick=()=>{aStop();aReset()};
paintMatch();aReset();

/* named cursors play the real story on the synthetic model */
const FG=(()=>{const layer=$("fgl"),demo=$("adem");
 const mk=(n,c)=>{const d=document.createElement("div");d.className="fcur";d.innerHTML=`<svg width="18" height="18" viewBox="0 0 16 16"><path d="M1 1l5 14 2-6 6-2z" fill="${c}" stroke="#fff" stroke-width="1"/></svg><span class="tag" style="background:${c}">${n}</span>`;layer.appendChild(d);return d};
 const C={cfo:mk("CFO, CBS Studios","#e5484d"),vp:mk("VP Strategy","#8e4ec6"),me:mk("Bouchra","#0070f3")},COL={cfo:"#e5484d",vp:"#8e4ec6",me:"#0070f3"},NM={cfo:"CFO, CBS Studios",vp:"VP Strategy",me:"Bouchra"};
 let T=[],busy=false;const later=(ms,f)=>T.push(setTimeout(f,ms));
 const pos=id=>{const r=$(id).getBoundingClientRect(),d=demo.getBoundingClientRect();return{x:r.left-d.left+r.width*.5,y:r.top-d.top+r.height*.5}};
 const go=(k,id,dx=0,dy=0)=>{const p=pos(id);C[k].classList.add("on");C[k].style.transform=`translate(${p.x+dx}px,${p.y+dy}px)`};
 const say=(k,id,t,dx=-120,dy=-96)=>{layer.querySelectorAll(".fcmt").forEach(o=>{o.classList.remove("on");setTimeout(()=>o.remove(),350)});const p=pos(id);const c=document.createElement("div");c.className="fcmt";c.style.left=Math.min(demo.clientWidth-250,Math.max(8,p.x+dx))+"px";c.style.top=Math.max(8,p.y+dy)+"px";c.innerHTML=`<small><i style="background:${COL[k]}"></i>${NM[k]}</small>${t}`;layer.appendChild(c);requestAnimationFrame(()=>c.classList.add("on"))};
 function stop(){T.forEach(clearTimeout);T=[];busy=false;layer.querySelectorAll(".fcmt").forEach(o=>o.remove());Object.values(C).forEach(c=>c.classList.remove("on"))}
 function play(){if(busy)return;stop();busy=true;aReset();const d=demo.getBoundingClientRect();Object.values(C).forEach(c=>c.style.transform=`translate(${d.width-40}px,${d.height-40}px)`);
  later(200,()=>go("cfo","wpct",0,6));
  later(1500,()=>say("cfo","wpct","What happens to the pool if Northline’s viewership is up 25%?",-160,-100));
  later(2600,()=>{let k=0;const iv=setInterval(()=>{k+=5;AS.pct=k;paintAlloc();if(k>=25)clearInterval(iv)},140)});
  later(4300,()=>go("me","abars",60,-30));
  later(5300,()=>{const sh=shares(AS),b=shares({...AS,pct:0});say("me","abars",`Northline goes from $${(b[5]*POOL).toFixed(1)}M to $${(sh[5]*POOL).toFixed(1)}M. Every other title gives up share, and the pool still ties.`,-40,-110)});
  later(7600,()=>go("vp","amodel",0,4));
  later(8700,()=>{say("vp","amodel","Can we see the same thing on the cable model?",-200,-90);AS.model="cable";paintAlloc()});
  later(10600,()=>go("vp","asrc",0,4));
  later(11700,()=>{say("vp","asrc","And why didn’t the old process tie?",-180,-90);AS.src="old";paintAlloc()});
  later(13300,()=>go("me","astatus",-60,4));
  later(14400,()=>say("me","astatus","The old pool sums counted one title in two years. Checking those sums is how I found the $6.4M.",-60,-104));
  later(17200,()=>{AS.src="mine";paintAlloc()});
  later(18600,()=>{stop()})}
 $("astory").onclick=play;let played=false;
 new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!played){played=true;setTimeout(play,500)}}),{threshold:.5}).observe(demo);
 return{stop}})();
function aStop(){FG.stop()}

/* ---------- the Golden Gate, cable written in LA ---------- */
(()=>{const g=$("bridge");if(!g)return;const W=1200,T1=330,T2=870,TOP=40,DECK=300,LOW=286,WATER=372;
 const qy=(x0,y0,cx,cy,x1,y1,x)=>{const t=(x-x0)/(x1-x0);return(1-t)*(1-t)*y0+2*(1-t)*t*cy+t*t*y1};
 const midC=2*LOW-TOP; // control point so the cable dips to LOW at mid-span
 const cy=x=>x<T1?qy(0,236,T1/2,190,T1,TOP,x):x>T2?qy(T2,TOP,(T2+W)/2,190,W,236,x):qy(T1,TOP,(T1+T2)/2,midC,T2,TOP,x);
 const cable=`M0 236 Q${T1/2} 190 ${T1} ${TOP} Q${(T1+T2)/2} ${midC} ${T2} ${TOP} Q${(T2+W)/2} 190 ${W} 236`;
 let h=`<defs><path id="ggcable" d="${cable}"/><path id="ggdeck" d="M0 ${DECK+30} L${W} ${DECK+30}"/></defs>`;
 h+=`<line class="water" x1="0" y1="${WATER}" x2="${W}" y2="${WATER}" stroke-width="1"/>`;
 for(let x=8;x<W;x+=12){if(Math.abs(x-T1)<20||Math.abs(x-T2)<20)continue;const y=cy(x);if(y<DECK-3)h+=`<line class="s" x1="${x}" y1="${y.toFixed(1)}" x2="${x}" y2="${DECK}" stroke-width=".8" opacity=".35"/>`}
 h+=`<line class="s" x1="0" y1="${DECK}" x2="${W}" y2="${DECK}" stroke-width="2.5" opacity=".7"/><line class="s" x1="0" y1="${DECK+16}" x2="${W}" y2="${DECK+16}" stroke-width="1.5" opacity=".6"/>`;
 for(let x=0;x<W;x+=16)h+=`<line class="s" x1="${x}" y1="${DECK}" x2="${x+8}" y2="${DECK+16}" stroke-width=".8" opacity=".4"/><line class="s" x1="${x+8}" y1="${DECK+16}" x2="${x+16}" y2="${DECK}" stroke-width=".8" opacity=".4"/>`;
 [T1,T2].forEach(x=>{
  [[x-26,x-12],[x+12,x+26]].forEach(([a,b])=>h+=`<path class="s" d="M${a} ${WATER} L${a+2} ${TOP-6} L${b-2} ${TOP-6} L${b} ${WATER}" stroke-width="1.6" opacity=".75"/>`);
  [TOP+4,TOP+56,TOP+116,TOP+176,DECK-26,DECK+30].forEach(y=>h+=`<rect class="s" x="${x-12}" y="${y}" width="24" height="${y<DECK?14:10}" stroke-width="1.4" opacity=".7"/>`);
  h+=`<line class="s" x1="${x}" y1="${WATER}" x2="${x}" y2="${WATER+18}" stroke-width="1" opacity=".3"/>`});
 h+=`<path class="s" d="${cable}" stroke-width="1" opacity=".35"/>`;
 const la="HOLLYWOOD · WESTWOOD · UCLA · GO BRUINS · ROYCE HALL · SUNSET BLVD · SANTA MONICA · VENICE · SILVER LAKE · ";
 h+=`<text font-size="11.5" dy="-4" opacity=".85"><textPath href="#ggcable">${la.repeat(3)}</textPath></text>`;
 h+=`<text font-size="10" opacity=".6"><textPath href="#ggdeck">${"LOS ANGELES → SAN FRANCISCO · ".repeat(12)}</textPath></text>`;
 g.innerHTML=h})();

/* =================== MAYBE: mini player =================== */
function curRoute(){return CUR}
function paintIsland(){const el=document.getElementById("island");const show=on("island")&&playing&&curRoute()!=="/why-me";el.classList.toggle("on",show);if(!show)return;
 document.getElementById("ich").textContent=`Why me · ${String(ISL.ch+1).padStart(2,"0")}`;
 if(ISL.w>=0){const x=WORDS[ISL.w];const ws=x.si.x.split(" ");const k=WORDS.slice(0,ISL.w+1).filter(y=>y.si===x.si).length;document.getElementById("itxt").textContent="“"+ws.slice(Math.max(0,k-6),k).join(" ")+"…”"}}
document.getElementById("island").addEventListener("click",e=>{if(e.target.id==="ipause"){e.stopPropagation();setPlay(false);return}navigate("/why-me")});
addEventListener("hashchange",paintIsland);

/* =================== MAYBE: spotlight =================== */
document.querySelector(".doors").addEventListener("pointermove",e=>{document.querySelectorAll(".door").forEach(d=>{const r=d.getBoundingClientRect();d.style.setProperty("--x",e.clientX-r.left+"px");d.style.setProperty("--y",e.clientY-r.top+"px")})});

/* =================== MAYBE: words light up =================== */
const SW=[...document.querySelectorAll("[data-scrollwords]")];
SW.forEach(p=>{p.innerHTML=p.textContent.split(" ").map(w=>`<span>${w}</span>`).join(" ")});
function words(){SW.forEach(p=>{const r=p.getBoundingClientRect();if(!r.height)return;const prog=Math.max(0,Math.min(1,(innerHeight*.8-r.top)/(innerHeight*.45)));const ws=p.children;const n=Math.round(prog*ws.length);for(let i=0;i<ws.length;i++)ws[i].style.opacity=!on("words")||i<n?1:.14})}
addEventListener("scroll",words,{passive:true});addEventListener("hashchange",()=>setTimeout(words,60));words();

/* =================== MAYBE: draggable photos =================== */
(()=>{const desk=document.getElementById("desk");const items=[["UCLA","Royce Hall",4,14,-5],["CBS Studios","the lot, Studio City",22,52,4],["Kaiser Permanente","Woodland Hills",42,12,-3],["HP Tech Ventures","research notes",61,50,6],["My desk","where CloudMargin started",78,18,-4]];
 desk.innerHTML=items.map(([a,b,x,y,r])=>`<div class="pol" style="left:${x}%;top:${y}px;transform:rotate(${r}deg)"><div class="im">your photo<br/>${b}</div><span>${a}</span></div>`).join("");let z=5;
 desk.querySelectorAll(".pol").forEach(p=>{p.addEventListener("pointerdown",e=>{p.setPointerCapture(e.pointerId);p.style.zIndex=++z;const sx=e.clientX-p.offsetLeft,sy=e.clientY-p.offsetTop;p.onpointermove=m=>{p.style.left=m.clientX-sx+"px";p.style.top=m.clientY-sy+"px"};p.onpointerup=()=>p.onpointermove=null})})})();

/* =================== MAYBE: source hover cards =================== */
const SRC=[["Vercel job post · Financial Systems Administrator","“we want our own team to work like one”"],["Vercel job post · Senior Manager, FP&A Systems","“treating Finance like a product”"],["Vercel blog · Stopping the slow death of internal tools","“Internal tools often decay due to high maintenance costs and security tradeoffs.”"]];
document.querySelectorAll("[data-src]").forEach(el=>{const hc=document.getElementById("hcard");
 el.addEventListener("mouseenter",()=>{if(!on("hover"))return;const [a,b]=SRC[+el.dataset.src];hc.innerHTML=`<small>${a}</small>${b}`;const r=el.getBoundingClientRect();hc.style.left=Math.min(innerWidth-336,r.left)+"px";hc.style.top=r.bottom+10+"px";hc.classList.add("on")});
 el.addEventListener("mouseleave",()=>hc.classList.remove("on"))});

/* =================== nav drill-downs =================== */
const DD={"/why-me":[["01","My story","Listen or read, two minutes","/why-me","#w-story"],["02","The scale of my work","$700M, $6.4M, $600M and more","/why-me","#w-scale"],["03","Places I’ve worked","Photos you can move around","/why-me","#w-places"]],
 "/my-ships":[["↻","How I ship","My building loop, step by step","/my-ships","#s-how"],["01","Variance & reconciliation","Demo · run it yourself","/my-ships","#s-var"],["02","Revenue allocation","Demo · the CFO revision story","/my-ships","#s-alloc"],["03","CloudMargin","Independent · live app","/my-ships","#s-cm"]],
 "/why-vercel":[["01","In Vercel’s own words","Their practices, beside my decisions","/why-vercel","#v-words"],["02","Why tech","The intern who modernizes the work","/why-vercel","#v-why"],["03","Get in touch","Email and résumé","/why-vercel","#v-contact"]]};
(()=>{const dd=document.getElementById("dd"),nav=document.querySelector("header.nav");let hide;
 const go=(r,sel)=>{dd.classList.remove("on");if(curRoute()!==r)navigate(r);setTimeout(()=>{const el=document.querySelector(sel);if(el){const y=el.getBoundingClientRect().top+scrollY-120;scrollTo({top:y,behavior:"smooth"})}},curRoute()===r?0:120)};
 document.querySelectorAll(".links a").forEach(a=>a.addEventListener("mouseenter",()=>{clearTimeout(hide);const items=DD[a.dataset.r];if(!items){dd.classList.remove("on");return}
  dd.innerHTML=items.map(([n,b,s2,r,sel])=>`<a href="#${r}" data-r="${r}" data-sel="${sel}"><i>${n}</i><span><b>${b}</b><small>${s2}</small></span></a>`).join("");
  const ar=a.getBoundingClientRect(),nr=nav.getBoundingClientRect();dd.style.left=(ar.left+ar.width/2)+"px";dd.style.top=(nr.bottom-6)+"px";dd.style.position="fixed";dd.classList.add("on")}));
 const out=()=>{hide=setTimeout(()=>dd.classList.remove("on"),180)};document.querySelector(".links").addEventListener("mouseleave",out);dd.addEventListener("mouseleave",out);dd.addEventListener("mouseenter",()=>clearTimeout(hide));
 dd.addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;e.preventDefault();go(a.dataset.r,a.dataset.sel)})})();


/* =================== WHY VERCEL =================== */
const PR=[
 {p:"Finance works like a team that ships",q:"we want our own team to work like one",src:"Vercel job post, Finance Transformation · Financial Systems Administrator",url:"https://euremotejobs.com/?p=48026",me:"I already worked that way inside a planning team. At CBS Studios I found a manual process, shipped a tool for it on my own, and it became part of the team’s monthly cycle.",link:["See it run","#s-var"],learn:"How a whole finance team builds and maintains tools together, not one person on the side."},
 {p:"Treat finance like a product",q:"treating Finance like a product",src:"Vercel job post · Senior Manager, FP&A Systems",url:"https://job-boards.greenhouse.io/vercel/jobs/5759817004",me:"I treated my allocation tool like a product with users. When the CFO’s revised figures arrived mid-cycle, it took them as a new input and re-reconciled immediately, and I kept improving it after adoption.",link:["See it run","#s-alloc"],learn:"How to prioritise a finance tool roadmap when many teams depend on it."},
 {p:"Internal tools have to survive",q:"Internal tools often decay due to high maintenance costs and security tradeoffs.",src:"Vercel blog · Stopping the slow death of internal tools · Dec 2025",url:"https://vercel.com/blog/stopping-the-slow-death-of-internal-tools",me:"I built for handoff: the CBS Studios team runs both tools without me. My close and reconciliation work at NBCUniversal shows me the controls a tool has to respect to last.",link:["",""],learn:"Access control, ownership and maintenance for tools that touch real financial data."},
 {p:"Ship, then iterate to greatness",q:"launch an initial version rapidly, but will continue to iterate",src:"Vercel value ‘Iterate to greatness’, via Paraform: How Vercel hires",url:"https://www.paraform.com/blog/how-vercel-hires",me:"This application went through three full redesigns before you saw it. Each version shipped, got judged, and the next one kept only what worked.",link:["",""],learn:"How to judge when a finance tool is ready for others to rely on."}
];
let pi=0;
function paintP(){
  $("plist").innerHTML=PR.map((x,i)=>`<button class="${i===pi?"on":""}" data-i="${i}"><span class="n">${String(i+1).padStart(2,"0")}</span>${x.p}</button>`).join("");
  const x=PR[pi];
  $("pview").innerHTML=`<div class="pv-anim"><p class="quote">${x.q}</p><p class="cite"><span>${x.src}</span><a href="${x.url}" target="_blank" rel="noopener">source ↗</a></p>
   <dl class="pv-rows"><div><dt>Where I did this</dt><dd>${x.me}${x.link[0]?` <a href="#/my-ships" data-jump="${x.link[1]}">${x.link[0]} →</a>`:""}</dd></div><div><dt>Still to learn</dt><dd>${x.learn}</dd></div></dl></div>`;
}
$("plist").onclick=e=>{const b=e.target.closest("button");if(!b)return;pi=+b.dataset.i;paintP()};
document.addEventListener("click",e=>{const a=e.target.closest("[data-jump]");if(!a)return;e.preventDefault();navigate("/my-ships");setTimeout(()=>document.querySelector(a.dataset.jump).scrollIntoView({behavior:"smooth"}),80)});
paintP();
const ROT=[
 {t:"Product Finance",l:"Unit economics on a consumption-based platform: how usage, infrastructure cost and pricing set margin.",q:"How do you forecast revenue when usage can spike overnight?",p:`CloudMargin, my model of an AI infrastructure business. <a href="#/my-ships" data-jump="#s-cm">Open →</a>`},
 {t:"GTM & Corporate Finance",l:"How pipeline, bookings and sales capacity turn into a plan, and how the plan is tracked.",q:"How does forecast accuracy change when deals are usage-based instead of seat-based?",p:`Long-range plan variance at CBS Studios; budget-versus-actual across 200 cost centers at Kaiser Permanente.`},
 {t:"Corp Dev & IR",l:"How Vercel evaluates teams and companies to acquire or invest in, and how they’re integrated.",q:"What makes an acquired team’s product fit the platform?",p:`Researching cloud and AI infrastructure startups at HP Tech Ventures. I haven’t worked on a deal; this is the rotation where I’d learn the most.`}
];
let ri=0;
function paintR(){if(!$("rtabs"))return;$("rtabs").innerHTML=ROT.map((r,i)=>`<button class="${i===ri?"on":""}" data-i="${i}">${r.t}</button>`).join("");
 const r=ROT[ri];$("rot").innerHTML=[["What I’d learn",r.l],["A question I’d bring",r.q],["What prepared me",r.p]].map(([a,b],i)=>`<div style="animation-delay:${i*.07}s"><dt>${a}</dt><dd>${b}</dd></div>`).join("")}
if($("rtabs"))$("rtabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;ri=+b.dataset.i;paintR()};paintR();

/* =================== ⌘K =================== */
/* ⌘K with expandable drill-downs */
const KT=[
 {n:"Home",r:"/",kids:[]},
 {n:"Why me",r:"/why-me",kids:[["My story · listen or read","#w-story"],["Play my story","play"],["The scale of my work","#w-scale"],["Places I’ve worked","#w-places"]]},
 {n:"My ships",r:"/my-ships",kids:[["How I ship · the building loop","#s-how"],["01 Variance & reconciliation · demo","#s-var"],["02 Revenue allocation · demo","#s-alloc"],["03 CloudMargin · live app","#s-cm"]]},
 {n:"Why Vercel",r:"/why-vercel",kids:[["In Vercel’s own words","#v-words"],["Why tech","#v-why"],["Get in touch","#v-contact"]]},
 {n:"Contact",r:null,kids:[["Email Bouchra","mailto:bouchraalioua@g.ucla.edu"],["Download résumé","#"]]}];
let kopen=new Set(),ksel=0,kitems=[];
function openK(){$("cmdk").classList.add("on");$("kq").value="";kopen=new Set([KT.findIndex(g=>g.r===curRoute())]);ksel=0;paintK();setTimeout(()=>$("kq").focus(),20)}
function closeK(){$("cmdk").classList.remove("on")}
function paintK(){const q=$("kq").value.toLowerCase().trim();kitems=[];
 KT.forEach((g,gi)=>{const kids=g.kids.filter(k=>!q||k[0].toLowerCase().includes(q)||g.n.toLowerCase().includes(q));const self=!q||g.n.toLowerCase().includes(q);
  if(!self&&!kids.length)return;const open=q?true:kopen.has(gi);
  kitems.push({type:"g",gi,g,open,has:g.kids.length>0});if(open)kids.forEach(k=>kitems.push({type:"k",g,k}))});
 ksel=Math.min(ksel,Math.max(0,kitems.length-1));
 $("kl").innerHTML=kitems.map((it,i)=>it.type==="g"?`<li class="kg ${i===ksel?"sel":""}" data-i="${i}"><span><b class="chev ${it.open?"o":""}">${it.has?"›":""}</b>${it.g.n}</span><small>${it.has?(it.open?"← collapse":"→ expand"):"↵"}</small></li>`:`<li class="kk ${i===ksel?"sel":""}" data-i="${i}"><span>${it.k[0]}</span><small>↵</small></li>`).join("")||`<li><span style="color:var(--soft)">No results</span></li>`;
 const sel=$("kl").querySelector("li.sel");sel&&sel.scrollIntoView({block:"nearest"})}
function toggleG(it,force){if(!it||it.type!=="g"||!it.has)return false;const want=force===undefined?!kopen.has(it.gi):force;want?kopen.add(it.gi):kopen.delete(it.gi);paintK();return true}
function goK(it){if(!it)return;if(it.type==="g"){if(it.g.r){closeK();navigate(it.g.r)}else toggleG(it);return}
 closeK();const t=it.k[1],r=it.g.r||curRoute();
 if(t==="play"){navigate("/why-me");setTimeout(()=>setPlay(true),300);return}
 if(t.startsWith("mailto")){location.href=t;return}
 if(t==="#")return;
 if(curRoute()!==r)navigate(r);setTimeout(()=>{const el=document.querySelector(t);if(el)scrollTo({top:el.getBoundingClientRect().top+scrollY-120,behavior:"smooth"})},120)}
$("open-k").onclick=openK;
addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("cmdk").classList.contains("on")?closeK():openK()}
 if(!$("cmdk").classList.contains("on"))return;
 const it=kitems[ksel];
 if(e.key==="Escape")closeK();
 if(e.key==="ArrowDown"){ksel=Math.min(kitems.length-1,ksel+1);paintK();e.preventDefault()}
 if(e.key==="ArrowUp"){ksel=Math.max(0,ksel-1);paintK();e.preventDefault()}
 if(e.key==="ArrowRight"&&toggleG(it,true))e.preventDefault();
 if(e.key==="ArrowLeft"){if(it&&it.type==="k"){const gi=KT.indexOf(it.g);kopen.delete(gi);ksel=kitems.findIndex(x=>x.type==="g"&&x.gi===gi);paintK()}else toggleG(it,false);e.preventDefault()}
 if(e.key==="Enter"&&it)goK(it)});
$("kq").oninput=()=>{ksel=0;paintK()};
$("kl").onclick=e=>{const li=e.target.closest("li[data-i]");if(!li)return;const it=kitems[+li.dataset.i];if(e.target.closest(".chev")||(it.type==="g"&&!it.g.r)){ksel=+li.dataset.i;toggleG(it);return}goK(it)};
$("kl").addEventListener("mousemove",e=>{const li=e.target.closest("li[data-i]");if(li&&+li.dataset.i!==ksel){ksel=+li.dataset.i;$("kl").querySelectorAll("li").forEach(x=>x.classList.toggle("sel",x===li))}});
$("cmdk").onclick=e=>{if(e.target.id==="cmdk")closeK()};

route();
