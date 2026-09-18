import { HAJOLISTA } from './components/adat'
import './App.css'
import Hajo from './components/Hajo'
import Hajok from './components/Hajok'

function App() {


  return (
    <>
      <header>
        <h1>Hurra</h1>
      </header>
      <article>
        <Hajok lista={HAJOLISTA}/>
      </article>
      <footer><p>BM</p></footer>
    </>
  )
}

export default App
