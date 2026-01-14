import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Camera, Clock, DollarSign, Plus, X, Upload, ChefHat } from 'lucide-react';

interface DishSubmissionFormProps {
  challengeTitle: string;
  onSubmit: (dish: DishSubmission) => void;
  onCancel: () => void;
}

export interface DishSubmission {
  name: string;
  prepTime: string;
  cost: string;
  ingredients: string[];
  tags: string[];
  image: string | null;
}

const SUGGESTED_TAGS = ['Spicy', 'Vegetarian', 'Comfort Food', 'Quick & Easy', 'Gourmet', 'Family Recipe', 'Healthy', 'Indulgent'];

const DishSubmissionForm = ({ challengeTitle, onSubmit, onCancel }: DishSubmissionFormProps) => {
  const [dishName, setDishName] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cost, setCost] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const handleAddIngredient = () => {
    if (ingredientInput.trim() && !ingredients.includes(ingredientInput.trim())) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const handleToggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim()) return;
    
    onSubmit({
      name: dishName,
      prepTime,
      cost,
      ingredients,
      tags,
      image
    });
  };

  const isValid = dishName.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <ChefHat className="w-12 h-12 mx-auto text-primary mb-2" />
        <h3 className="text-xl font-bold text-foreground">Submit Your Dish</h3>
        <p className="text-sm text-muted-foreground">for {challengeTitle}</p>
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label>Dish Photo</Label>
        <div className="relative">
          {image ? (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img src={image} alt="Dish preview" className="w-full h-full object-cover" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center aspect-video rounded-lg border-2 border-dashed border-border bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
              <Camera className="w-10 h-10 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Click to upload photo</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )}
        </div>
      </div>

      {/* Dish Name */}
      <div className="space-y-2">
        <Label htmlFor="dishName">Dish Name *</Label>
        <Input
          id="dishName"
          placeholder="e.g., My Famous Carbonara"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          className="bg-background"
        />
      </div>

      {/* Prep Time & Cost */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="prepTime" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Prep Time
          </Label>
          <Input
            id="prepTime"
            placeholder="e.g., 45 mins"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cost" className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Cost
          </Label>
          <Input
            id="cost"
            placeholder="e.g., $15"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="bg-background"
          />
        </div>
      </div>

      {/* Ingredients */}
      <div className="space-y-2">
        <Label>Ingredients</Label>
        <div className="flex gap-2">
          <Input
            placeholder="Add an ingredient..."
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddIngredient();
              }
            }}
            className="bg-background"
          />
          <Button type="button" variant="outline" size="icon" onClick={handleAddIngredient}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        {ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {ingredients.map((ingredient) => (
              <Badge key={ingredient} variant="secondary" className="gap-1">
                {ingredient}
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(ingredient)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_TAGS.map((tag) => (
            <Badge
              key={tag}
              variant={tags.includes(tag) ? 'default' : 'outline'}
              className="cursor-pointer transition-colors"
              onClick={() => handleToggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" className="flex-1" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1" disabled={!isValid}>
          <Upload className="w-4 h-4 mr-2" />
          Submit Dish
        </Button>
      </div>
    </form>
  );
};

export default DishSubmissionForm;
