// The page markup. Edit text here.
export const markup = String.raw`
<div class="guides" aria-hidden="true"></div>
<div class="backdrop" aria-hidden="true">
  <div class="glow"></div><div class="ledger"></div><div class="margin"></div><div class="grid"></div>
  <svg class="cross" id="cross"></svg>
  <svg class="trend" viewBox="0 0 1440 900" preserveAspectRatio="none"><path d="M0 640 C 180 630, 260 600, 380 610 S 560 560, 660 520 S 820 470, 900 400 S 1060 330, 1150 250 S 1320 160, 1440 120"/><circle cx="1150" cy="250" r="4"/></svg>
</div>

<header class="nav">
  <div class="wrap">
    <a class="brand" href="#home" aria-label="Home"><span class="dot">BA</span><span class="full">Bouchra Alioua</span></a>
    <nav class="links" aria-label="Pages"><span class="hl"></span><span class="act"></span>
      <a href="#home" data-r="/">Home</a>
      <a href="#why-me" data-r="/why-me">Why me</a>
      <a href="#my-ships" data-r="/my-ships">My ships</a>
      <a href="#why-vercel" data-r="/why-vercel">Why Vercel</a>
    </nav>
    <div class="tools">
      <button class="kbd" id="theme" aria-label="Toggle dark mode">◐</button>
      <button class="kbd" id="open-k" aria-label="Open command menu">⌘K</button>
      <a class="btn ghost" href="#" onclick="return false">Résumé ↓</a>
    </div>
  </div>
</header>

<main>
<!-- ============================ HOME ============================ -->
<section class="route" data-route="/">
  <div class="wrap home">
    <div class="hero">
      <div class="hero-l">
        <p class="kicker hero-status"><i></i>Applying · Vercel Finance Rotational Program</p>
        <h1>Bouchra<br/>Alioua</h1>
        <p class="hero-sub">Economics at UCLA, minor in Statistics &amp; Data Science, class of 2027. Six finance roles across media, healthcare, venture research and nonprofits.</p>
        <div class="hero-cta">
          <a class="btn lg" href="#my-ships">See what I built →</a>
          <button class="btn ghost lg" onclick="openK()"><span class="mono" style="font-size:12px">⌘K</span> Jump anywhere</button>
        </div>
      </div>
      <figure class="portrait">
        <div class="ph">your photo<br/>4:5 · natural light</div>
        <figcaption class="mono"><span>Los Angeles</span><span>UCLA ’27</span></figcaption>
      </figure>
    </div>

    <div class="carousel" aria-label="Where I have worked">
      <div class="car-track"><div class="car-item"><dt>Media</dt><dd><b>Paramount · CBS Studios</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Media</dt><dd><b>NBCUniversal</b><span>Production Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><dd><b>Kaiser Permanente</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Venture research</dt><dd><b>HP Tech Ventures</b><span>Startup research externship</span></dd></div><div class="car-item"><dt>Nonprofit</dt><dd><b>International Rescue Committee</b><span>Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><dd><b>SFV Mental Health Center</b><span>Finance &amp; Accounting Intern</span></dd></div><div class="car-item"><dt>Campus</dt><dd><b>UCLA DataRes</b><span>VP of Finance</span></dd></div><div class="car-item"><dt>Campus</dt><dd><b>UCLA · appointed by the Chancellor</b><span>Undergraduate representative, campus funding</span></dd></div><div aria-hidden="true" style="display:contents"><div class="car-item"><dt>Media</dt><dd><b>Paramount · CBS Studios</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Media</dt><dd><b>NBCUniversal</b><span>Production Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><dd><b>Kaiser Permanente</b><span>FP&amp;A Intern</span></dd></div><div class="car-item"><dt>Venture research</dt><dd><b>HP Tech Ventures</b><span>Startup research externship</span></dd></div><div class="car-item"><dt>Nonprofit</dt><dd><b>International Rescue Committee</b><span>Finance Intern</span></dd></div><div class="car-item"><dt>Healthcare</dt><dd><b>SFV Mental Health Center</b><span>Finance &amp; Accounting Intern</span></dd></div><div class="car-item"><dt>Campus</dt><dd><b>UCLA DataRes</b><span>VP of Finance</span></dd></div><div class="car-item"><dt>Campus</dt><dd><b>UCLA · appointed by the Chancellor</b><span>Undergraduate representative, campus funding</span></dd></div></div></div>
    </div>

    <div class="doors">
      <a class="door" href="#why-me">
        <div class="top"><h2>Why me</h2><span class="arrow">→</span></div>
        <p>Six roles, four industries, and the decisions that connect them. Told in my own voice, with a live transcript.</p>
        <div class="peek">
          <div style="display:flex;justify-content:space-between;font-size:12px;align-items:center"><span style="display:flex;gap:8px;align-items:center"><span class="pp">▶</span>Listen</span><span class="mono" style="color:var(--mute)" id="wt">0:00 / 1:42</span></div>
          <div class="wave" id="wave"></div>
          <p class="cap-line" id="capline">My first finance roles taught me how numbers get recorded, checked and explained.</p>
        </div>
      </a>
      <a class="door" href="#my-ships">
        <div class="top"><h2>My ships</h2><span class="arrow">→</span></div>
        <p>Two self-conceptualized finance applications built at CBS Studios, both adopted by the team, plus CloudMargin. Run them yourself.</p>
        <div class="peek sp">
          <div class="sp-row"><i class="sd"></i><div><b>LRP variance app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">2 hrs → &lt;10 s</span></div>
          <div class="sp-row"><i class="sd"></i><div><b>Revenue allocation app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">$700M / yr</span></div>
          <div class="sp-row"><i class="sd live"></i><div><b>CloudMargin</b><small>Independent · live</small></div><span class="sp-m mono">live ↗</span></div>
        </div>
      </a>
      <a class="door" href="#why-vercel">
        <div class="top"><h2>Why Vercel</h2><span class="arrow">→</span></div>
        <p>I was always the quiet technologist on finance teams. Here’s why I want to be somewhere that’s the job.</p>
        <div class="peek pair" id="vpeek"></div>
      </a>
    </div>
  </div>
</section>

<!-- ============================ WHY ME ============================ -->
<section class="route" data-route="/why-me">
  <div class="wrap page-head">
    <p class="kicker">01 · Why me</p>
    <h1 class="h-page" style="margin-top:14px">Why me</h1>
    <p class="lead">A two-minute story in my own voice, and the scale of the work behind it.</p>
  </div>
  <div class="wrap" style="padding-bottom:44px">
    <div class="player" id="w-story">
      <div class="stage">
        <div class="scene" id="scene"></div>
        <div class="controls">
          <button class="play" id="play" aria-label="Play">▶</button>
          <div class="bar" id="bar"><div class="fill" id="fill"></div></div>
          <span class="time" id="time">0:00 / 2:10</span>
          <button class="speed" id="speed">1×</button>
        </div>
        <div class="chapters" id="chapters"></div>
      </div>
      <div>
        <div class="mode"><div class="seg" id="tmode"><button class="on" data-m="listen">Listen</button><button data-m="read">Read</button></div></div>
        <div class="transcript" id="transcript"></div>
        <p class="draft">Mock: playback is simulated until your recording is added. Script is a draft built from your existing copy — rewrite in your own words before recording.</p>
      </div>
    </div>
  </div>




  <div class="sec"><div class="wrap">
    <p class="kicker" id="w-scale">The scale I’ve worked at</p>
    <div class="scale">
      <div><b>$700M</b><span>Paramount+ revenue a year, allocated by an app I built</span></div>
      <div><b>$6.4M</b><span>over-allocation I found, fixed and presented to the CFO</span></div>
      <div><b>$600M</b><span>Kaiser Permanente budget, 27 locations, 200 cost centers</span></div>
      <div><b>$45M</b><span>campus funding I advise on, appointed by the UCLA Chancellor</span></div>
      <div><b>$5.5M</b><span>managed directly <em class="todo">· add which budget</em></span></div>
    </div>
  </div></div>
  <div class="sec" data-maybe="photos" id="w-places"><div class="wrap">
    <p class="kicker">Places I’ve worked · drag them around</p>
    <div class="desk" id="desk"></div>
  </div></div>
  <a class="next wrap" href="#my-ships"><span class="kicker">Next</span><b>My ships <span>→</span></b></a>
</section>

<!-- ============================ SHIPS ============================ -->
<section class="route" data-route="/my-ships">
  <div class="wrap page-head">
    <p class="kicker">02 · My ships</p>
    <h1 class="h-page" style="margin-top:14px">My ships</h1>
    <p class="lead">Two self-conceptualized applications I built at CBS Studios, both adopted into the team’s workflow, plus CloudMargin, built independently. Each starts with the real story, then a version you can run.</p>
  </div>
  <div class="ship-nav"><div class="wrap">
    <a href="#s-how" data-s="s-how" class="on">How I ship</a>
    <a href="#s-var" data-s="s-var">01 Variance &amp; reconciliation</a>
    <a href="#s-alloc" data-s="s-alloc">02 Revenue allocation</a>
    <a href="#s-cm" data-s="s-cm">03 CloudMargin</a>
  </div></div>

  <!-- How I ship: simple stepper -->
  <div class="wrap" id="s-how" style="padding-top:36px;padding-bottom:12px">
    <p class="kicker">How I ship</p>
    <h2 class="h-sec" style="margin-top:10px;max-width:24ch">I build the way Vercel says it builds.</h2>
    <div class="steps6" id="steps6"></div>
    <div class="step-panel" id="steppanel"></div>
  </div>

  <div class="wrap chain" id="chain">

    <!-- ===== SHIP 01 ===== -->
    <article class="ship" id="s-var">
      <div class="ship-head">
        <div>
          <p class="kicker">01 · Paramount · CBS Studios · 2026</p>
          <h2 class="h-sec">Understand the process before automating it.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>Long-range plan variance &amp; reconciliation, driven by production schedules</dd></div>
          <div><dt>Result</dt><dd>~2 hours by hand → under 10 seconds, plus KPI insights</dd></div>
          <div><dt>Status</dt><dd>Self-initiated and built alone; adopted into the team’s monthly workflow</dd></div>
        </dl>
      </div>

      <div class="story">
        <p>Every month, production schedules arrived by email as PDFs. A single shifted production date could move money between years in the <b>1,000+ line long-range plan</b>, which held the strategy for future slates and titles.</p>
        <p>My tool took the whole email at once. It pulled out the PDFs, read the production dates, matched them to the plan, ran every reconciliation, and added KPI insights on what moved and why.</p>
        <p>The VP of Strategy then planned to run it from his own Claude: find the new schedule in his inbox, check it against that month’s plan, and send him the variance report.</p>
      </div>
      <div class="flowline">
        <span class="fl"><i>✉</i>Email with production schedules (PDFs)</span><b>→</b>
        <span class="fl"><i>▦</i>1,000+ line long-range plan</span><b>→</b>
        <span class="fl dark"><i>⚙</i>My tool: extract · match · reconcile</span><b>→</b>
        <span class="fl"><i>▤</i>Variance report + KPI insights</span>
      </div>

      <p class="try-label"><span>Try a synthetic version</span></p>
      <div class="demo" id="vdemo">
        <div class="demo-bar">
          <div class="title"><span class="lights"><i></i><i></i><i></i></span>lrp-variance · synthetic data</div>
          <button class="btn ghost" id="vreset">Reset</button>
        </div>
        <div class="vbody">
          <div class="vin">
            <p class="panel-h">Inputs · drag them into the workspace, or click</p>
            <div class="mail drag" draggable="true" data-k="email" id="din-email">
              <div class="mail-h"><b>Production schedule update · November</b><small class="mono">from: Production Planning</small></div>
              <p>Attached are the updated production schedules. A few titles have moved.</p>
              <div class="atts"><span class="att">PDF · Schedule_Series.pdf</span><span class="att">PDF · Schedule_Features.pdf</span></div>
            </div>
            <div class="lrpcard drag" draggable="true" data-k="lrp" id="din-lrp"><span class="ico xls">XLS</span><div><b>LRP_FY27–29.xlsx</b><small class="mono">1,000+ lines · 10 titles shown</small></div></div>
            <div class="extract" id="vextract">
              <p class="panel-h">Extracted from the PDFs · edit to try your own</p>
              <textarea id="vtext" spellcheck="false"></textarea>
            </div>
          </div>
          <div class="vout">
            <div class="vdrop" id="vdrop"><p class="empty">Drop the email and the LRP workbook here</p></div>
            <div class="vsteps" id="vsteps"><span>Extract PDFs</span><span>Read dates</span><span>Match titles</span><span>Reconcile</span><span>Insights</span></div>
            <div class="kpis" id="kpis"></div>
            <div class="out"><table class="t" id="vtable"><thead><tr><th>Title</th><th>LRP start</th><th>Revised</th><th>Shift</th><th>FY27 $M</th><th>FY28 $M</th><th>FY29 $M</th></tr></thead><tbody></tbody></table></div>
            <div class="status" id="vstatus"><span>Waiting for the email and the LRP.</span><span class="mono"></span></div>
          </div>
        </div>
        <div class="foot"><span>Synthetic titles and figures. Spend books 60% in the production-start year and 40% in the next.</span><span class="mono">runs in your browser</span></div>
      </div>
    </article>

    <div class="link"><span class="lk mono">01 → 02 · same instinct: make the numbers tie</span></div>

    <!-- ===== SHIP 02 ===== -->
    <article class="ship" id="s-alloc">
      <div class="ship-head">
        <div>
          <p class="kicker">02 · Paramount · CBS Studios · 2026</p>
          <h2 class="h-sec">A faster number is only useful if it’s right.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>Paramount+ revenue allocation: a ~$700M pool across 30+ titles</dd></div>
          <div><dt>Result</dt><dd>Weeks of back-and-forth → instant; caught a $6.4M forward-year over-allocation</dd></div>
          <div><dt>Status</dt><dd>Self-initiated; adopted for the 2027–28 planning cycle; answered a live what-if for the CFO</dd></div>
        </dl>
      </div>
      <div class="story">
        <p>I went looking for Paramount+ data because I wanted to get closer to streaming and churn metrics. A model that split a ~$700M pool across 30+ titles existed, but reconciling it took <b>weeks of back-and-forth between teams</b>. Even title names didn’t match between Paramount and CBS data.</p>
        <p>So I mapped every way it could fail: mismatched names, different data formats, pools that didn’t sum. Then I built a <b>new, consistent model</b> that switches between the cable and streaming models in one step.</p>
        <p>The VP expected a process that spans weeks; mine runs instantly. When the CBS Studios CFO wanted to test higher viewership for one show, the tool showed how the pool would shift on the spot. Checking that pool sums tied is how I found the <b>$6.4M error</b>.</p>
      </div>
      <div class="flowline">
        <span class="fl"><i>▦</i>Paramount+ viewing data</span><b>+</b>
        <span class="fl"><i>▦</i>CBS title data</span><b>→</b>
        <span class="fl dark"><i>⚙</i>Match titles · cable ⇄ streaming model</span><b>→</b>
        <span class="fl"><i>✓</i>Allocation that ties to the pool</span>
      </div>

      <p class="try-label"><span>Try a synthetic version</span></p>
      <div class="demo" id="adem">
        <div class="fg-layer" id="fgl"></div>
        <div class="demo-bar">
          <div class="title"><span class="lights"><i></i><i></i><i></i></span>revenue-allocation · synthetic data</div>
          <div style="display:flex;gap:8px"><button class="btn" id="astory">▶ Play the story</button><button class="btn ghost" id="areset">Reset</button></div>
        </div>
        <div class="abody one">
          <div class="acol">
            <div class="arow"><p class="panel-h">Paramount+ titles, allocated against CBS records</p><button class="btn ghost" id="amatch">Match titles</button></div>
            <div class="abars" id="abars"></div>
            <div class="arow ctl">
              <div class="seg" id="amodel"><button class="on" data-m="stream">Streaming model</button><button data-m="cable">Cable model</button></div>
              <div class="seg" id="asrc"><button class="on" data-s="mine">My model</button><button data-s="old">Old process</button></div>
            </div>
            <div class="whatif">
              <label for="wtitle">What if viewership for</label>
              <select id="wtitle"></select>
              <span>changes by</span>
              <input type="range" id="wpct" min="-50" max="50" step="5" value="0"/>
              <b class="mono" id="wpctv">+0%</b>
            </div>
            <div class="status" id="astatus"></div>
          </div>
        </div>
        <div class="foot"><span>Synthetic $120M pool and titles. The real pool was ~$700M across 30+ titles.</span><span class="mono">allocation = pool × share</span></div>
      </div>
    </article>

    <div class="link"><span class="lk mono">02 → 03 · from fixing a model to building one to learn</span></div>

    <!-- ===== SHIP 03 ===== -->
    <article class="ship" id="s-cm">
      <div class="ship-head">
        <div>
          <p class="kicker">03 · Independent · 2026</p>
          <h2 class="h-sec">Build to understand a business.</h2>
        </div>
        <dl class="ship-meta">
          <div><dt>What</dt><dd>CloudMargin: usage, cost, revenue and gross margin for an AI infrastructure business, with forecast scenarios</dd></div>
          <div><dt>Stack</dt><dd>v0 · Next.js · Python · GitHub · Vercel</dd></div>
          <div><dt>Status</dt><dd>Live, synthetic data, built before this application</dd></div>
        </dl>
      </div>
      <div class="story">
        <p>After the allocation work I wanted to understand a business where revenue moves with usage. Instead of only reading about AI infrastructure economics, I modelled one: how usage drives cost and revenue, where gross margin comes from, and how scenarios change the forecast.</p>
      </div>
      <div class="shots">
        <a class="shot img wide" href="cloudmargin/cm-1.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-1.jpg" alt="CloudMargin overview: from agent demand to investment decisions" loading="lazy"/><span class="mono">01 · FP&amp;A · What if agents handle more of the workload?</span></a>
        <a class="shot img" href="cloudmargin/cm-2.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-2.jpg" alt="CloudMargin product finance: which customers are expensive to serve" loading="lazy"/><span class="mono">02 · Product Finance · Which customers are expensive to serve?</span></a>
        <a class="shot img" href="cloudmargin/cm-3.jpg" target="_blank" rel="noopener"><img src="cloudmargin/cm-3.jpg" alt="CloudMargin investment decision: build, buy, or wait" loading="lazy"/><span class="mono">03 · Investment · Should we build, buy, or wait?</span></a>
      </div>
      <div style="margin-top:18px"><a class="btn" href="https://vercel-frpbuilt.vercel.app/" target="_blank" rel="noopener">Open CloudMargin ↗</a></div>
    </article>
  </div>

  <a class="next wrap" href="#why-vercel"><span class="kicker">Next</span><b>Why Vercel <span>→</span></b></a>
</section>

<!-- ============================ WHY VERCEL ============================ -->
<section class="route" data-route="/why-vercel">
  <div class="wrap page-head">
    <p class="kicker">03 · Why Vercel</p>
    <h1 class="h-page" style="margin-top:14px">Why Vercel</h1>
    <p class="lead vlead">On every finance team I’ve joined, I was quietly the person improving the process with technology. At Vercel, that isn’t a side role. It’s how finance works.</p>
  </div>

  <div class="sec" id="v-pattern" style="padding-top:28px"><div class="wrap">
    <p class="kicker">The pattern</p>
    <div class="vsplit">
      <h2 class="h-sec">I kept being onboarded as the silent innovator.</h2>
      <div class="vprose">
        <p>Each team brought me on for finance. Each time, I ended up using technology to improve how that finance got done. Nobody called it a pattern, but it became one, and every small change rippled further than the task I was given.</p>
        <p>It had me wondering how to get closer to where those tools come from.</p>
      </div>
    </div>
    <div class="ptrail">
      <div><span class="mono">Kaiser Permanente</span><b>Modernized reporting with Tableau</b></div>
      <i>→</i>
      <div><span class="mono">SFV Mental Health Center</span><b>Digitized accounting processes</b></div>
      <i>→</i>
      <div><span class="mono">Paramount · CBS Studios</span><b>Built the tools myself</b></div>
      <i>→</i>
      <div class="end"><span class="mono">Vercel</span><b>Where building is the job</b></div>
    </div>
  </div></div>

  <div class="sec" id="v-chase"><div class="wrap">
    <p class="kicker">I’d been chasing tech before I applied</p>
    <div class="chase">
      <div><span class="mono">01</span><b>Vice President, Girls Who Code</b><p>Kept me close to the tech world as a finance person. It’s how I first knew of Vercel.</p></div>
      <div><span class="mono">02</span><b>HP Tech Ventures</b><p>I studied the fund’s investment thesis and the up-and-coming AI and cloud infrastructure companies that fit it.</p></div>
      <div><span class="mono">03</span><b>Guillermo Rauch’s interview</b><p>Hearing how Vercel builds turned it from a company I knew of into one I wanted to work for. <em class="todo">· name one thing he said that stuck</em></p></div>
      <div><span class="mono">04</span><b>CloudMargin, built in v0</b><p>On my own, before this application, to understand how an AI infrastructure business makes money. <a href="#my-ships" data-jump="#s-cm">See it ↗</a></p></div>
    </div>
  </div></div>

  <div class="sec" id="v-noticed"><div class="wrap">
    <p class="kicker">What I noticed, moving between industries</p>
    <h2 class="h-sec" style="margin-top:10px;max-width:30ch">Corporate finance runs on the same cycles everywhere. What changes is what each industry cares about.</h2>
    <div class="band3">
      <div><span class="mono">Healthcare</span><b>taught me to diagnose.</b><p>Its metrics have barely moved in decades. The work is finding where a system breaks and making it better.</p></div>
      <div><span class="mono">Entertainment</span><b>taught me to create.</b><p>Same planning cycle, different priorities: titles, slates, windows. Every project I shipped at CBS Studios was self-conceptualized.</p></div>
      <div><span class="mono">Technology</span><b>is still forming.</b><p>The industry is still deciding what to measure. In tech, finance doesn’t just follow the playbook; it helps write it. That’s where I want to be.</p></div>
    </div>
  </div></div>

  <div class="sec" id="v-rot"><div class="wrap">
    <p class="kicker">The rotations</p>
    <div class="rot-head">
      <h2 class="h-sec" style="max-width:24ch">Why a rotation fits me.</h2>
      <p class="rot-why">I’ve seen the same finance cycle from FP&amp;A, accounting operations, nonprofit finance and venture research. A rotation lets me bring all of it to one business that is still writing its playbook.</p>
    </div>
    <div class="rots">
      <article class="rt"><b>Product Finance</b><dl>
        <dt>Where it starts for me</dt><dd>I built <a href="#my-ships" data-jump="#s-cm">CloudMargin</a> to understand usage-based economics on my own, and my <a href="#my-ships" data-jump="#s-alloc">allocation model</a> worked title by title across cable and streaming.</dd>
        <dt>What I’d bring</dt><dd>The habit of building the model I need, then proving it ties before anyone relies on it.</dd></dl></article>
      <article class="rt"><b>GTM &amp; Corporate Finance</b><dl>
        <dt>Where it starts for me</dt><dd>I’ve worked the planning cycle from three sides: <a href="#my-ships" data-jump="#s-var">long-range plan reconciliation</a> at CBS Studios, a $600M budget at Kaiser, and close at NBCUniversal.</dd>
        <dt>What I’d bring</dt><dd>Turning a recurring manual process into something the team runs in seconds.</dd></dl></article>
      <article class="rt"><b>Corp Dev &amp; IR</b><dl>
        <dt>Where it starts for me</dt><dd>At HP Tech Ventures I studied an investment thesis and the AI and cloud infrastructure companies that fit it.</dd>
        <dt>What I’d bring</dt><dd>A research habit for emerging companies, and practice explaining financial work to senior leaders, including a CFO.</dd></dl></article>
    </div>
  </div></div>
  <div class="sec bridge-sec" id="v-contact">
    <svg class="bridge" id="bridge" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax meet" aria-hidden="true"></svg>
    <div class="wrap bridge-copy">
      <h2 class="h-sec">Thank you for reading.</h2>
      <p class="lead" style="margin:12px auto 0">I’d love to bring this to Vercel’s finance team in San Francisco.</p>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:22px"><a class="btn" href="mailto:bouchraalioua@g.ucla.edu">Email me</a><a class="btn ghost" href="#" onclick="return false">Résumé ↓</a></div>
      <p class="gg-cap">The Golden Gate, with its cable written in Los Angeles.</p>
    </div>
  </div>
  <a class="next wrap" href="#home"><span class="kicker">Back to</span><b>Home <span>→</span></b></a>
</section>
</main>

<footer class="site"><div class="wrap"><span>Bouchra Alioua · bouchraalioua@g.ucla.edu</span><span class="mono">Built with v0 · Nov 2026</span></div></footer>

<div class="cmdk" id="cmdk" role="dialog" aria-label="Command menu">
  <div class="box"><input id="kq" placeholder="Jump to a page or demo…" autocomplete="off" /><ul id="kl"></ul></div>
</div>

<div class="island" id="island" role="button" aria-label="Back to Why me"><span class="mb"><i></i><i></i><i></i></span><span><b style="font-weight:500" id="ich">Why me</b> <span class="wtxt" id="itxt"></span></span><button id="ipause" aria-label="Pause">❚❚</button></div>
<div class="hcard" id="hcard"></div>
<div class="dd" id="dd"></div>


`;
