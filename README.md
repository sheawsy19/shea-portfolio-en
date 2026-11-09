# Siya (Shea) Wang — English Portfolio

A personal design portfolio for international audiences, adapted from the approved Chinese v6 website. It includes 13 projects, education, internships, awards, content operations, skills, and collaborative experience.

- English website: https://sheawsy19.github.io/shea-portfolio-en/
- Chinese website: https://sheawsy19.github.io/shea-personal-website/

## Publishing

In repository **Settings → Pages**, choose **Deploy from a branch**, **main**, and **/(root)**, then save. The repository is a buildless static website; `.nojekyll` is included.

## Editing

- `index.html`: biography, education, experience, awards, contact information, metadata, and navigation.
- `app.js`: project content and interface behavior. The project data is embedded at the top so the site works without an additional data request.
- `projects.json`: readable copy of the project data; keep it synchronized with the embedded data in `app.js`.
- `english.css`: English typography and layout adaptations.
- `styles.css`, `motion.css`, `motion.js`: retained design and motion foundations.

## Shared artwork and bandwidth

The English website references the existing Chinese website's optimized assets using absolute HTTPS URLs. Artwork is not duplicated in this repository. Preserve the Chinese asset URLs when maintaining either site. Ordinary previews use responsive image sizes; gallery links retain full-resolution access. The two websites have independent source code and content, while image hosting is shared.

The local QA workflow serves these URLs from existing files during testing, avoiding repeated gallery downloads. Live publication requires only the English source and the small Latin font files.

## Typography and rights

Inter Tight is used for display typography, and Inter for reading and interface text. Fonts are served locally with `font-display: swap`. The Latin subsets include Western European characters and punctuation. Their SIL Open Font License files are in `assets/fonts/`.

Portfolio artwork remains the property of its authors and relevant rights holders. This repository does not grant a blanket reuse license for artwork. Existing character references and team authorship are credited in project details. Chinese text within the artwork and original certificates remains unchanged; the website interface and explanatory copy are English.
