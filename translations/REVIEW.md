# Second check of a translation

You are the second, independent check. Another translator has translated a school web page from English into your language. Your job is to find and fix whatever they got wrong.

Read `GUIDELINES.md` first: it is the brief the translator worked from, and the standard you check against.

## What to read

- The English: `source-part1.txt` to `source-part4.txt`. Each `@@` line gives the id, where the text appears, and what kind of text it is.
- The translation: `<lang>/part1.txt` to `<lang>/part4.txt`.
- The translator's glossary: `<lang>/glossary.md`.

## What to check, entry by entry, for every entry

1. **Meaning.** Does it say what the English says?
   - Watch for mistranslations, especially technical ones: ground clearance, bushing, axle, gauge box, downforce, drag, scrutineering, knolling, overhang, chord, ballast.
   - Watch for numbers attached to the wrong thing, or a negation lost or added.
   - Watch for instructions that would make a child do the wrong thing in Tinkercad.
2. **Completeness.** Nothing left out, nothing added.
3. **Reader.** Would a 9–10-year-old native speaker understand it easily and find it natural?
   - Look for stiff word-for-word phrasing, adult or official register, rare words, and wrong politeness level.
   - Check it follows the language's style rules in the guidelines.
4. **Consistency.** The same term must be used for the same thing throughout. Tab names, button names and headings must match where the page refers to them, for example "the Design Sheet", "Scrutineering", "Research Desk".
   - If the glossary itself has a poor choice, say so in your report. Then correct it consistently everywhere.
5. **Names that stay in English.** Tinkercad's buttons and menus, product names and the example names in drawings must be kept as the guidelines say.
6. **Format.** Tags, placeholders, numbers and `<kbd>` must be kept. The checker checks these too.
7. **Space.** Drawing labels, tab names and buttons must be short.

## What to write

- **`<lang>/corrections.txt`**: only the entries you change. Use the same block format: a `@@ k0123` line, then the full corrected translation on one line. Corrections replace the original when the page is built.
- **`<lang>/review.md`**:
  - how many entries you changed
  - a list of the changes, in the form `id: what was wrong → what you changed`, one line each
  - any glossary changes
  - a short overall verdict on the quality
  - anything a native-speaking teacher should still look at

Then run `python3 check.py <lang>` from the work folder. It merges your corrections over the translation. Fix any errors until it reports 0 errors.

Edit only `<lang>/corrections.txt` and `<lang>/review.md`. Do not edit the translator's part files, and do not touch anything else.
