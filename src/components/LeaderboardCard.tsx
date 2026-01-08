import { User } from '@/types';
import { Trophy, TrendingUp, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeaderboardCardProps {
  user: User;
  showDetails?: boolean;
}

const LeaderboardCard = ({ user, showDetails = false }: LeaderboardCardProps) => {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return { bg: 'bg-chart-1', icon: '🥇', color: 'text-foreground' };
    if (rank === 2) return { bg: 'bg-muted', icon: '🥈', color: 'text-foreground' };
    if (rank === 3) return { bg: 'bg-chart-4', icon: '🥉', color: 'text-primary-foreground' };
    return { bg: 'bg-secondary', icon: null, color: 'text-secondary-foreground' };
  };

  const rankStyle = getRankBadge(user.rank);

  return (
    <div
      className={cn(
        'relative flex items-center gap-4 rounded-xl p-4 transition-all duration-300',
        user.isCurrentUser
          ? 'bg-primary/10 border-2 border-primary shadow-lg scale-[1.02]'
          : 'bg-card border border-border hover:shadow-md hover:scale-[1.01]'
      )}
    >
      {/* Rank */}
      <div
        className={cn(
          'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold',
          rankStyle.bg,
          rankStyle.color
        )}
      >
        {rankStyle.icon || user.rank}
      </div>

      {/* Avatar */}
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-2xl">
        {user.avatar}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground truncate">
            {user.name}
            {user.isCurrentUser && (
              <span className="ml-2 text-xs text-primary font-normal">(You)</span>
            )}
          </h3>
          {user.rank <= 3 && (
            <Trophy className="h-4 w-4 text-chart-1" />
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <ChefHat className="h-3 w-3" />
            {user.dishesCooked} dishes
          </span>
          {showDetails && (
            <span className="flex items-center gap-1 text-accent-foreground">
              <TrendingUp className="h-3 w-3" />
              +25 this week
            </span>
          )}
        </div>
      </div>

      {/* Score */}
      <div className="text-right">
        <p className="text-xl font-bold text-primary">{user.score}</p>
        <p className="text-xs text-muted-foreground">points</p>
      </div>

      {/* Current user indicator */}
      {user.isCurrentUser && (
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary animate-pulse" />
      )}
    </div>
  );
};

export default LeaderboardCard;
