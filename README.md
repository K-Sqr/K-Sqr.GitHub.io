Assignment constraints & preview

This repository is a static personal website (HTML + CSS). It follows the assignment constraints:

- Only HTML and CSS that you write yourself should be used. The only allowed external framework is Foundation 6 (if you choose to use it). Do not include other external JavaScript/CSS libraries or fonts.
- Use relative paths for internal links and image assets. External links (e.g., St. Thomas, LinkedIn) must open in a new tab.

Preview locally (PowerShell)

```powershell
# from the project root
python -m http.server 8000
# open http://localhost:8000 in your browser

# or, with Node.js installed
npm install -g http-server
http-server -c-1 .
# open the printed URL (usually http://127.0.0.1:8080)
```

Images & responsiveness

- Resize images before adding to `assets/` — the pages reference them with relative paths and expect appropriately sized images (e.g., headshot ~400×400, project images ~800×450 or smaller).
- The CSS uses rem-based sizing and includes responsive breakpoints to work on mobile devices.

Files of interest

- `index.html`, `projects.html`, `resume.html`, `fun.html` — site pages.
- `css/style.css` — main stylesheet (uses rems, responsive breakpoints).
- `assets/README.txt` — instructions for adding images (filenames expected by pages).

Next steps I can do for you

- Convert `.docx` files in `extras/` into HTML content and add them to the site (I can run a small extraction script or you can paste the text here).
- Add more polished responsive styling or small CSS-only animations for the Fun page.
- Prepare the site for GitHub Pages and provide deployment steps.

Tell me which next step you'd like and I will implement it.