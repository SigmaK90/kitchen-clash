import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating?: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating = ({ rating = 0, onRate, readonly = false, size = 'md' }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const handleClick = (star: number) => {
    if (readonly) return;
    onRate?.(star);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 1500);
  };

  const displayRating = hoverRating || rating;

  return (
    <div className="relative">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            onClick={() => handleClick(star)}
            onMouseEnter={() => !readonly && setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className={cn(
              'transition-transform duration-150',
              !readonly && 'hover:scale-110 cursor-pointer',
              readonly && 'cursor-default'
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                'transition-colors duration-150',
                star <= displayRating
                  ? 'fill-chart-1 text-chart-1'
                  : 'fill-transparent text-muted-foreground'
              )}
            />
          </button>
        ))}
      </div>
      
      {/* Rating feedback */}
      {showFeedback && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground whitespace-nowrap animate-fade-in">
          Thanks for rating! ⭐
        </div>
      )}
    </div>
  );
};

export default StarRating;
