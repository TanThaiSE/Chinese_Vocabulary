import React from "react"
import "./Home.css"
import bg from "../images/china.jpg"
import searchIcon from "../images/iconsearch.jpg"
import data from "../data/chinese.json"

/*eslint-disable @typescript-eslint/no-explicit-any*/
const entries: any[] = Array.isArray(data) ? data : (data.shortcuts || [])
const shortcuts = entries.map((s: any, i: number) => ({
    label: s.label || s.soundReading1 || s.chineseCharacters || `Item ${i + 1}`,
    icon: s.chineseCharacters || "？"
}))

export default function Home() {
    return (
        <div className="home-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="center-wrap">
                <div className="search-row" style={{ marginTop: '300px' }}>
                    <input className="search-input" placeholder="输入关键词" style={{ textAlign:'left',paddingRight: '339px', paddingBottom: '11px' }} />
                    <button className="mic" aria-label="search">
                        <img src={searchIcon} alt="search" className="mic-icon" />
                    </button>
                </div>

                <div className="shortcuts-wrap">
                    <div className="shortcuts">
                        {shortcuts.map((s) => (
                            <div key={s.label} className="shortcut">
                                <div className="shortcut-icon" style={{ color: 'black' }}>{s.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}