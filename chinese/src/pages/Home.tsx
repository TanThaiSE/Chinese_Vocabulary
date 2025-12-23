import { useMemo, useState } from "react"
import "./Home.css"
import bg from "../images/china.jpg"
import searchIcon from "../images/iconsearch.jpg"
import { useNavigate } from "react-router-dom"
import data from "../data/chinese.json"

/*eslint-disable @typescript-eslint/no-explicit-any*/
const entries: any[] = Array.isArray(data) ? data : [];

// ...existing code...
const shortcuts = entries.map((it: any, i: number) => ({
    label: it.label + it.soundReading1 + it.chineseCharacters + it.No || `Item ${i + 1}`,
    icon: it.chineseCharacters || "？",
    raw: it,
}))
// ...existing code...

export default function Home() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const filtered = useMemo(() => {
        const q = query.trim()
        if (!q) return shortcuts
        const res = shortcuts.filter(s => s.icon == q);
        return res;
    }, [query])

    return (
        <div className="home-page" style={{ backgroundImage: `url(${bg})` }}>
            <div className="center-wrap">
                <div className="search-row" style={{ marginTop: "300px" }}>
                    <input
                        className="search-input"
                        placeholder="输入关键词"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ textAlign: "left", paddingRight: "339px", paddingBottom: "11px" }}
                    />
                    <button
                        className="mic"
                        aria-label="search"
                        onClick={() => {
                            if (filtered.length === 1) navigate("/detail", { state: filtered[0].raw })
                        }}
                    >
                        <img src={searchIcon} alt="search" className="mic-icon" />
                    </button>
                </div>

                <div className="shortcuts-wrap">
                    <div className="shortcuts">
                        {filtered.map((s) => (
                            <div
                                key={s.label}
                                className="shortcut"
                                role="button"
                                tabIndex={0}
                                onClick={() => navigate("/detail", { state: s.raw })}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") navigate("/detail", { state: s.raw })
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="shortcut-icon" style={{ color: "black" }}>
                                    {s.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="side-buttons">
                <button className="side-button" onClick={() => navigate("/exam1")} style={{backgroundColor:'transparent', border:'none', fontWeight:'800',color:'white',}}>按钮1</button>
                <button className="side-button" onClick={() => navigate("/exam2")} style={{backgroundColor:'transparent', border:'none', fontWeight:'800',color:'white',}}>按钮2</button>
                <button className="side-button" onClick={() => navigate("/exam3")} style={{backgroundColor:'transparent', border:'none', fontWeight:'800',color:'white',}}>按钮3</button>
                <button className="side-button" onClick={() => navigate("/exam4")} style={{backgroundColor:'transparent', border:'none', fontWeight:'800',color:'white',}}>按钮4</button>
            </div>
        </div>
    )
}