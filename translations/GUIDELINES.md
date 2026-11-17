# Translating "The Constructor's Brief"

## What the page is

A school web page for **Year 5 pupils (ages 9–10)**. It covers a design-and-technology unit, the Band Car Grand Prix:

- Teams of 2–3 design a small race car powered by a rubber band.
- They research Formula 1, design the parts, and check every number against a rulebook ("scrutineering").
- In the **Final build** lesson they finish the car in **Tinkercad** (a free 3D design website), lay the parts out for the 3D printer ("knolling"), and hand in an STL file.

The page is in English. It is being translated so that pupils whose home language is Korean, Japanese, Chinese or Thai can read it in that language on an iPad. Many are still learning English. Their teacher speaks English.

**Write for the child.**
- Use clear, natural, friendly language that a 9–10-year-old reads easily.
- Keep sentences short.
- Translate the meaning, not word for word.
- Keep the page's tone: direct, practical, a little playful, with a Formula 1 flavour.
- Do not add content or leave anything out.

## Files

The source is in `source-part1.txt`, `source-part2.txt` and `source-part3.txt`. Each entry looks like this:

```
@@ k0012 | Your Team (1-1) | h2
Form Your Constructor
```

- The first line gives the entry's **id**, **where** it appears (tab name and its address on the page), and **what kind** of text it is.
- The English follows on the next line.

Write your translation in the same block format, with only the id on the `@@` line:

```
@@ k0012
팀을 만들어요
```

Write it to the matching files in your language folder: `part1.txt`, `part2.txt`, `part3.txt`. Put every id in the file for its part. Each translation goes on one line, with no line breaks inside it.

## Rules that the checker enforces

The checker is `check.py`. Run it and fix every ERROR, then look at every warning.

1. **HTML tags stay exactly as they are.**
   - Keep the same tags with the same attributes and class names, for example `<span class="ruleref">2.2</span>`, `<strong>`, `<kbd>L</kbd>`, `<br>`, `<span class="n">`.
   - You may move a tag to suit your language's word order, but it must wrap the equivalent words.
   - Never add, drop or change a tag or attribute.
   - The text inside a tag is translated, except in `<kbd>` and except numbers.
   - `&amp;` is an "&" sign. You may write your own word for "and" instead.
2. **Placeholders** such as `{n}`, `{rule}`, `{lo}`, `{hi}`, `{a}`, `{b}` and `{c}` stay exactly as written. The page fills in a number or a word there. Move them wherever your grammar needs them.
3. **Numbers stay identical**, in Western digits. This covers measurements, years, rule numbers like 2.3 or 6.13, "R 2.3", lesson numbers and Q1/Q2 labels.
   - Units stay as they are: mm, g, kg, m.
   - Symbols stay as they are: × − ÷ ≤ · → ✓ ✗.
   - Thai: use 0–9, not Thai digits.
4. **Keyboard keys** inside `<kbd>` stay as they are (L, D, M, Shift).

## Names that stay in English (Latin letters)

**Tinkercad's own buttons and menus.** The pupils use Tinkercad in English, so they need to recognise the exact words on screen:

- Box, Cylinder, Text, Solid, Hole, Group, Align, Mirror, Drop, Duplicate, Edit Grid, Export, "Everything in the design"
- Sides, Ruler, the view cube's Front and Right, the dashboard

Keep these words in English. Where it helps a child understand, you may add a short explanation in your language in brackets, for example `Group（그룹으로 합치기）`. Do this once or twice, not every time.

**Other names:**
- Formula 1, F1, FIA, Tinkercad, Bambu Studio, P2S, A1, P1S, X1, STL / .STL, iPad, Safari, Wikimedia, Bing
- Car models such as Force India VJM09 and Caterham CT05
- Example names in the drawings (ALI · SAM · JO, 5X, TEAM TURBO) and the example file name "5X - Team Turbo.stl"

## Kinds of text

- **drawing label**: words printed inside a to-scale drawing, where space is tight. Keep these as short as the English, or shorter.
- **attribute data-label**: the name of a tab. **button**, **th**, **label** and **option** text: keep it short.
- **attribute aria-label**: read aloud by screen readers. Translate it in full.
- **attribute placeholder**: grey example text inside an answer box. Translate it, keeping its style, for example "We think...".
- **script**: messages the page writes, such as the pass/fail checks. `{n} passed` means "3 passed" and so on.

## Terms: make a glossary first, then stay consistent

Before translating, write `glossary.md` in your language folder. Give one chosen translation for each term below, plus any others you meet, then use those choices everywhere:

- **Rules and checking:** scrutineering / scrutineer, gauge box, rulebook / regulations, declared, excluded, ballast
- **Teams and parts of the page:** constructor (the team), Bodywork Bay / Aero Bay / Running Gear Bay (design "bays"), the roles Bodywork / Aerodynamicist / Running Gear, Research Desk, Design Sheet
- **The car:** base frame / chassis frame, ground clearance, axle, axle hole, bushing, tow hook, wheelbase, nose cone, main body, rear wing, wing span, chord, overhang
- **How it moves:** downforce, drag, frontal area, grip, wheelspin, tyre groove, band channel, the rubber band, the classes "Winder" and "Hook"
- **Paint and sponsors:** livery, sponsor
- **Printing:** knolling, workplane, print plate, supports, push-on wheel, the wheel with its axle ("fixed wheel")

"Knolling" may have no usual word in your language. If so, choose a clear translation and keep the word "knolling" in brackets the first time it appears on each tab where it matters.

## Your language

- **Korean (ko):** standard Korean for 초등학교 5학년. Use friendly polite 해요체 for instructions and explanations. Headings may be short noun phrases.
- **Japanese (ja):** standard Japanese for 小学5年生, in です・ます調.
  - The page cannot show furigana. Where a simpler word works, prefer it to rare kanji.
  - Use katakana for established loanwords (タイヤ, ウイング, レギュレーション, etc.).
- **Chinese (zh):** Simplified Chinese (mainland usage) for primary pupils (小学五年级). Use full-width Chinese punctuation in Chinese sentences.
- **Thai (th):** standard Thai for ป.5 pupils. Use a friendly, polite tone, without ครับ/ค่ะ on every line.
  - Follow normal Thai spacing: spaces between phrases or sentences, not between words.
  - Keep Arabic digits.

## Double-check before you finish

1. Run `python3 check.py <lang>` from this folder. Fix every ERROR. For each "numbers differ" or "identical to the English" warning, either fix it or be sure it is right, for example a name that stays in English.
2. Then read your whole translation once more against the English, entry by entry. Look for:
   - meaning errors
   - anything left out
   - wording a 9–10-year-old would find hard
   - glossary terms not used consistently

   Fix what you find and run the checker again.
