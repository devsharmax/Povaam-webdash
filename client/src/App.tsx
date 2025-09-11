import { Suspense, useEffect } from "react";
import "@fontsource/inter";
import CulturalGame from "./components/game/CulturalGame";
import { useCulturalGame } from "./lib/stores/useCulturalGame";

function App() {
  const { initializeGame } = useCulturalGame();

  // Initialize the game on app start
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Cultural Quest...</p>
          </div>
        </div>
      }>
        <CulturalGame />
      </Suspense>
    </div>
  );
}

export default App;
