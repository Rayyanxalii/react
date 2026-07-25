import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div style={{ backgroundColor: color, width: '100%', height: '100vh' }}>

      <div className="flex flex-wrap justify-center gap-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

        <button onClick={() => setColor("red")} style={{ backgroundColor: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>RED</button>
        <button onClick={() => setColor("green")} style={{ backgroundColor: '#22c55e', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>GREEN</button>
        <button onClick={() => setColor("blue")} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>BLUE</button>
        <button onClick={() => setColor("yellow")} style={{ backgroundColor: '#eab308', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>YELLOW</button>
        <button onClick={() => setColor("pink")} style={{ backgroundColor: '#ec4899', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>PINK</button>
        <button onClick={() => setColor("purple")} style={{ backgroundColor: '#a855f7', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>PURPLE</button>
        <button onClick={() => setColor("orange")} style={{ backgroundColor: '#f97316', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }} >ORANGE</button>

      </div>
    </div>
  )
}

export default App