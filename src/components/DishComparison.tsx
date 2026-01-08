import carbonaraImage from '@/assets/carbonara.jpg';
import salmonImage from '@/assets/salmon.jpg';
import { useState } from 'react';
import { Dish, Friend } from '@/types';
import { Trophy, ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import StarRating from './StarRating';

const myDishes: Dish[] = [
  {
    id: 'my-dish-1',
    name: 'Spaghetti Carbonara',
    image: carbonaraImage,
    rating: 4.3,
    userId: 'user-1',
    userName: 'You',
    createdAt: '1 day ago',
  },
  {
    id: 'my-dish-2',
    name: 'Grilled Salmon',
    image: salmonImage,
    rating: 4.6,
    userId: 'user-1',
    userName: 'You',
    createdAt: '4 days ago',
  },
];

interface DishComparisonProps {
  friend: Friend;
  onClose: () => void;
}

const DishComparison = ({ friend, onClose }: DishComparisonProps) => {
  const [selectedMyDish, setSelectedMyDish] = useState<Dish | null>(myDishes[0]);
  const [friendDishRating, setFriendDishRating] = useState<number>(0);

  const friendDish = friend.recentDish;

  const getWinner = () => {
    if (!selectedMyDish || !friendDish) return null;
    if (selectedMyDish.rating > friendDish.rating) return 'you';
    if (friendDish.rating > selectedMyDish.rating) return 'friend';
    return 'tie';
  };

  const winner = getWinner();

  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Compare Dishes</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Comparison View */}
      <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-stretch">
        {/* Your Dish */}
        <div className={cn(
          'rounded-xl p-4 transition-all duration-300',
          winner === 'you' ? 'bg-primary/10 border-2 border-primary' : 'bg-accent border border-border'
        )}>
          <div className="text-center mb-4">
            <span className="text-2xl">👨‍🍳</span>
            <p className="font-semibold text-foreground">Your Dish</p>
          </div>

          {/* Dish selector */}
          <div className="space-y-2 mb-4">
            {myDishes.map((dish) => (
              <button
                key={dish.id}
                onClick={() => setSelectedMyDish(dish)}
                className={cn(
                  'w-full flex items-center gap-2 rounded-lg p-2 text-left transition-all',
                  selectedMyDish?.id === dish.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-muted'
                )}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <span className="text-sm font-medium truncate">{dish.name}</span>
              </button>
            ))}
          </div>

          {selectedMyDish && (
            <div className="text-center">
              <img
                src={selectedMyDish.image}
                alt={selectedMyDish.name}
                className="w-full aspect-square rounded-xl object-cover mb-3"
              />
              <h4 className="font-semibold text-foreground">{selectedMyDish.name}</h4>
              <div className="flex items-center justify-center gap-1 mt-2">
                <StarRating rating={Math.round(selectedMyDish.rating)} readonly size="sm" />
                <span className="text-sm text-muted-foreground ml-1">({selectedMyDish.rating})</span>
              </div>
              {winner === 'you' && (
                <div className="mt-3 flex items-center justify-center gap-1 text-primary">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm font-medium">Winner!</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* VS Divider */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            VS
          </div>
          <ArrowLeftRight className="mt-2 h-5 w-5 text-muted-foreground" />
        </div>

        {/* Friend's Dish */}
        <div className={cn(
          'rounded-xl p-4 transition-all duration-300',
          winner === 'friend' ? 'bg-primary/10 border-2 border-primary' : 'bg-accent border border-border'
        )}>
          <div className="text-center mb-4">
            <span className="text-2xl">{friend.avatar}</span>
            <p className="font-semibold text-foreground">{friend.name}'s Dish</p>
          </div>

          {friendDish && (
            <div className="text-center">
              <img
                src={friendDish.image}
                alt={friendDish.name}
                className="w-full aspect-square rounded-xl object-cover mb-3"
              />
              <h4 className="font-semibold text-foreground">{friendDish.name}</h4>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-sm text-muted-foreground mr-2">Avg: {friendDish.rating}</span>
              </div>
              
              {/* Star rating for friend's dish */}
              <div className="mt-3 p-3 rounded-lg bg-card border border-border">
                <p className="text-xs text-muted-foreground mb-2">Rate this dish:</p>
                <div className="flex justify-center">
                  <StarRating 
                    rating={friendDishRating} 
                    onRate={setFriendDishRating}
                    size="md"
                  />
                </div>
              </div>
              
              {winner === 'friend' && (
                <div className="mt-3 flex items-center justify-center gap-1 text-primary">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm font-medium">Winner!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tie message */}
      {winner === 'tie' && (
        <div className="mt-6 text-center rounded-lg bg-accent p-4">
          <p className="text-lg font-semibold text-foreground">🤝 It's a tie!</p>
          <p className="text-sm text-muted-foreground">Both dishes are equally amazing!</p>
        </div>
      )}
    </div>
  );
};

export default DishComparison;
