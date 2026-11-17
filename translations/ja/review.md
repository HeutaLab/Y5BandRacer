# Japanese (ja): second check

Checked all 620 entries of part1–part4 against source-part1–part4, plus the glossary.
`python3 check.py ja` after corrections: **620 of 620 entries, 0 errors, 2 warnings**. Both warnings are example names that must stay in English (k0429 ALI · SAM · JO, k0439 TEAM TURBO).

## Number of entries changed: 54

## Changes

### Meaning (most important)
- k0254: said every millimetre of rear overhang *adds* distance (きょりが一ミリふえる), the opposite of R 9.2 → 後ろに一ミリはみ出すごとに、測られるきょりが一ミリへります。 (also です・ます)
- k0540: "given back at the finish" was translated literally as distance coming back to you (きょりとして返ってきます), which reads as a gain → R 9.2では、ここが一ミリ長くなるごとに、最後に測られるきょりが一ミリへってしまいます。
- k0563: ノーズをつける前の面 was ambiguous (a child can read it as "the face before you fit the nose") → 前の車じくは、もともとフレームの前はし（ノーズをつける面）から8.5 mm内側にあります。 Sentence split in two.
- k0253: ウイングは後ろの車輪にかげを落としてしまいます read as a literal shadow → 上から見ると後ろの車輪にかぶさってしまいます (matches k0582 かぶさり始め). Lead-in made です・ます.

### "Declared" (申告 → 車検係に報告)
- k0215: 申告したおもり (adult tax-form word) → <strong>おもり（バラスト）をのせて、車検係に報告</strong>しなければなりません; あけるべきです → あけたほうがよいです; trimmed 一つ目の理由（…）理由 repetition.
- k0294: 重さの申告 → 重さの報告
- k0298: 申告して → 車検係に報告して
- k0548: 申告したおもりをのせなければなりません → おもりをのせて、車検係に報告しなければなりません
- k0580: 申告した選択 (also 択 is not a primary-school kanji) → 「つけない」と自分たちで決めて伝えた答えです

### Drag: 空気抵抗 → 空気ていこう (抵・抗 are secondary-school kanji)
- k0064: 空気抵抗 → 空気ていこう
- k0065: 空気抵抗 → 空気ていこう
- k0066: 空気抵抗 → 空気ていこう
- k0068: 空気抵抗 → 空気ていこう
- k0075: 空気抵抗 → 空気ていこう
- k0076: 空気抵抗 → 空気ていこう
- k0077: 空気抵抗 → 空気ていこう
- k0079: 空気抵抗 → 空気ていこう
- k0088: 空気抵抗 → 空気ていこう; 議論しています (論 = grade 6) → 話し合いを続けています
- k0112: 空気抵抗 → 空気ていこう; 議論になっています → 意見が分かれています
- k0308: 空気抵抗 → 空気ていこう
- k0553: 空気抵抗 → 空気ていこう
- k0584: 空気抵抗 → 空気ていこう; 奥行き → おくゆき

### Other kanji level
- k0256: 奥行き (奥 is a secondary-school kanji) → おくゆき
- k0264: 奥行き → おくゆき
- k0526: 奥行き → おくゆき
- k0583: 奥行き → おくゆき
- k0457: ボディは奥 → ボディは向こう側 (hiragana おく would read as 置く; pairs with 手前)
- k0477: ボディは奥に → ボディは向こう側に
- k0499: ボディは奥 → ボディは向こう側
- k0456: 奥 → 向こう側; aria-label put into です・ます like the other aria-labels
- k0449: aria-label put into です・ます like the other aria-labels
- k0106: 床 (secondary-school kanji) → ゆか
- k0275: 床 → ゆか
- k0557: 床 → ゆか
- k0099: 認める (grade 6) → みとめる
- k0268: 認める → みとめる
- k0304: 認める → みとめる
- k0262: 立派な答え (派 = grade 6) → ちゃんとした答え

