import { useState } from 'react';
import { Challenge } from '@/types';
import { Clock, Users, Star, Check, ChevronRight, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import DishSubmissionForm, { DishSubmission } from './DishSubmissionForm';

interface ChallengeCardProps {
  challenge: Challenge;
  featured?: boolean;
  onJoin?: (id: string, dish?: DishSubmission) => void;
}

const ChallengeCard = ({ challenge, featured = false, onJoin }: ChallengeCardProps) => {
  const [isJoined, setIsJoined] = useState(challenge.isJoined);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const handleJoinClick = () => {
    setShowSubmissionForm(true);
  };

  const handleDishSubmit = (dish: DishSubmission) => {
    setShowSubmissionForm(false);
    setIsJoined(true);
    setShowFeedback(true);
    onJoin?.(challenge.id, dish);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  const difficultyColor = {
    Easy: 'bg-chart-1/20 text-chart-4',
    Medium: 'bg-primary/20 text-primary',
    Hard: 'bg-destructive/20 text-destructive',
  };

  return (
    <>
      <div
        className={cn(
          'group relative overflow-hidden rounded-2xl transition-all duration-300',
          featured
            ? 'bg-card border-2 border-primary shadow-xl'
            : 'bg-card border border-border hover:shadow-lg hover:border-primary/50'
        )}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={challenge.image}
            alt={challenge.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Badges */}
          <div className="absolute left-4 top-4 flex gap-2">
            <span className={cn('rounded-full px-3 py-1 text-xs font-medium', difficultyColor[challenge.difficulty])}>
              {challenge.difficulty}
            </span>
            {featured && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                This Week
              </span>
            )}
          </div>

          {/* Points */}
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-chart-1 text-chart-1" />
            <span className="text-sm font-bold text-foreground">{challenge.points}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{challenge.description}</p>

          {/* Recipe hint with price */}
          <div className="mb-4 rounded-lg bg-accent p-3">
            <p className="text-xs text-muted-foreground mb-1">Suggested Recipe</p>
            <p className="text-sm font-medium text-accent-foreground">{challenge.recipe}</p>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <DollarSign className="h-3.5 w-3.5" />
              <span>Est. cost: <span className="font-semibold text-foreground">${challenge.recipePrice.toFixed(2)}</span></span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {challenge.deadline}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {challenge.participants} joined
            </span>
          </div>

          {/* Action */}
          {challenge.deadline !== 'Completed' && (
            <Button
              onClick={handleJoinClick}
              disabled={isJoined}
              className={cn(
                'w-full transition-all duration-300',
                isJoined && 'bg-accent-foreground hover:bg-accent-foreground'
              )}
            >
              {isJoined ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Joined!
                </>
              ) : (
                <>
                  Join Challenge
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}

          {challenge.deadline === 'Completed' && (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-muted py-3 text-muted-foreground">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </div>

        {/* Success feedback overlay */}
        {showFeedback && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/90 transition-opacity duration-300">
            <div className="text-center text-primary-foreground">
              <div className="text-5xl mb-2">🎉</div>
              <p className="text-xl font-bold">You're in!</p>
              <p className="text-sm opacity-90">Good luck, chef!</p>
            </div>
          </div>
        )}
      </div>

      {/* Dish Submission Sheet */}
      <Sheet open={showSubmissionForm} onOpenChange={setShowSubmissionForm}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="sr-only">
            <SheetTitle>Submit Your Dish</SheetTitle>
          </SheetHeader>
          <DishSubmissionForm
            challengeTitle={challenge.title}
            onSubmit={handleDishSubmit}
            onCancel={() => setShowSubmissionForm(false)}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChallengeCard;
