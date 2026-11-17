# zh-hant second check (Traditional Chinese, Taiwan usage, 國小五年級)

I checked every entry in part1.txt to part5.txt against the English first, then against the Simplified source, then for Taiwan usage and for what a 10-year-old can read. I also scanned all entries for characters outside Big5, for look-alike characters that are valid in both scripts, for mainland vocabulary and for half-width punctuation.

**Entries changed: 16**

`python3 check.py zh-hant`: 629 of 629 entries, 0 errors, 2 warnings. Both warnings are drawing names that must stay in English (k0429 ALI · SAM · JO, k0439 TEAM TURBO).
`python3 hant_check.py zh-hant`: 629 entries checked, 0 with Simplified-only characters.

## Changes

**"declared" (申報 → 向車檢員報告), done the same way everywhere**
- k0215: 申報 is the word for tax and customs forms, so it is adult for a 10-year-old. The phrase 配重要向… could also be misread as 配／重要 ("important") → 而且<strong>一定要向車檢員報告這些配重</strong>
- k0294: heading 重量申報 → 報告重量
- k0298: 必須申報，… → 必須向車檢員報告，而且要牢牢固定在車上（見規則 3.3）。
- k0548: 並向車檢員申報 → 並向車檢員報告
- k0580: 這是你們申報過的決定 → 這是你們向車檢員報告過的選擇，不是忘了裝。

**"defend" (辯護 → 說明理由), done the same way everywhere**
- k0025: 車檢時也由你來為它們辯護 → 車檢時也由你來替它們說明理由. 辯護 is a courtroom word. 說明理由 is the everyday Taiwanese classroom instruction and keeps the meaning (justify your parts to the scrutineer).
- k0246: 為你們的數字辯護 → 為你們的數字說明理由
- k0267: 為你們的尾翼辯護 → 為你們的尾翼說明理由
- k0289: 為你們的車輪辯護 → 為你們的車輪說明理由

**Tab name**
- k0248: the tab 空氣動力設計區 (7 characters) is wider than the English "Aero Bay" and longer than the other two bays → 尾翼設計區. The bay only designs the rear wing. In a two-person team the wing belongs to the Bodywork pupil, so naming the bay after the part, as 車身設計區 and 輪組設計區 already are, is clearer than naming it after the role. The English "Aero Bay" appears only in this tab label, so no other entry has to change. The role badge stays 空氣動力工程師.

**"optional" wording**
- k0099: 車身套件是<strong>可選的</strong> → 車身套件<strong>可裝可不裝</strong>. 可選的 is stiff; 可裝可不裝 is what a Taiwanese child would say.
- k0262: 規則 6.1 規定它是可選的。「不要」也是一個認真的答案。 → 規則 6.1 說它可以不裝。「不要」也是一個說得通的答案。 The English "a real answer" means a legitimate choice. 認真的答案 means a "serious answer", which misses that.

**Stiff or adult wording**
- k0071: 它在很大程度上取決於這個東西跑得有多快 (translationese) → 答案跟這個東西跑得多快，有非常大的關係。
- k0140: 承載橡皮筋的形狀 (formal) → 讓橡皮筋穿過的形狀. This matches k0221, 橡皮筋必須能從它那裡穿過去.
- k0174: heading 再幫搜尋指方向 reads oddly → 再加上方向詞. This ties straight into the 方向詞 that k0175 lists.
- k0280: table cell 由此得出的離地高度 (written style) → 這樣得到的離地高度

## Glossary changes

- declared → 向車檢員報告 (was 申報); mass declaration → 報告重量 (was 重量申報).
- defend → 說明理由 (headings: 為你們的…說明理由).
- Aero Bay → 尾翼設計區 (was 空氣動力設計區). The role Aerodynamicist stays 空氣動力工程師.
- optional in a sentence → 可裝可不裝 / 可以不裝. The short badge 可選 stays in k0095 and k0579.

## Points checked and left as they are

