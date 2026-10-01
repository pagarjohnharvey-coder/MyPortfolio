// ===== EDIT THIS FILE FROM GITHUB (pencil icon, then Commit changes) =====
window.SITE = {
  name: "YOUR NAME",
  role: "Google Sheets & Business Systems Builder",
  location: "",          // e.g. "City, Country"
  email: "",             // needed for the contact form
  github: "", linkedin: "",
  photo: "",             // e.g. "projects/me.jpg" (upload the photo first)
  about: "Write 2-3 sentences: what you build, who you help, and why practical systems matter to you.",
  helpWith: ["Building or cleaning up Google Sheets trackers","Setting up client and lead tracking (CRM)","Invoice, expense and cash-flow tracking","Dashboards and weekly or monthly reports","Data entry and spreadsheet organization","Documenting a system so others can use it"],
  stats: [],             // optional real numbers: [{label:"Clients helped", value:"3"}]
  // Resume: leave empty until you have real entries. Example item:
  // {title:"Role or degree", org:"Company or school", period:"2024 - Present", detail:"One sentence."}
  experience: [], education: [], certifications: [],
};

// category: Google Sheets, CRM, Finance, Business, Automation, Dashboard, Productivity
// Sample data in the screenshots is fictional. Replace links when your Google Sheets are shared (Anyone with link: Viewer).
window.PROJECTS = [
 {title:"Freelancer Client & Business Tracker",category:"Business",tags:["Google Sheets","CRM","Finance","Dashboard"],
  description:"A 16-tab business control panel a freelancer can set up for a client: sales, invoicing, cash flow and operations on one live dashboard.",
  problem:"Small businesses track leads, invoices and cash in separate places, so nobody sees the full picture or chases late payments.",
  solution:"One workbook where you only type into marked input cells. Everything else is formulas, with green/amber/red indicators showing what needs attention.",
  features:["CRM lead log with pipeline value, weighted forecast and win rate","Sales leaderboard by rep","Invoice register, AR aging and an email chaser that writes overdue reminders","Ledger, 12-month P&L and runway & burn rate","Inventory, stock movement, production and marketing tabs","Settings tab and a built-in user manual"],
  inside:["Dashboard","CRM Lead Log","Sales Leaderboard","Pipeline Analytics","Invoice Register","AR Aging","Email Chaser","Ledger","P&L Statement","Runway & Burn","Inventory Log","Stock Movement","Production","Marketing","Settings","Manual"],
  tools:["Google Sheets","Excel","Formulas","Data validation","Conditional formatting"],
  image:"projects/freelancer-tracker.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Master Personal Finance Tracker",category:"Finance",tags:["Google Sheets","Dashboard"],
  description:"A 20-tab financial engine with budget, expenses, debt payoff, investing, retirement and tax tracking, plus a dashboard and printable worksheets.",
  problem:"Money lives in many accounts and apps, so it is hard to see net worth, spending and progress toward goals.",
  solution:"A guided workbook with a Start Here setup page, one tab per money topic, and a dashboard that rolls everything up.",
  features:["Net worth and annual budget planner","Quarterly expense trackers and income tracker","Debt snowball, sinking funds and emergency reserve","Investment portfolio, asset allocation, retirement projection and FIRE number","Subscriptions, tax receipts and tax summary","Dashboard and printable weekly cash log and annual goals"],
  inside:["Start Here","Net Worth","Annual Budget","Expenses (4 quarters)","Income Tracker","Debt Snowball","Sinking Funds","Emergency Reserve","Portfolio","Asset Allocation","Retirement Projection","FIRE Number","Contributions","Subscriptions","Tax Receipts","Tax Summary","Settings","Dashboard","Printable worksheets"],
  tools:["Google Sheets","Excel","Formulas","Dropdowns"],
  image:"projects/personal-finance.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Content Creator OS",category:"Productivity",tags:["Google Sheets","CRM","Dashboard"],
  description:"An 8-page workspace for creators: content calendar, pipeline, sponsorship deals, approvals, revenue and platform metrics.",
  problem:"Creators lose track of what is scheduled, which sponsor needs approval, and how revenue compares to goal.",
  solution:"A command dashboard fed by a content log, a stage-by-stage pipeline, a brand-deal CRM and a revenue tracker.",
  features:["Analytics dashboard: views, revenue vs goal, posts published, pipeline status","Monthly content calendar built from the content log","Pipeline from idea to scheduled with progress and owners","Idea hub and sponsorship CRM with deal summary","Approvals with due dates and monthly revenue by source","Platform metrics with targets, plus a hook and call-to-action swipe file"],
  inside:["Analytics Dashboard","Content Calendar","Content Log","Content Pipeline","Idea Hub & Sponsorship CRM","Approvals & Revenue","Platform Metrics","Asset & Script Vault"],
  tools:["Google Sheets","Excel","Formulas","Conditional formatting"],
  image:"projects/content-creator-os.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Fitness & Macro Tracker Dashboard",category:"Dashboard",tags:["Google Sheets","Productivity"],
  description:"A 16-week fitness dashboard with a calorie calculator, macro tracking, habits and strength training log.",
  problem:"Nutrition, habits and workouts are tracked in different apps, so progress is hard to read.",
  solution:"A dashboard that turns daily logs into targets, adherence bars and a weight trend.",
  features:["TDEE and energy balance calculator with macro split","Weekly macro adherence and weight trend vs target","Daily habit tracker and meal and macro log","Workout log and 16-week progressive overload tracker"],
  inside:["Command Dashboard","Habit Tracker","Meal & Macro Log","Workout & Strength Log"],
  tools:["Google Sheets","Excel","Charts","Formulas"],
  image:"projects/fitness-macro.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
];
