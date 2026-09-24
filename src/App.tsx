import { HAJOLISTA } from './components/adat'
import './App.css'
import Hajok from './components/Hajok'

function App() {
  return (
    <>
      <header>
        <h1>Hajók</h1>
      </header>

      <main>
        <Hajok lista={HAJOLISTA} />
      </main>

      <footer>
        <p>BM</p>
      </footer>
    </>
  )
}

export default App