- **Knolling**: 對齊格線排列 is used everywhere, with （knolling） on k0446, k0447 and k0495 only. Correct.
- **Rule 9.2**: k0254 and k0540 both say that every millimetre at the back is a millimetre of distance lost. k0059, k0091 and k0624 say the distance is measured to the rearmost point. Correct. k0563 says 離底盤前端. Correct as briefed.
- **車身套件 vs 車身** (k0095, k0099, k0261, k0580): kept. In the rules "bodywork" means the optional add-on parts, and the page also has 主車身／車身 for the main body and 車身設計師 for the role, so a separate word is needed. Children know 套件 from 樂高套件 and 模型套件. A plain 車身 in k0261 (不裝車身) would wrongly suggest a car with no body at all.
- **k0400 Clearance & Hook (離地高度與拖鉤)**: kept. At the tab's 13 px font, seven CJK characters are about 91 px, narrower than the English "Clearance & Hook". The tab matches the h2 (k0402) and the glossary term exactly. The short forms I tried (離地與拖鉤, 車底與拖鉤) were telegraphic or lost the idea of the gap. The Final build tab bar fits easily on an iPad.
- **拖鉤 / 掛鉤**: 拖鉤 (tow hook, the hook a string pulls) and 掛鉤 (the frame hook the band latches onto) are kept apart correctly. k0432 is the tow hook. 拖車鉤 would be the fuller everyday word, but 拖鉤 is clear and shorter, which matters for the drawing label.
- **離地高度**: the usual Taiwan car-spec term. The translator rightly used 距離地面多高 for the wing-top height (k0257, k0265) so it does not clash with ground clearance.
- **車檢**: short and familiar (驗車／車檢), and used everywhere: tab, headings, 車檢員.
- **Characters**: everything is in Big5. 裡, 後, 製作／複製 vs 制定／限制, 準備, 範例／範圍, 著, 鉤 (hook) vs 打勾 (tick), 祕密, 汙漬, 唸, 瞇, 夥伴 are all used correctly. 台 is used throughout (這台裝置, 資料台) with no 臺, which is consistent.
- **Vocabulary**: all Taiwan forms: 列印, 檔案, 螢幕, 搜尋, 連結, 儲存, 載入, 匯出, 選取, 置中, 拖曳, 預設, 裝置, 塑膠, 引擎, 公斤, 曳引機, 義大利, 麥拉倫, 威廉斯, 蒙札, 相簿, 滑照片, 漸層色, 繳交, 即時, 透過. Glosses: Tinkercad's own zh-TW names 群組, 鏡射, 檢視方塊, 工作平面, plus 長方體 and 圓柱體 as school maths words.
- **Punctuation**: full-width throughout, 「」 for quotes, …… for the ellipsis. The UI option k0015 請選擇… keeps a single ellipsis, which is normal in Taiwanese interfaces.

## Overall verdict

A strong, careful translation. The meaning is right throughout, including the tricky technical points (rearmost-point measuring, the 11 mm overhang, groove depth, bushing and axle maths, Tinkercad steps), and the numbers, tags and placeholders are intact. It reads as genuine Taiwanese, not converted Simplified: the translator replaced many mainland expressions (拖拉機, 千克, 蹭, 打印, 默認…) and turned 更 comparisons into the natural 比較. My changes are almost all about register: the flagged adult words 申報 and 辯護, a few stiff written-style phrases, and one tab name.

## For a native-speaking Taiwanese teacher to look at

1. **Menu glosses that I could not confirm against the real zh-TW interfaces**: k0141 and k0183 Add to Photos（加入「照片」）; k0184 Procreate Actions（操作）／Add（加入）／Insert a photo（插入照片） (Procreate's Traditional Chinese may say 動作 for Actions); k0466 Edit Grid（編輯格線）; k0469 dashboard（主頁）. Tinkercad's zh-TW dashboard may be called 儀表板 or 控制台. The English button words stay in all of these, so the brackets are only explanations, but they should match what the children see if their iPads are set to Chinese.
2. **報告 and 說明理由**: check that these sound right to the class, and that the teacher is happy with 報告重量 as the heading of the mass box.
3. **尾翼設計區 for "Aero Bay"**: if the teacher often says "Aero Bay" aloud and wants the children to hear 空氣動力 in it, 空氣動力設計區 can go back. It fits; it is only longer.
4. **車身套件**: check that pupils understand it means the optional nose, body and wing parts. If not, the teacher can explain it once in class. I did not add an explanation to the page, because the English has none.
5. **毫米**: the page uses 毫米 for mm in sentences (半毫米, 每一毫米). Taiwanese textbooks use 毫米, also written 公釐. Change it only if the class is used to 公釐.
