import { Friend } from '@/types';
import { Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FriendCardProps {
  friend: Friend;
  isSelected?: boolean;
  onSelect?: (friend: Friend) => void;
}

const FriendCard = ({ friend, isSelected, onSelect }: FriendCardProps) => {
  return (
    <div
      onClick={() => onSelect?.(friend)}
      className={cn(
        'group cursor-pointer rounded-xl p-4 transition-all duration-300',
        isSelected
          ? 'bg-primary/10 border-2 border-primary shadow-lg'
          : 'bg-card border border-border hover:shadow-md hover:border-primary/50'
      )}
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent text-3xl transition-transform group-hover:scale-110">
          {friend.avatar}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{friend.name}</h3>
          <p className="text-sm text-muted-foreground">{friend.score} points</p>
        </div>

        {/* Arrow */}
        <ChevronRight className={cn(
          'h-5 w-5 transition-all duration-200',
          isSelected ? 'text-primary rotate-90' : 'text-muted-foreground group-hover:text-primary'
        )} />
      </div>

      {/* Recent dish preview */}
      {friend.recentDish && (
        <div className="mt-4 flex items-center gap-3 rounded-lg bg-accent p-3">
          <img
            src={friend.recentDish.image}
            alt={friend.recentDish.name}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{friend.recentDish.name}</p>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-chart-1 text-chart-1" />
              <span className="text-xs text-muted-foreground">{friend.recentDish.rating}</span>
              <span className="text-xs text-muted-foreground">• {friend.recentDish.createdAt}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendCard;
