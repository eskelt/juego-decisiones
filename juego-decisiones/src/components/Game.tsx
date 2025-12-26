import { useState, useEffect } from 'react';
import storyDataRaw from '../data/story.json';
import type { Scene } from '../types';
import './Game.css';

const Game = () => {
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Inicializar datos de forma segura
    let data: Scene[] = [];
    if (Array.isArray(storyDataRaw)) {
      data = storyDataRaw as Scene[];
    } else if (storyDataRaw && typeof storyDataRaw === 'object' && 'default' in storyDataRaw) {
      data = (storyDataRaw as any).default as Scene[];
    }
    setScenes(data);
    setDataLoaded(true);
  }, []);

  if (!dataLoaded) {
    return <div>Cargando...</div>;
  }

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  if (!currentScene) {
    return <div className="error-message">Error: Escena no encontrada ({currentSceneId})</div>;
  }

  const handleChoice = (nextSceneId: string) => {
    setCurrentSceneId(nextSceneId);
  };

  const handleReset = () => {
    setCurrentSceneId('start');
  };

  return (
    <div className="game-container">
      <div className="illustration-container">
        <img 
            src={currentScene.image} 
            alt="Ilustración de la escena" 
            className="scene-image" 
        />
      </div>

      <div className="interaction-area">
        <div className="text-bubble main-bubble">
          <p>{currentScene.text}</p>
          
          {currentScene.type === 'continue' && (
            <button 
                className="action-btn continue-btn" 
                onClick={() => handleChoice(currentScene.nextSceneId!)}
            >
              Continuar
            </button>
          )}

          {currentScene.type === 'end' && (
            <button 
                className="action-btn reset-btn" 
                onClick={handleReset}
            >
              Volver a empezar
            </button>
          )}
        </div>

        {currentScene.type === 'choice' && (
          <div className="choices-bubble">
            {currentScene.choices?.map((choice, index) => (
              <button
                key={index}
                className="choice-option"
                onClick={() => handleChoice(choice.nextSceneId)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
