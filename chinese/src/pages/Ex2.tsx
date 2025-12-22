import { useNavigate } from "react-router-dom"
import "./Detail.css"
import data from "../data/bt2.json"
import { useState } from "react"
/*eslint-disable @typescript-eslint/no-explicit-any*/

export default function Ex2() {
  const navigate = useNavigate()
  const [visibleAnswers, setVisibleAnswers] = useState<Record<string | number, boolean>>({})
  const toggleAnswer = (id: string | number) => {
    setVisibleAnswers(prev => ({ ...prev, [id]: !prev[id] }))
  }
  return (
    <>

      <div className="detail-wrap">
        <div className="detail-card">
          <button className="back" onClick={() => navigate("/")}>返回🔙</button>
          <h3 className="back" >第二类: 选择相对应的语义</h3>
          {data.map(item => (
            <div className="question-item" key={item.No} style={{ padding: 0 }}>
              <div className="header-box">
                <div className="char-square">
                  <div className="char-large">{item.correspondingPolysyllabicLetters}</div>
                </div>
                <div className="header-meta">
                  <div className="title-line">({item.No})</div>
                  <div className="stamp">
                    
                    {/* <span className="paren">({item.type1})</span> */}
                    {String(item.type1).split(/\r?\n|；|；|。/).map(s => s.trim()).filter(Boolean).map((ex, i) => <li key={i} style={{listStyle:'none',color:'white'}}>{ex}</li>)}
                    </div>


                  <div className="info-block">
                    <div className="info-row" style={{ justifyContent: 'flex-end' }}>
                      <span className="info-val">
                        <button
                          onClick={() => toggleAnswer(item.No)}
                          aria-expanded={!!visibleAnswers[item.No]}
                          style={{ color: 'white' }}
                        >
                          {visibleAnswers[item.No] ? "秘密答案" : "答案显示"}
                        </button>
                      </span>
                      <strong style={{ color: 'red', fontSize: '40px' }}>{visibleAnswers[item.No] ? item.correctAnswer : ""}
                      </strong>


                    </div>

                  </div>
                </div>
              </div>
              <div className="sep" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
