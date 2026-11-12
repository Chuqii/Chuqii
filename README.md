# Chuqii — Academic Website

A personal academic website for a **PhD Student in Accounting Information Systems at Rutgers Business School**. Editorial typography, warm ivory, charcoal, and muted navy keep the focus on academic work.

**GitHub Pages URL:** [https://chuqii.github.io/Chuqii/](https://chuqii.github.io/Chuqii/)

This is the expected project-site URL for `Chuqii/Chuqii`, not a verified live deployment. Enable Pages after reviewing and pushing the files. A root-level site at `https://chuqii.github.io/` would require a repository named `chuqii.github.io`.

## Content and sections

- **Home:** introduction, affiliation, field of study, and quick links.
- **About:** biography, current doctoral program, and research interests.
- **Research:** publications, working papers, and research in progress.
- **Contact:** the confirmed GitHub profile and an academic email placeholder.
- **My cat:** a separate photo album at `cats.html`, with three photo placeholders.

Accounting Information Systems is the only supplied research field. Specific topics, academic history, publications, and other credentials have not been inferred. **Chuqii is the GitHub handle used as a temporary display name**, pending confirmation of the preferred academic name.

## Technology and files

The original repository contained only a GitHub profile README; there was no website framework or Pages configuration to retain. The website uses semantic HTML, responsive CSS, and a small optional JavaScript enhancement for active navigation. No dependencies or build step are required. System fonts avoid third-party font and script requests.

```text
index.html                              Content and navigation
cats.html                               Personal cat photo album
assets/css/styles.css                   Layout, responsive and print styles
assets/js/main.js                       Active-section navigation
assets/images/portrait-placeholder.svg  Portrait placeholder
assets/images/favicon.svg               Site icon
assets/images/cat-placeholder.svg       Cat photo placeholder
assets/images/cats/                     Add your cat photos here
.nojekyll                               Disable Jekyll processing
.gitignore                              Exclude local OS/editor files
README.md                               Maintenance guide
```

## Preview locally in VS Code

Open this repository folder in VS Code. In its integrated terminal, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). Save edits and refresh; **Ctrl+C** stops the server. Alternatively, use VS Code's **Live Server** extension and choose **Open with Live Server** on `index.html`.

## Update content

Edit academic content in `index.html` and the photo album in `cats.html`; comments mark the update points. Both pages work without JavaScript. Shared navigation appears in both files; keep its links in sync.

| Update | Where and how |
| --- | --- |
| Academic name | Replace the name in the title, description, navigation brand, main heading, and footer. Update this README and the favicon monogram as appropriate. |
| Biography and education | Edit `#about`; use only confirmed degrees, institutions, and dates. |
| Research interests | Edit the home field of study and interests paragraph in `#about`. |
| Profile photo | Add an optimized photo under `assets/images/`; replace the portrait `src` and `alt`, retain width/height, and update the caption. The layout uses a 4:5 crop. |
| Papers | Replace the relevant empty message in `#research` with a `paper` entry (example below). Add only actual titles, authors, status, and URLs. |
| Contact | Replace the email placeholder with a `mailto:` link. Add Google Scholar or LinkedIn only when their actual URLs are available. |
| Appearance | Adjust variables at the top of `assets/css/styles.css`. |

Paper template (replace all bracketed text before publishing):

```html
<article class="paper">
  <h4 class="paper-title">[Actual paper title]</h4>
  <p class="paper-meta">[Actual coauthors] · [Actual journal or status]</p>
  <p>[Optional brief description]</p>
  <a class="text-link" href="assets/documents/paper.pdf">Read paper (PDF) <span aria-hidden="true">↗</span></a>
</article>
```

Keep asset paths relative (`assets/...`, without a leading `/`) so they work at `/Chuqii/` and locally. Use actual HTTPS URLs for externally hosted papers.

### Add cat photos

1. Place your photos in `assets/images/cats/`, for example `cat-01.jpg`, `cat-02.jpg`, and `cat-03.jpg`.
2. In `cats.html`, replace each image's `src="assets/images/cat-placeholder.svg"` with the corresponding path, such as `src="assets/images/cats/cat-01.jpg"`. Comments identify each slot.
3. Update `alt` to describe the actual photo, remove that photo's `cat-photo-placeholder-label` span, and edit the caption if desired. Once photos are added, update the page introduction and meta description to remove “Photos coming soon.”

To add more images, copy a regular `<figure class="cat-photo">` block inside `.cat-gallery`. Keep `cat-photo-featured` only on the first image. The album displays a large featured photo alongside two smaller photos on desktop and a single column on mobile. Images crop to fill their frames; adjust `object-position` if a subject needs reframing.

Preview the album at [http://127.0.0.1:8000/cats.html](http://127.0.0.1:8000/cats.html) after starting the local server.

## GitHub Pages deployment

The root `index.html` and `.nojekyll` support GitHub Pages branch publishing. No Actions workflow or server runtime is needed.

After reviewing locally, commit and push **only when ready**:

```sh
git diff --check
git status --short
git add README.md index.html cats.html assets .nojekyll .gitignore
git diff --cached
git commit -m "Create modern academic website and update documentation"
git push origin main
```

Then on GitHub:

1. Open **Settings → Pages** in `Chuqii/Chuqii`.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.
4. Wait for deployment and use **Visit site** to confirm the live URL.

See GitHub's [publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). Pushing to a configured publishing branch updates the live site. This redesign has not been automatically committed, pushed, or deployed. This is also a GitHub profile repository: the README appears on the profile; `index.html` controls the separate website.

## Maintenance

- Confirm the academic display name and specific research interests.
- Supply a professional portrait and academic email.
- Add confirmed education, papers, coauthors, status, and research links.
- Add Google Scholar and LinkedIn if available.
- Before publishing, check links, keyboard navigation, and desktop/mobile layout. Avoid empty `href="#"` links and links to nonexistent files.

The site includes a skip link, visible keyboard focus, reduced-motion support, responsive navigation, and print styles. Content and anchor navigation also work with JavaScript disabled.
