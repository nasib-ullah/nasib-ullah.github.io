# Nasib Ullah — academic profile

A responsive, dependency-free personal website for GitHub Pages. All content is readable without JavaScript; JavaScript only enables publication filters.

## Publish on GitHub Pages

1. Extract this archive locally. The `nasib-ullah.github.io` directory contains the complete replacement website.
2. Back up your existing repository. Replace its website contents with the contents of that directory, including `.nojekyll`. Preserve the repository's `.git` directory and any custom `CNAME` or GitHub configuration that you use. Do not leave the old Jekyll template alongside this replacement.
3. Commit and push to your GitHub Pages branch.
4. In the repository's **Settings → Pages**, select **Deploy from a branch**, your branch, and **/(root)**. If you previously used a custom Jekyll Actions workflow, disable or replace that workflow so it does not rebuild the old template.
5. Visit https://nasib-ullah.github.io/ after deployment completes.

No Ruby, Jekyll, Node, package installation, or build step is required. You can also open `index.html` locally, or run `python3 -m http.server 8000` in the site directory.

## Edit

- Biography, publications, experience, education, and service: `index.html`.
- Fonts, colors, spacing, and mobile layout: `assets/style.css`.
- Publication filters: `assets/main.js`. Each publication has a `data-topic` attribute.
- Profile image: `assets/portrait.jpg` (preserved from the original site).
- Downloadable résumé: `files/Nasib-Ullah-CV.pdf` (the supplied PDF, unchanged).

## Content notes

The supplied résumé is the primary source. Historical employment dates and degree completion dates follow it where the old website differs. The PhD is shown as in progress, with expected completion in 2027. The homepage displays professional email and city; the unchanged downloadable CV also contains the contact details originally included in it.

HSEARCH-R1 is listed as EMNLP 2026 as stated in the résumé; no unverified paper link is added. DynaSpec and Boosting Video Captioning remain labeled preprints. No private project results or unpublished performance claims were added.

The supplied résumé had mismatched embedded links near HASTE and ELMO. Their website entries use the official proceedings and code repositories:
- https://proceedings.mlr.press/v306/ullah26b.html
- https://proceedings.mlr.press/v267/zhang25bv.html
- https://github.com/xmc-aalto/haste
- https://github.com/xmc-aalto/elmo

Original template source is available in the previous version of the uploaded ZIP. This replacement intentionally removes demo publications, template pages, unused dependencies, and stale biography text.

Profile revisions: Aalto and Qualcomm supervisors are included as provided by Nasib. Calibration is described as a study within extreme classification, rather than a separate research direction. The website education section shows PhD and MTech only; the supplied PDF remains unchanged. Qualcomm supervisor spellings were checked against https://www.qualcomm.com/research/artificial-intelligence/papers-with-code/paper-7 .
