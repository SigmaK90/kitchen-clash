import { Clock, DollarSign, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StarRating from './StarRating';

export interface Submission {
  id: string;
  name: string;
  prepTime: string;
  cost: string;
  ingredients: string[];
  tags: string[];
  image: string | null;
  userName: string;
  userAvatar: string;
  rating: number;
  isOwn?: boolean;
}

interface SubmissionCardProps {
  submission: Submission;
  onEdit?: () => void;
  onDelete?: () => void;
  onRate?: (rating: number) => void;
}

const SubmissionCard = ({ submission, onEdit, onDelete, onRate }: SubmissionCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video bg-muted">
        {submission.image ? (
          <img
            src={submission.image}
            alt={submission.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No photo
          </div>
        )}
        
        {/* User badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5">
          <img
            src={submission.userAvatar}
            alt={submission.userName}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-foreground">
            {submission.isOwn ? 'Your Dish' : submission.userName}
          </span>
        </div>

        {/* Edit/Delete for own submission */}
        {submission.isOwn && (
          <div className="absolute top-3 right-3 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-card/90 backdrop-blur-sm"
              onClick={onEdit}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="destructive"
              className="h-8 w-8"
              onClick={onDelete}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h4 className="font-semibold text-foreground">{submission.name}</h4>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {submission.prepTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {submission.prepTime}
            </span>
          )}
          {submission.cost && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              {submission.cost}
            </span>
          )}
        </div>

        {/* Ingredients */}
        {submission.ingredients.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {submission.ingredients.slice(0, 4).map((ingredient) => (
              <Badge key={ingredient} variant="outline" className="text-xs">
                {ingredient}
              </Badge>
            ))}
            {submission.ingredients.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{submission.ingredients.length - 4} more
              </Badge>
            )}
          </div>
        )}

        {/* Tags */}
        {submission.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {submission.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="pt-2 border-t border-border">
          {submission.isOwn ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Your rating:</span>
              <StarRating rating={submission.rating} readonly size="sm" />
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Rate this dish:</span>
              <StarRating rating={submission.rating} onRate={onRate} size="sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionCard;
