# Portfolio (no build, phone-friendly)
Plain HTML/CSS/JS. No installs, no build, no terminal. Vercel serves it as is.

## Put it online (iPhone, Safari)
1. github.com > + > New repository > name it `portfolio`.
2. In the repo: Add file > Upload files. Upload every file from the unzipped folder (keep `data/` and `projects/` folders; on iPhone, upload the folders' files one folder at a time and GitHub creates the path if you type it in "Add file > Create new file", e.g. `data/projects.js`). Commit.
3. vercel.com > Add New > Project > Import your repo > Deploy. No settings needed (Framework: Other).
4. Every commit on GitHub redeploys automatically.

## Edit your info or add a project
GitHub > repo > `data/projects.js` > pencil icon > edit > Commit changes. Copy one `{...}` project block to add another. Your name, email, links and About text are at the top of that file.
Also replace YOUR NAME in `index.html` (title tags).

## Add an image
Repo > `projects` folder > Add file > Upload files > pick the screenshot > Commit. Then set `image:"projects/yourfile.png"`.

## Google Sheets
Share > "Anyone with the link: Viewer" (use a sanitized copy), paste the link into `googleSheetUrl`. Set `showPreview:true` to try an in-page preview; the "Open Interactive Google Sheet" button always appears as the fallback. No API keys are used, so there are no environment variables.
