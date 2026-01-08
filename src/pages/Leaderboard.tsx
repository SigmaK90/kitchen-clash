import { leaderboardUsers } from '@/data/mockData';
import LeaderboardCard from '@/components/LeaderboardCard';
import { Trophy, TrendingUp, Flame } from 'lucide-react';

const Leaderboard = () => {
  const topThree = leaderboardUsers.slice(0, 3);
  const rest = leaderboardUsers.slice(3);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
          <Flame className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Weekly Leaderboard</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Top Chefs This Week</h1>
        <p className="text-muted-foreground">Compete, cook, and climb the ranks!</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 items-end">
        {/* 2nd Place */}
        <div className="text-center">
          <div className="mb-3 text-4xl">{topThree[1].avatar}</div>
          <div className="rounded-t-xl bg-muted p-4 h-28 flex flex-col justify-end items-center">
            <p className="text-2xl">🥈</p>
            <p className="font-semibold text-foreground text-sm mt-1">{topThree[1].name}</p>
            <p className="text-sm text-primary font-bold">{topThree[1].score} pts</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="text-center">
          <div className="mb-3 text-5xl animate-bounce">{topThree[0].avatar}</div>
          <div className="rounded-t-xl bg-chart-1 p-4 h-36 flex flex-col justify-end items-center">
            <div className="flex items-center justify-center gap-1">
              <Trophy className="h-5 w-5 text-foreground" />
              <p className="text-2xl">🥇</p>
            </div>
            <p className="font-bold text-foreground text-sm mt-1">{topThree[0].name}</p>
            <p className="text-sm text-foreground font-bold">{topThree[0].score} pts</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="text-center">
          <div className="mb-3 text-4xl">{topThree[2].avatar}</div>
          <div className="rounded-t-xl bg-chart-4/30 p-4 h-24 flex flex-col justify-end items-center">
            <p className="text-2xl">🥉</p>
            <p className="font-semibold text-foreground text-sm mt-1">{topThree[2].name}</p>
            <p className="text-sm text-primary font-bold">{topThree[2].score} pts</p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-card border border-border p-4 text-center">
          <TrendingUp className="h-6 w-6 mx-auto text-accent-foreground mb-2" />
          <p className="text-2xl font-bold text-foreground">+125</p>
          <p className="text-xs text-muted-foreground">Your pts this week</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-4 text-center">
          <p className="text-2xl mb-2">🍳</p>
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground">Dishes cooked</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-4 text-center">
          <p className="text-2xl mb-2">🎯</p>
          <p className="text-2xl font-bold text-foreground">#3</p>
          <p className="text-xs text-muted-foreground">Your rank</p>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">All Rankings</h2>
        <div className="space-y-3">
          {leaderboardUsers.map((user) => (
            <LeaderboardCard key={user.id} user={user} showDetails={user.isCurrentUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
