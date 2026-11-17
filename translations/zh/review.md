# zh second check: Simplified Chinese, 小学五年级

I checked all 629 entries (part1 to part5) against the English. Changed: **25 entries** (in `zh/corrections.txt`): 24 in parts 1–4 and 1 in part 5.

Checker after the corrections: `zh: 629 of 629 entries, 0 errors, 2 warnings`. Both warnings (k0429 ALI · SAM · JO, k0439 TEAM TURBO) are example names that have to stay in English.

## Part 5: answer-box placeholders (k0623–k0631)

All nine are sentence starters in the pupils' voice, and the `___` blanks are kept. They match the wording of the questions they belong to: 拦住 (k0290), 争论最多 / 最后定在 (k0247), and the "admit we were wrong" phrasing (k0268). One change:

- k0631: 有理由的猜测更好 reads as translationese → 有依据的猜测更好. 有依据 is the usual phrase, and it echoes the box's label 我们的依据是什么 (k0306).

I left k0624 as it is. 因为……，所以车越长…… is natural Chinese, even though 所以 sits on the first sentence instead of the second as in the English.

## Changes

Meaning:

- k0254: "every millimetre it hangs back is a millimetre of distance" came out neutral (就关系到一毫米的距离), so it did not say the distance is lost → 它每往后多伸出一毫米，量出来的距离就少一毫米。
- k0540: "a millimetre given back at the finish" was literal (到终点时就要还回去一毫米), and a child would not see that it means lost distance → 这里每多一毫米，终点量出来的距离就少一毫米。
- k0215: 申报配重 squeezed into one noun phrase is hard for a 10-year-old to read → 就必须加配重，把重量补够，而且<strong>配重要向车检员申报</strong>（the same two `<strong>`s as before）
- k0548: same problem in the scrutineering message (加申报配重) → 加配重，并向车检员申报
- k0369: "Slide it over your car" was 把它移到你们的车上 (move it onto the car), but the see-through box has to go round the car → 把它移过来罩住你们的车
- k0367: the gloss Box（立方体）means a cube to a mainland 5th-grader (they learn 正方体/长方体), but this box is 160 × 80 × 65 → Box（长方体）
- k0349: the drawing label 24 mm 车轮离地 12 mm could be read as "the wheel is 12 mm off the ground" → 24 mm 的车轮，轴高 12 mm
- k0356 (aria-label): 右轮压在车轴的末端上 means "presses on the end", not "is pushed onto it" → 右轮是压上去的，套在车轴的末端。
- k0088: 把翼减小 … 又会把翼装回去 did not match (装回去 suggests the wing was removed) → 又会把翼加回去

Naturalness and reader:

- k0019: 能放在…车上 is odd for a team name → 还要在不超过 160 mm 长的车上写得下
- k0031: two colons in one sentence → 还有“这辆车到底该不该装尾翼”这场争论
- k0071: stiff word-for-word (不是对每种车都只有同一个答案) → 空气动力学并没有一个对所有车都通用的答案
- k0095: 不是必须的 (normative would be 必需) → 车身套件不是非装不可, which a child would also say
- k0134: the clause order made the "because" hang loose → 写一个因为车长不超过 160 mm、你们已经放弃的想法
- k0192: 不能由你们改 is stiff → 底盘框架你们不能改
- k0200: 固定的底盘给你的 (column header) was literal and unclear → 固定底盘已有的
- k0252: 尾翼伸出底盘后面最多 11 mm had no verb → 伸出底盘后面的部分<strong>最多只能有 11 mm</strong>
- k0298: trailing "，规则 3.3。" → 必须申报，并且要牢牢固定在车上（见规则 3.3）。
- k0343 / k0355: 侧面看 / 正面看 → 从侧面看 / 从正面看，沿后轴切开
- k0519: "Check" verdict 自行检查 is official in tone → 自己检查 (the page shows it when the child has to check the model for themselves, k0591)
- k0528: "Agreed" column header 商定结果 is adult, meeting-minute language → 我们定下的 (pupil voice, like 我们的预测 in k0305)
- k0580: 申报过的选择，不是漏掉了 was stiff → 这是你们申报过的决定，不是忘了装。…帮大家看看车身套件到底有没有用。

