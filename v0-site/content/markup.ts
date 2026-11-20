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
        <p>Two finance applications I conceived and built alone at CBS Studios, both adopted by the team, plus CloudMargin. Run them yourself.</p>
        <div class="peek sp">
          <div class="sp-row"><i class="sd"></i><div><b>LRP variance app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">2 hrs → &lt;10 s</span></div>
          <div class="sp-row"><i class="sd"></i><div><b>Revenue allocation app</b><small>CBS Studios · adopted</small></div><span class="sp-m mono">$700M / yr</span></div>
          <div class="sp-row"><i class="sd live"></i><div><b>CloudMargin</b><small>Independent · live</small></div><span class="sp-m mono">live ↗</span></div>
        </div>
      </a>
      <a class="door" href="#why-vercel">
        <div class="top"><h2>Why Vercel</h2><span class="arrow">→</span></div>
        <p>Vercel’s finance team builds its own tools. Here is where I’ve already done that, set against Vercel’s own words, and why I want to build in tech.</p>
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
    <p class="lead">Two applications I conceived and built on my own at CBS Studios, both adopted into the team’s workflow, and CloudMargin, which I built independently. Each one starts with the real story, then a synthetic version you can run.</p>
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
    <svg class="chain-curve" id="chaincurve" aria-hidden="true"></svg>

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
          <div style="display:flex;gap:8px"><button class="btn" id="vdl">Download email</button><button class="btn ghost" id="vreset">Reset</button></div>
        </div>
        <div class="vbody">
          <div class="vin">
            <div class="mail">
              <div class="mail-h"><b>Production schedule update · November</b><small class="mono">from: Production Planning</small></div>
              <p>Attached are the updated production schedules. Three titles have moved.</p>
              <div class="atts"><span class="att" id="att1">PDF · Schedule_Series.pdf</span><span class="att" id="att2">PDF · Schedule_Features.pdf</span></div>
            </div>
            <div class="extract" id="vextract">
              <p class="panel-h">Extracted from the PDFs · edit to try your own</p>
              <textarea id="vtext" spellcheck="false"></textarea>
            </div>
            <div class="lrpcard"><span class="ico xls">XLS</span><div><b>LRP_FY27–29.xlsx</b><small class="mono">1,000+ lines · 10 titles shown</small></div></div>
          </div>
          <div class="vout">
            <div class="vsteps" id="vsteps"><span>Download</span><span>Extract PDFs</span><span>Match titles</span><span>Reconcile</span><span>Insights</span></div>
            <div class="kpis" id="kpis"></div>
            <div class="out"><table class="t" id="vtable"><thead><tr><th>Title</th><th>LRP start</th><th>Revised</th><th>Shift</th><th>FY27 $M</th><th>FY28 $M</th><th>FY29 $M</th></tr></thead><tbody></tbody></table></div>
            <div class="status" id="vstatus"><span>Press “Download email” to start.</span><span class="mono"></span></div>
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
        <div class="abody">
          <div class="acol">
            <p class="panel-h">1 · Match titles across sources</p>
            <div class="out"><table class="t tight" id="mtable"><thead><tr><th>Paramount+ data</th><th>CBS data</th><th>Match</th></tr></thead><tbody></tbody></table></div>
            <p class="msum mono" id="msum"></p>
          </div>
          <div class="acol">
            <div class="arow">
              <p class="panel-h">2 · Allocate the pool</p>
              <div class="seg" id="amodel"><button class="on" data-m="stream">Streaming</button><button data-m="cable">Cable</button></div>
            </div>
            <div class="abars" id="abars"></div>
            <div class="whatif">
              <label for="wtitle">What if viewership for</label>
              <select id="wtitle"></select>
              <span>changes by</span>
              <input type="range" id="wpct" min="-50" max="50" step="5" value="0"/>
              <b class="mono" id="wpctv">+0%</b>
            </div>
            <div class="arow" style="margin-top:6px">
              <p class="panel-h">3 · Tie out</p>
              <div class="seg" id="asrc"><button class="on" data-s="mine">My model</button><button data-s="old">Old process</button></div>
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
        <div class="shot">screenshot 1 · the main view<br/>(1600×1000 PNG)</div>
        <div class="shot">screenshot 2 · scenarios</div>
        <div class="shot">screenshot 3 · margin drivers</div>
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
    <p class="lead">Vercel has written publicly about how its finance team works: <span data-src="0">a team that ships</span>, <span data-src="1">finance treated like a product</span>, and <span data-src="2">tools that have to survive</span>. Here is where that matches decisions I’ve already made, and why I want to do this work in tech.</p>
  </div>
  <div class="wrap" style="padding-bottom:44px">
    <p class="kicker" id="v-words">How Vercel works, in its own words</p>
    <div class="practice">
      <div class="plist" id="plist"></div>
      <div class="pview" id="pview"></div>
    </div>
  </div>
  <div class="sec" id="v-why" style="position:relative;overflow:hidden"><div class="wrap" style="position:relative;z-index:1">
    <p class="kicker">Why tech</p>
    <h2 class="h-sec" style="margin-top:12px;max-width:26ch">Healthcare taught me to diagnose. Entertainment taught me to create. Tech is where I want to build.</h2>
    <div class="acts">
      <div class="act"><span class="mono an">01 · Healthcare</span><b>Diagnose</b><p>Finding where a system breaks, and making it better. At <em>Kaiser Permanente</em> I helped the team modernize its reporting with Tableau. At <em>SFV Mental Health Center</em> I helped digitize accounting processes.</p></div>
      <div class="act"><span class="mono an">02 · Entertainment</span><b>Create</b><p>Being creative about problems nobody had assigned. At <em>Paramount · CBS Studios</em> I conceived and built every one of my projects myself, and each went into the team’s workflow. At <em>NBCUniversal</em> I learned the controls good tools have to respect.</p></div>
      <div class="act"><span class="mono an">03 · Technology</span><b>Build</b><p>Tech has always pulled at me. I added a <em>Statistics &amp; Data Science</em> minor to get closer to its tools, learned <span class="mono chips">SQL · Python · R · C++</span>, and built CloudMargin to keep scratching the itch.</p></div>
    </div>
    <p class="why-close1">In every role I was onboarded as the intern asked to innovate with technology. Each time, it pulled me closer to the industry where that is simply how the work gets done.</p>
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
