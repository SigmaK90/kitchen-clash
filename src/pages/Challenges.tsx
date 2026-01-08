import { useState } from 'react';
import { weeklyChallenge, pastChallenges } from '@/data/mockData';
import ChallengeCard from '@/components/ChallengeCard';
import { Flame, History, Star } from 'lucide-react';
import pastaImage from '@/assets/pasta-challenge.jpg';

const Challenges = () => {
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>(
    pastChallenges.filter(c => c.isJoined).map(c => c.id)
  );

  const handleJoin = (id: string) => {
    setJoinedChallenges(prev => [...prev, id]);
  };

  const currentChallenge = {
    ...weeklyChallenge,
    image: pastaImage,
    isJoined: joinedChallenges.includes(weeklyChallenge.id),
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
          <Flame className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Weekly Challenge</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Cooking Challenges</h1>
        <p className="text-muted-foreground">Join challenges to earn points and have fun!</p>
      </div>

      {/* Featured Challenge */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 text-chart-1" />
          <h2 className="text-lg font-semibold text-foreground">This Week's Challenge</h2>
        </div>
        <ChallengeCard 
          challenge={currentChallenge}
          featured 
          onJoin={handleJoin}
        />
      </div>

      {/* How It Works */}
      <div className="rounded-xl bg-card border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl mb-2">1️⃣</div>
            <p className="font-medium text-foreground">Join a Challenge</p>
            <p className="text-sm text-muted-foreground">Click to participate</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">2️⃣</div>
            <p className="font-medium text-foreground">Cook Your Dish</p>
            <p className="text-sm text-muted-foreground">Follow the theme</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-2">3️⃣</div>
            <p className="font-medium text-foreground">Earn Points</p>
            <p className="text-sm text-muted-foreground">Climb the leaderboard!</p>
          </div>
        </div>
      </div>

      {/* Past Challenges */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <History className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Past Challenges</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastChallenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