Consistency and space:

- k0080: the Wings tab as a single 翼 looks like a stray character next to its sibling tabs 空气与车身 and 车轮与抓地力 → 翼与下压力 (the tab's own h2, k0082). It is still clearly different from the Rear Wing tab 尾翼 (k0156).

## Glossary changes

- Tinkercad gloss for Box: 立方体 → **长方体**. It appears only in k0367; later uses are just "Box".
- No other changes. `zh/glossary.md` was not edited. The note above records the change.

## Flagged items I checked and left as they were

- k0080 / k0156: changed k0080 as above. k0156 尾翼 is right.
- k0298 "mechanically retained": 牢牢固定在车上 gets the meaning across for children (it must not come loose). Only the punctuation changed.
- k0095 / k0099 / k0261 / k0580 车身套件 for "bodywork" and 车身 for "body": kept. It keeps the optional add-on parts (6.1) apart from the main body 车身 that every car has. 套件 reads as "a set of parts" to a child. One weakness: adults know 车身套件 as an aftermarket "body kit". The English is just as loose in k0261 ("No — running without bodywork" as the answer to "Are you fitting a wing?"), so I kept the Chinese parallel.
- k0420: 让它在车身上左右居中 adds "side to side". That is right and helpful: centring on both axes with Align would also slide the hook to the middle of the car's length.
- k0506 打印“完成赛车”指南: correct. The button prints the Final build lesson, whose nav name is 完成赛车 (k0007).
- k0160 / k0161 team names 红牛、莲花、威廉姆斯、迈凯伦: these are the standard mainland names, and the car model names stay in English as the guidelines ask.
- k0141 / k0183 / k0184 iPad and Procreate words: the glosses 添加到“照片”, 操作, 添加, 插入照片 match the Chinese interface wording.

## Overall verdict

Good quality. The translation is accurate, complete and lively, and the F1 flavour comes through (偷走你们距离的头号元凶, 车检员才不管你们有多努力). The glossary is followed almost without exception. Tags, numbers and spacing are clean. Almost all the Tinkercad steps would lead a child to do the right thing. The real errors were:

- the two 9.2 distance sentences (k0254, k0540), which did not say the distance is lost
- the gauge-box instruction (k0369)
- the cube gloss (k0367)

The rest is polish.

## For a native-speaking teacher to look at

- **申报 / 申报配重** (k0215, k0298, k0548, k0580): I made the action explicit (向车检员申报), but 申报 is still a slightly adult word. 登记 or 告诉车检员 would be gentler if the pupils find it hard.
- **辩护** in 为你们的数字/尾翼/车轮辩护 (k0246, k0267, k0289, k0025): consistent and understandable, but a teacher may prefer something warmer, such as 说说你们的理由.
- **车身套件** (k0095, k0099, k0261, k0580): see above. If pupils mix it up with 车身, 车身部件 or 车身附加件 is the fallback, changed in all four places.
- **直角排列（knolling）**: clear, but it is a made-up term. Check that pupils link it to the pictures.
- **Tab widths on the iPad**: 离地间隙与牵引钩 (k0400, 8 characters) and 翼与下压力 (k0080) are the longest tab names. Check they do not wrap badly.
- Whether the school iPads run Safari in Chinese or English: the brackets in k0141 and k0183 cover both, but the order (English first) assumes English menus.

## After review

17 November 2026: the term for knolling changed from 直角排列 to 对齐格线排列 at Glenn's request (he gave it as 對齊格線排列; the page is Simplified Chinese, so it is written in Simplified characters). "（knolling）" stays in brackets after it in the same three places. Eight lines changed.

Also 17 November 2026: k0563 said the front axle is 8.5 mm from the front of the car (车头前端), which a child reads as the nose tip; it is the front of the frame, now 离底盘前端. Found while making the Traditional version.
