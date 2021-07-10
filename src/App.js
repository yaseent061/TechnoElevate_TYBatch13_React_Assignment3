import { router1 } from "./router/Router1"
import { router2 } from "./router/Router2"
import loginContext from "./components/context/loginContext"
import { useState } from "react"
function App() {
  const [login, setLogin] = useState(false)
  function log() {
    setLogin(!login)
  }
  const data = { login, log }
  return (
    <loginContext.Provider value={data}>
      {login ? <div>{router2}</div> : <div>{router1}</div>}
    </loginContext.Provider>
  )
}

export default App
