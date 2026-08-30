# Youssef-_Sameh-portfolio
Youssef — Personal Portfolio Website
A personal portfolio site built with plain HTML, CSS, and JavaScript.

Files
index.html — page structure (semantic tags: header, nav, main, section, article, footer)
style.css — all styling, including responsive media queries
script.js — mobile nav toggle and contact form validation
Before you submit / deploy
Replace the placeholder content with your own:

 About Me text — your real bio
 Skills — your actual tools and confidence level
 Projects (U1, U2, U3) — real projects, with working links to live demos or GitHub repos
 Contact form — connect it to a real service (see note below) or your email
 Footer links — your real GitHub, LinkedIn, and email
Running it locally
No build step needed — just open index.html in a browser, or use a local server:

cd portfolio
python3 -m http.server 8000
Then visit http://localhost:8000.

Making the contact form actually send messages
Right now the form validates input (name, email, message) but doesn't send anywhere — that needs a backend. The easiest options for a static GitHub Pages site:

Formspree (formspree.io) — add your form endpoint as the action attribute
EmailJS (emailjs.com) — send email directly from JavaScript, no backend needed
Netlify Forms — if you deploy to Netlify instead of GitHub Pages
Deploying to GitHub Pages
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
Then on GitHub: Settings → Pages → Source → Deploy from branch → main → / (root) → Save.

Your site will be live at: https://<your-username>.github.io/<repo-name>/
