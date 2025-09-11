import { useState, useEffect } from "react";
import { useCulturalGame } from "@/lib/stores/useCulturalGame";
import GameMenu from "./GameMenu";
import TriviaChallenge from "./TriviaChallenge";
import MatchingChallenge from "./MatchingChallenge";
import VisualRecognitionChallenge from "./VisualRecognitionChallenge";
import ProgressDashboard from "./ProgressDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Home } from "lucide-react";

export default function CulturalGame() {
  const {
    gameState,
    currentChallenge,
    score,
    streak,
    timeRemaining,
    startChallenge,
    endGame,
    goToMenu
  } = useCulturalGame();

  const [showResults, setShowResults] = useState(false);
  const [challengeScore, setChallengeScore] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === "playing" && timeRemaining > 0) {
      timer = setTimeout(() => {
        // Timer is handled in the store
      }, 1000);
    } else if (gameState === "playing" && timeRemaining === 0) {
      handleChallengeComplete(0);
    }
    return () => clearTimeout(timer);
  }, [gameState, timeRemaining]);

  const handleChallengeComplete = (earnedScore: number) => {
    setChallengeScore(earnedScore);
    setShowResults(true);
    endGame();
  };

  const handleNextChallenge = () => {
    setShowResults(false);
    setChallengeScore(0);
    // Random challenge type
    const challengeTypes = ["trivia", "matching", "visual"];
    const randomType = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
    startChallenge(randomType as any);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (gameState === "menu") {
    return <GameMenu />;
  }

  if (gameState === "dashboard") {
    return <ProgressDashboard />;
  }

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <div className="mb-6">
              {challengeScore > 80 ? (
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              ) : challengeScore > 50 ? (
                <Star className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              ) : (
                <div className="h-16 w-16 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-600 text-2xl">👍</span>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">Challenge Complete!</h2>
              <p className="text-gray-600 mb-4">
                You scored {challengeScore} points
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-500">
                <span>Total Score: {score}</span>
                <span>Streak: {streak}</span>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <Button onClick={handleNextChallenge} className="flex-1">
                Next Challenge
              </Button>
              <Button variant="outline" onClick={goToMenu}>
                <Home className="h-4 w-4 mr-2" />
                Menu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* Game Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4">
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{score}</div>
              <div className="text-xs text-gray-500">SCORE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{streak}</div>
              <div className="text-xs text-gray-500">STREAK</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {formatTime(timeRemaining)}
            </div>
            <div className="text-xs text-gray-500">TIME LEFT</div>
          </div>
          
          <Button variant="outline" size="sm" onClick={goToMenu}>
            <Home className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="max-w-4xl mx-auto">
        {currentChallenge?.type === "trivia" && (
          <TriviaChallenge onComplete={handleChallengeComplete} />
        )}
        {currentChallenge?.type === "matching" && (
          <MatchingChallenge onComplete={handleChallengeComplete} />
        )}
        {currentChallenge?.type === "visual" && (
          <VisualRecognitionChallenge onComplete={handleChallengeComplete} />
        )}
      </div>
    </div>
  );
}
