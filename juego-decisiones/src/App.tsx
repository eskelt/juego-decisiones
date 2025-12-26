import Game from './components/Game'
import './App.css'

function App() {
  console.log('Renderizando App');
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Aventura de Decisiones</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  )
}

export default App
