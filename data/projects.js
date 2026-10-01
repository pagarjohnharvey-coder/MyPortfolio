// ===== EDIT THIS FILE FROM GITHUB (tap pencil icon, then Commit changes) =====
window.SITE = {
  name: "John Harvey Pagar",
  email: "Pagarjohnharvey@gmail.com",            // your email, e.g. "me@example.com" (contact form needs it)
  github: "https://github.com/JohnHarvey",           // e.g. "https://github.com/username"
  linkedin: "https://linkedin.com/in/username",         // e.g. "https://linkedin.com/in/username"
  about: "I build practical digital systems—from Google Sheets dashboards and business trackers to CRM tools and financial models—that help freelancers, entrepreneurs, and small businesses stay organized and make better decisions. I believe good systems should be simple, useful, and easy to maintain, because the right tools can turn messy, time-consuming processes into clear and manageable workflows.
",
  stats: [],            // optional real numbers, e.g. [{label:"Templates built", value:"4"}]. Empty = hidden.
};

// category must be one of: Google Sheets, CRM, Finance, Business, Automation, Dashboard, Productivity
// image: upload a picture into the "projects" folder, then use "projects/file.png"
// googleSheetUrl: Google Sheets > Share > "Anyone with the link: Viewer", paste the link
// showPreview: true shows the sheet inside the site (only works if Google allows embedding)
window.PROJECTS = [
 {title:"Freelancer Client & Business Tracker",category:"Business",description:"Client, income and pipeline tracking for freelancers.",
  problem:"Freelancers juggle clients, invoices and leads across scattered notes.",solution:"One workbook tracking clients, pipeline and income with a summary dashboard.",
  features:["Client CRM","Pipeline","Income & expenses","Dashboard"],tools:["Google Sheets","Excel"],
  image:"projects/freelancer-tracker.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Master Personal Finance Tracker",category:"Finance",description:"Budgeting and money tracking in one workbook.",
  problem:"Hard to see where money goes each month.",solution:"A tracker that records income and spending and summarizes it.",
  features:["Budgeting","Expense tracking","Monthly summary"],tools:["Google Sheets","Excel"],
  image:"projects/personal-finance.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Content Creator OS",category:"Productivity",description:"Content calendar, pipeline, sponsorship CRM and revenue dashboard.",
  problem:"Creators lose track of posts, sponsor deals and revenue.",solution:"A command dashboard linking content log, pipeline, deal CRM and analytics.",
  features:["Content calendar","Pipeline stages","Sponsorship CRM","Revenue vs goal","Platform metrics"],tools:["Google Sheets","Excel"],
  image:"projects/content-creator-os.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
 {title:"Fitness & Macro Tracker Dashboard",category:"Dashboard",description:"TDEE calculator, macro log, habit and strength tracking.",
  problem:"Fitness data lives in too many apps.",solution:"A dashboard combining energy balance, macros, habits and lift progress.",
  features:["TDEE calculator","Macro adherence","Habit tracker","Progressive overload"],tools:["Google Sheets","Excel"],
  image:"projects/fitness-macro.png",googleSheetUrl:"",demoUrl:"",showPreview:false},
];
