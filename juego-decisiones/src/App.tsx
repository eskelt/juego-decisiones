import Game from './components/Game'
import './App.css'

function App() {
  console.log('Renderizando App');
  return (
    <div className="app-container">
      <div className="rotate-warning">
        <div className="rotate-icon">⟳</div>
        <p>Por favor, gira tu dispositivo en horizontal para jugar</p>
      </div>
      <main className="game-content">
        <Game />
      </main>
    </div>
  )
}

export default App
