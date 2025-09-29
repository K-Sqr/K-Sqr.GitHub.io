I can't run git here because git isn't installed in the environment.

Follow these PowerShell steps locally to push your site to GitHub and enable GitHub Pages (assuming you have a GitHub repo created):

1) Initialize (if needed), add, and commit:

```powershell
cd "C:\Users\adek7613\OneDrive - University of St. Thomas\Documents\CISC 365\K-Sqr.GitHub.io"
# initialize if not already a repo
git init
git add .
git commit -m "Initial personal site for CISC365"
```

2) Add remote and push (replace <USERNAME> and <REPO> with your values):

```powershell
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git branch -M main
git push -u origin main
```

3) Enable GitHub Pages from your repository settings on GitHub:
- Go to Settings > Pages, choose Branch: main (or gh-pages if you prefer), root folder, and save.
- Your site will be published at https://<USERNAME>.github.io/<REPO>/ (it may take a few minutes).

If you'd like, provide your GitHub repo URL and I can prepare a minimal GitHub Actions workflow to deploy on push.
