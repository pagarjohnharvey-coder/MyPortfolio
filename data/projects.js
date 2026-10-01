<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>YOUR NAME — Digital Systems &amp; Google Sheets Portfolio</title>
<meta name="description" content="Interactive portfolio showcasing Google Sheets systems, dashboards, CRM tools, financial models, automation, and business solutions.">
<meta property="og:title" content="YOUR NAME — Digital Systems &amp; Google Sheets Portfolio"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2360A5FA'/%3E%3C/svg%3E">
<script type="application/ld+json" id="ld"></script><link rel="stylesheet" href="styles.css"></head><body>
<div id="prog"></div><div class="top" aria-hidden="true"><i></i><i></i><i></i></div>
<div class="app">
<aside class="me glass">
 <button class="av" id="av" aria-label="Say hi"></button>
 <h1 id="nm"></h1><p class="role"><span id="role"></span><span class="caret"></span></p>
 <dl><dt>Email (tap to copy)</dt><dd><button class="lnk" id="em"></button></dd><dt>Location</dt><dd id="lo"></dd></dl>
 <div class="row" id="social"></div>
 <button class="btn p" id="hire" data-fx="ripple">Let's work together</button>
 <button class="btn" id="vcf" data-fx="wobble" style="width:100%;margin-top:10px">Save contact <i>⬇</i></button>
 <button id="theme" class="theme" aria-label="Switch light or dark theme">◐</button>
</aside>
<main class="panel glass">
 <nav id="tabs" role="tablist" aria-label="Sections"><span id="ind"></span></nav>
 <section id="about" class="pane" role="tabpanel"><h2>About</h2><p class="lead" id="aboutText"></p><div class="stats" id="stats"></div>
  <h3>How I design a system</h3><div id="rules"></div><h3>What I do</h3><div class="grid g2" id="what"></div></section>
 <section id="projects" class="pane" role="tabpanel"><h2>Projects</h2><p class="lead">Search, filter, save favorites, and open any project for the full story.</p>
  <input id="q" type="search" placeholder="Search projects, tools, features..." aria-label="Search projects">
  <div class="chips" id="chips"></div>
  <div class="bar2"><span class="note" id="count"></span><button class="btn sm" id="sort" data-fx="spin">Sort: Default <i>⇅</i></button></div>
  <div class="grid g2" id="cards"></div></section>
 <section id="services" class="pane" role="tabpanel"><h2>Services</h2><p class="lead">Tap a service to see typical results, then ask about it.</p><div id="svc"></div></section>
 <section id="process" class="pane" role="tabpanel"><h2>How I work</h2><div id="tl"></div></section>
 <section id="resume" class="pane" role="tabpanel"><h2>Resume</h2><div id="resumeBody"></div><h3>Ways I can help</h3><p class="note">Tap everything you need, then send it as a request.</p><ul class="hl" id="help"></ul><button class="btn m" id="req" data-fx="pulse" hidden>Request selected</button></section>
 <section id="skills" class="pane" role="tabpanel"><h2>Skills &amp; tools</h2><p class="lead">Tap a skill to find projects that use it. Delete any you are not comfortable claiming (in script.js).</p><div class="sk" id="sk"></div></section>
 <section id="contact" class="pane" role="tabpanel"><h2>Have a Business Problem You Want to Simplify?</h2><p class="lead">Let's build a practical system around it.</p>
  <form id="form"><label>Name<input name="name" required autocomplete="name"></label><label>Email<input name="email" type="email" required autocomplete="email"></label>
  <label>Project type<select name="type"><option>Google Sheets system</option><option>CRM</option><option>Financial dashboard</option><option>Automation</option><option>Other</option></select></label>
  <label>Message <span class="note" id="cnt">0/600</span><textarea name="message" rows="4" maxlength="600" required></textarea></label>
  <button class="btn p" id="send" type="submit" data-fx="press"><span>Send message</span></button><p class="note" id="formNote"></p></form>
  <h3>Common questions</h3><div id="faq"></div>
  <div class="row" style="margin-top:16px"><button class="btn" id="copy" data-fx="bounce">Copy my email</button></div></section>
</main></div>
<div id="modal" role="dialog" aria-modal="true" aria-label="Project details"><div class="sheet" id="sheet"></div></div>
<div id="lb" role="dialog" aria-label="Screenshot"><img alt=""></div><div id="toasts" aria-live="polite"></div><button id="topbtn" aria-label="Back to top">↑</button>
<script src="data/projects.js"></script><script src="script.js"></script></body></html>