### Wording, register, completeness
- k0041: 十台十色 is a coined word, not natural Japanese; a child may stumble on it → ルールブックは一つ、車は十台みんなちがう
- k0013: 車の本物の部品 sounds odd ("genuine parts") → 車の大事な部品をきちんと受け持ちます; 二人か三人。→ 二人か三人です。
- k0036: 音声入力します (description) → 音声入力しましょう (instruction, like the rest)
- k0046: 車検係とよばれる係の人 (係 twice) → 車検係とよばれる人たち; clumsy 一キロにも満たないほんの少し軽かった → ほんの少し（一キロもない）軽かった
- k0050: あなたたちの6.5では (bare number unclear) → あなたたちのルール6.5では
- k0052: F1のホイールベースの最大 → F1の最大ホイールベース
- k0053: あなたの車の長さの最大 → あなたの車の最大の長さ
- k0115: ゴムを巻く回数の最大 → ゴムを巻ける最大の回数
- k0109: あるのは引きのばされたゴムだけ。→ …ゴムだけです。(です・ます)
- k0184: Procreate menu words had no gloss, unlike k0141/k0183 → Actions（アクション）→ Add（追加）→ Insert a photo（写真を挿入）
- k0252: lead-in 〜てはいけない。→ 〜てはいけません。(です・ます, same as k0253/k0254)
- k0375: 回って、まっすぐ走って、しかも車にこすれてはいけません joined "must" and "must not" in one clause → 車輪は、よく回って、まっすぐ走らなければなりません。そして、車にこすれてはいけません。
- k0378: ぶつかりを防ぐ (awkward noun) → ブッシュで、車輪がボディにぶつからないようにする
- k0387: Group（ひとつにまとめる）します (gloss stuck inside the verb) → Groupでひとつにまとめます
- k0460: じく上向き · はめこみ is too wide for the two labels sitting 98 units apart at 9px → じく上・はめこみ (8 characters, no spaces)
- k0469: 自分のdashboardで Duplicate gave no idea what the dashboard is → Tinkercad：dashboard（自分のデザインの一覧）で Duplicate

### Part 5: answer-box placeholders (k0623–k0631)
I checked all nine against source-part5 and changed none of them. They are accurate and complete, and they read naturally in the pupils' voice in です・ます, with every ___ blank kept. The kanji are within the primary-school lists, and the wording matches the rest of the page: みとめる in hiragana (k0626), 話し合いでもめた (k0628, as in k0247), じゃまをしたルール (k0630, as in k0290). k0624 keeps the English's open ending (…がいいと思います), so it does not give away the R 9.2 answer. With part 5 included, the total changed is still 54.

## Glossary changes
- **declared**: 申告した → 車検係に報告する / 重さの報告. 申告 is an adult, tax-form word; 報告 is a word every pupil uses at school.
- **drag / air resistance**: 空気抵抗 → 空気ていこう. 抵 and 抗 are not primary-school kanji, and the glossary's own rule writes those in hiragana (じく, みぞ, はば).
- **chord**: ウイングの奥行き → ウイングのおくゆき. 奥 is a secondary-school kanji.
- **back of the plate** (knolling): 奥 → 向こう側, which pairs with 手前.
- **floor** (the room floor): 床 → ゆか.

## Flagged items, what I decided
- k0041 pun: replaced (see above).
- 空気抵抗: changed to 空気ていこう everywhere (13 entries).
- 申告 (k0215/k0294/k0548, plus k0298/k0580): changed to 報告 / 伝える.
- k0460: shortened to じく上・はめこみ.
- k0615 Size → 人数: correct. The row shows the team-size value (2 or 3).
- k0469: gloss added.

## Overall verdict
A good, careful translation. It is natural, friendly and mostly at the right level for 小学5年生, and です・ます調 is used throughout. The glossary is applied very consistently. Tags, placeholders, numbers and `<kbd>` are all intact, and the Tinkercad words are kept in English as the brief asks. The serious problems were two sentences about R 9.2 (k0254, k0540) that told pupils the opposite of the rule: that a longer car or more wing overhang gains distance. Without the fix, children could have designed their cars the wrong way. Apart from that, the corrections are mostly about kanji level (a few secondary-school kanji) and small naturalness points.

## For a native-speaking teacher to check
- **iPad/app menu words.** I added Japanese glosses in k0184: アクション / 追加 / 写真を挿入. These are what I believe Procreate shows in Japanese, but please check them on a class iPad. 挿 is a secondary-school kanji, but it is what appears on screen. The same goes for k0141/k0183. iOS shows「"写真"に追加」or「"写真"に保存」depending on the version, and the gloss 写真に追加 should match what pupils see.
- **Kanji I left in.** 端末 (この端末): 端 is a secondary-school kanji, but the glossary says it is a GIGA-school word pupils know. If not, このiPad would be simpler. Also 検索 (索: a screen word they see every day) and 項目 (k0197, k0527: 項). Grade-6 kanji in very common words were also kept: 穴, 担当, 枚, 並ぶ, 巻く, 保存, 探す, 背, 片方, 灰色, 割合. Please confirm your pupils can read these without furigana.
- **空気ていこう.** If the class has already met 空気抵抗 in 理科, you may prefer the kanji form.
- **k0460 じく上・はめこみ.** Check on screen that the two labels do not touch and that じく上 reads naturally as "axle pointing up".
- **The "new" badge 新** (k0215, k0216, k0233, k0235): would NEW or 新ルール read better?
- **整列 for knolling.** Fine and clear, but some design teachers use ノーリング.
- **k0175.** The direction words are shown in Japanese (横から…), the same as the buttons. The buttons add the English words to the search for the pupil. A pupil who types the words by hand would type Japanese, which Bing handles, but the teacher may want pupils to use the buttons.
