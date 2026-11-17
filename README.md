# Y5 Band Racer — The Constructor's Brief

The Year 5 Band Car Grand Prix pupil page, lessons 1 and 2: research the rules,
design the car part by part, and take every number through scrutineering.
Served at **https://y5bandracer.heutalab.com** by its own Cloudflare Worker,
separate from the main heutalab.com Worker so a classroom page can be
redeployed mid-unit without touching the site or its 30 KB redirect table.

Framework-free: one HTML file, no build step, no runtime dependencies.

```text
public/index.html          the whole page — markup, styles and behaviour
public/teacher-notes.js    the 16 teacher notes, loaded only by ?teacher
public/fonts.css + fonts/  self-hosted Archivo, Source Sans 3, IBM Plex Mono
public/sw.js               offline cache
public/icons/              app and tab icons
public/_headers            cache and security headers (Cloudflare reads this)
wrangler.jsonc             Worker + custom domain
```

## Addresses

Every section has its own URL, so a class can be sent straight to one tab:

| URL | Section |
|---|---|
| `/#1-1` … `/#1-6` | Lesson 1: Your Team, The Rules, Air & the Body, Wings, Wheels & Grip, Homework |
| `/#r1` … `/#r4` | Research Desk: Nose & Body, Rear Wing, Wheels & Tyres, How to Search |
| `/#2-1` … `/#2-6` | Lesson 2: The Brief, Bodywork Bay, Aero Bay, Running Gear Bay, Scrutineering, Design Sheet |
| `/#f1` … `/#f6` | Final build: The Final Rules, Axles & Bushings, Clearance & Hook, Names, Knolling, Hand In |

The old section ids (`/#p-bay-run`) still work.

## Teacher notes

**`https://y5bandracer.heutalab.com/?teacher`**

The notes are not in the pupil page. They are not hidden by CSS in it either —
they live in `teacher-notes.js`, which is fetched only when the URL asks for
it. A child on the plain address has nothing to press, nothing to read in the
source, and nothing inherited from whoever used the iPad before them: teacher
mode is never written to storage. `robots.txt` and an `X-Robots-Tag` keep the
notes file out of search results.

Add `?teacher` before the hash if you want both: `/?teacher#2-4`.

## Where the work is kept

In the browser, on the device, in `localStorage` under `bandcar-rd-v2`. Nothing
is sent anywhere and there is no account. It follows nobody to another iPad, so
teams copy or print the design sheet at the end of a lesson.

The manifest deliberately says `"display": "browser"`. An Add to Home Screen
icon that opened standalone would get its **own** storage bucket, so a team who
worked in Safari in lesson 1 would find lesson 2 empty. Opening in Safari keeps
one bucket.

## Printing

Two buttons, two scopes:

- **Print my research**, in the lesson row next to Research Desk, prints
  lesson 1 only, and only the answer column — the questions, what the team
  wrote, and the "so what for your car?" boxes. The source cards are reading
  they still have on screen, and printing them turns two pages of a child's own
  work into eight of somebody else's. One section per page, so each child can
  take the strand they owned.
- **Print**, on the Design Sheet, prints everything: lessons 1 and 2, sources
  included.
- **Print the finishing guide**, on Hand In, prints the six final-build tabs
  and nothing else. The browser's own print does the same while the Finish
  the car lesson is open, so a teacher pressing Cmd+P there gets the guide.
  The other two buttons leave the guide out.

The Research Desk never prints. Every button sets its scope explicitly on every click
(`body.print-all`, `body.print-research`, `body.print-finish`) rather than trusting `afterprint`, which iOS Safari
does not reliably fire.

Typed answers print in full because each field is mirrored into a plain block
the print stylesheet shows in place of the input — a textarea otherwise prints only
the three lines that fit in the box. Printing from a dark-mode iPad produces a
light page.

## Deploy

```bash
npx wrangler deploy
```

`npx wrangler login` once first, if the machine has not been used for this.
The custom domain in `wrangler.jsonc` creates the DNS record on first deploy.

## Preview locally

The Claude Code launch config in `Sage_On_The_Stage/.claude/launch.json`
(`y5bandracer`) serves `public/` on port 8647. Or:

```bash
python3 -m http.server 8647 -d public
```

The service worker registers on localhost too, so if a change does not appear,
it is the cache: hard-reload, or bump `VERSION` in `sw.js`.

## When you change things

- **Anything in the precache list** — bump `VERSION` in `sw.js`, or iPads that
  have been offline keep the old copy. The page itself is network-first, so
  text and layout changes land without it.
- **A new section** — give the `<section class="panel">` a `data-slug`, or its
  URL falls back to the element id.
- **A teacher note** — it lives in `teacher-notes.js`, keyed `panelid-1`.

## The final build

The Finish the car lesson (`data-lesson="F"`, added 17 November 2026) takes a
team's own Tinkercad car to a printable file: the final rules (160 × 80 × 65 mm,
5 mm ground clearance, a 3 mm tow hook, 6 mm holes, 5.5 mm axles, bushings),
then names, knolling and hand-in. Every drawing is one example car at 1 unit =
1 mm, defined once in the hidden `<svg>` before the first F panel (`#ex-top`,
`#ex-side`, the wheels). The "Work out your numbers" card is the small script
after the main one; its inputs are ordinary fields, so saving, clearing and
print mirroring come from the main script. The checklist uses `.tick`, saved
the same way as the Research Desk ticks.

## Provenance

Derived from the Claude artifact *The Constructor's Brief*
(`claude.ai/artifact/3N6qnxXwH4jNV5Lfzf97oT`) on 20 September 2026, then
hardened for the web: self-hosted fonts, per-section URLs, teacher notes lifted
out of the page, print fixed, offline cache, icons and metadata. `index.html`
is the source of truth from here on; the artifact is not.

Fonts are SIL Open Font License 1.1 (Archivo, Source Sans 3, IBM Plex Mono),
latin and latin-ext subsets from the Google Fonts css2 API. Archivo and Source
Sans 3 ship as single variable files covering every weight the page uses.
