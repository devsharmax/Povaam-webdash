import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCulturalGame } from "@/lib/stores/useCulturalGame";
import { Play, Trophy, BarChart3, Globe, Zap, Target } from "lucide-react";
import AchievementBadge from "./AchievementBadge";

export default function GameMenu() {
  const {
    startChallenge,
    showDashboard,
    score,
    streak,
    achievements,
    totalChallengesCompleted
  } = useCulturalGame();

  const quickChallengeTypes = [
    {
      type: "trivia" as const,
      title: "Cultural Trivia",
      description: "Test your knowledge with quick questions",
      icon: <Target className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      type: "matching" as const,
      title: "Match & Learn",
      description: "Connect traditions with their cultures",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-green-500"
    },
    {
      type: "visual" as const,
      title: "Visual Recognition",
      description: "Identify cultural symbols and landmarks",
      icon: <Globe className="h-5 w-5" />,
      color: "bg-purple-500"
    }
  ];

  const recentAchievements = achievements.slice(-3);

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Cultural Quest
          </h1>
          <p className="text-gray-600 text-lg">
            Learn about world cultures in just 2-3 minutes!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{score}</div>
                <div className="text-sm text-gray-500">Total Score</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{streak}</div>
                <div className="text-sm text-gray-500">Current Streak</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">{totalChallengesCompleted}</div>
                <div className="text-sm text-gray-500">Challenges Done</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Play Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Quick Play (2-3 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickChallengeTypes.map((challenge) => (
                <Button
                  key={challenge.type}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-shadow"
                  onClick={() => startChallenge(challenge.type)}
                >
                  <div className={`${challenge.color} text-white p-2 rounded-md`}>
                    {challenge.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{challenge.title}</div>
                    <div className="text-sm text-gray-500">{challenge.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        {recentAchievements.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {recentAchievements.map((achievement) => (
                  <AchievementBadge
                    key={achievement.id}
                    achievement={achievement}
                    size="sm"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Button onClick={showDashboard} variant="outline" size="lg">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Progress
          </Button>
        </div>
      </div>
    </div>
  );
}
