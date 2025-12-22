import { useLocation, useNavigate } from "react-router-dom"
import "./Detail.css"
/*eslint-disable @typescript-eslint/no-explicit-any*/

export default function Detail() {
  const location = useLocation()
  const navigate = useNavigate()
  const item = (location && (location.state as any)) || null

  if (!item) {
    return (
      <div className="detail-wrap">
        <div className="detail-card">
          <div className="empty">Không có dữ liệu. <button onClick={() => navigate("/")}>Quay lại</button></div>
        </div>
      </div>
    )
  }

  const char = item.chineseCharacters || item.chinese || "字"
  const pinyinArray: string[] = []
const numberOfSoundsRead = item.numberOfSoundsRead || item.readingsCount || item.readingCount || ""
  if (numberOfSoundsRead >= 1 && item.sound1) pinyinArray.push(item.sound1)
  if (numberOfSoundsRead >= 2 && item.sound2) pinyinArray.push(item.sound2)
  if (numberOfSoundsRead >= 3 && item.sound3) pinyinArray.push(item.sound3)
  if (numberOfSoundsRead >= 4 && item.sound4) pinyinArray.push(item.sound4)
  if (numberOfSoundsRead >= 5 && item.sound5) pinyinArray.push(item.sound5)
  if (numberOfSoundsRead >= 6 && item.sound6) pinyinArray.push(item.sound6)
  const strokes = item.numberOfStrokes || item.nets || item.strokeCount || ""
  
  const partOfSpeech = item.partOfSpeech || item.pos || item.wordType || "—"
  // normalize explains -> array of strings
  const rawExplain = item.explanationOfMeaning || item.description || item.explain || item.explains || ""
  const explains = Array.isArray(rawExplain)
    ? rawExplain
    : String(rawExplain).split(/\r?\n|；|；|。/).map(s => s.trim()).filter(Boolean)

  // normalize examples -> array of strings
  const rawExamples = item.FOREXAMPLE || item.example || item.examples || ""
  const examples = Array.isArray(rawExamples)
    ? rawExamples
    : String(rawExamples).split(/\r?\n/).map(s => s.trim()).filter(Boolean)

  return (
    <div className="detail-wrap">
      <div className="detail-card">
        <button className="back" onClick={() => navigate("/")}>返回🔙</button>

        <div className="header-box">
          <div className="char-square">
            <div className="char-large">{char}</div>
          </div>

          <div className="header-meta">
            <div className="title-line">
              <span className="char-title">{char}</span>
              <span className="paren">({pinyinArray[0] || "—"})</span>
            </div>

            <div className="stamp">[{strokes ? `笔画 : ${strokes}` : "— nét"} - {numberOfSoundsRead ? `读音 : ${numberOfSoundsRead}` : "— âm"}]</div>

            <div className="info-block">
              <div className="info-row"><strong>拼音:</strong> <span className="info-val">{pinyinArray.length ? pinyinArray.join(" / ") : "—"} 🔊</span></div>
              <div className="info-row"><strong>词性:</strong> <span className="info-val">{partOfSpeech}</span></div>
            </div>
          </div>
        </div>

        <div className="sep" />

        <div className="section">
          <div className="section-title"> 说明</div>
          <ul className="explain-list">
            {explains.length ? explains.map((ex, i) => <li key={i}>{ex}</li>) : <li>—</li>}
          </ul>
        </div>

        <div className="sep" />

        <div className="section">
          <div className="section-title">例如</div>
          <ol className="example-list">
            {examples.length ? examples.map((ex, i) => <li key={i}><span className="num">{i + 1}.</span> <span dangerouslySetInnerHTML={{ __html: ex }} /></li>) : <li>—</li>}
          </ol>
        </div>
      </div>
    </div>
  )
}