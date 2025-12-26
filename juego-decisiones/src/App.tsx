import Game from './components/Game'
import './App.css'

function App() {
  console.log('Renderizando App');
  return (
    <div className="app-container">
      <main>
        <Game />
      </main>
    </div>
  )
}

export default App
