import { useState, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoHover = () => {
    // Générer une position aléatoire pour faire fuir le bouton
    const buttonWidth = 120; // Largeur approximative du bouton
    const buttonHeight = 60; // Hauteur approximative du bouton
    
    const maxX = window.innerWidth - buttonWidth - 20; // 20px de marge
    const maxY = window.innerHeight - buttonHeight - 20; // 20px de marge
    
    const randomX = Math.max(20, Math.random() * maxX);
    const randomY = Math.max(20, Math.random() * maxY);
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="size-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 p-4">
        <div className="text-center space-y-4 md:space-y-6 p-4 md:p-8 animate-bounce-in">
          <div className="flex justify-center gap-2 md:gap-3">
            <Heart className="size-10 md:size-16 text-red-500 fill-red-500 animate-pulse" />
            <Sparkles className="size-10 md:size-16 text-pink-500 fill-pink-500 animate-spin-slow" />
            <Heart className="size-10 md:size-16 text-red-500 fill-red-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-red-600">
            Yaaay! 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700">
            Je savais que tu dirais oui ! 💕
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Joyeuse Saint-Valentin, Bee ! 🍯❤️
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 overflow-hidden p-4">
      <div className="text-center space-y-6 md:space-y-8 p-4 md:p-8 max-w-2xl w-full">
        <div className="flex justify-center gap-1 md:gap-2 animate-pulse">
          <Heart className="size-8 md:size-12 text-red-500 fill-red-500" />
          <Heart className="size-10 md:size-16 text-pink-500 fill-pink-500" />
          <Heart className="size-8 md:size-12 text-red-500 fill-red-500" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600">
          Hey Bee ! 🍯
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 px-2">
          Veux-tu être ma Valentine ? 💕
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 md:pt-8 relative">
          <button
            onClick={handleYes}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-red-500 hover:bg-red-600 text-white text-xl sm:text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 w-full sm:w-auto max-w-xs"
          >
            Oui
          </button>
          
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            style={{
              position: noButtonPosition.x !== 0 || noButtonPosition.y !== 0 ? 'fixed' : 'relative',
              left: noButtonPosition.x !== 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noButtonPosition.y !== 0 ? `${noButtonPosition.y}px` : 'auto',
              zIndex: noButtonPosition.x !== 0 || noButtonPosition.y !== 0 ? 50 : 'auto',
            }}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 text-xl sm:text-2xl font-bold rounded-full shadow-lg transition-all duration-100 w-full sm:w-auto max-w-xs"
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}