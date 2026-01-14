import { Submission } from '@/components/SubmissionCard';
import carbonara from '@/assets/carbonara.jpg';
import risotto from '@/assets/risotto.jpg';
import salmon from '@/assets/salmon.jpg';

export const mockOtherSubmissions: Submission[] = [
  {
    id: 'sub-1',
    name: 'Classic Italian Carbonara',
    prepTime: '35 mins',
    cost: '$18',
    ingredients: ['Guanciale', 'Pecorino Romano', 'Eggs', 'Black Pepper', 'Spaghetti'],
    tags: ['Comfort Food', 'Indulgent'],
    image: carbonara,
    userName: 'Emma Wilson',
    userAvatar: 'https://i.pravatar.cc/100?img=5',
    rating: 0,
    isOwn: false,
  },
  {
    id: 'sub-2',
    name: 'Creamy Mushroom Carbonara',
    prepTime: '40 mins',
    cost: '$15',
    ingredients: ['Pancetta', 'Mushrooms', 'Parmesan', 'Cream', 'Fettuccine'],
    tags: ['Vegetarian', 'Gourmet'],
    image: risotto,
    userName: 'Marcus Chen',
    userAvatar: 'https://i.pravatar.cc/100?img=8',
    rating: 0,
    isOwn: false,
  },
  {
    id: 'sub-3',
    name: 'Spicy Carbonara Twist',
    prepTime: '30 mins',
    cost: '$20',
    ingredients: ['Bacon', 'Chili Flakes', 'Egg Yolks', 'Pecorino', 'Rigatoni'],
    tags: ['Spicy', 'Quick & Easy'],
    image: salmon,
    userName: 'Sophie Taylor',
    userAvatar: 'https://i.pravatar.cc/100?img=9',
    rating: 0,
    isOwn: false,
  },
];
