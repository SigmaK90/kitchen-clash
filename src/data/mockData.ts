import risottoImage from '@/assets/risotto.jpg';
import carbonaraImage from '@/assets/carbonara.jpg';
import salmonImage from '@/assets/salmon.jpg';
import wellingtonImage from '@/assets/wellington.jpg';
import omeletteImage from '@/assets/omelette.jpg';
import { User, Dish, Challenge, Friend } from '@/types';

export const currentUser: User = {
  id: 'user-1',
  name: 'You',
  avatar: '👨‍🍳',
  score: 850,
  rank: 3,
  dishesCooked: 12,
  isCurrentUser: true,
};

export const leaderboardUsers: User[] = [
  { id: 'user-2', name: 'Chef Maria', avatar: '👩‍🍳', score: 1250, rank: 1, dishesCooked: 18 },
  { id: 'user-3', name: 'Gordon', avatar: '🧑‍🍳', score: 980, rank: 2, dishesCooked: 15 },
  { id: 'user-1', name: 'You', avatar: '👨‍🍳', score: 850, rank: 3, dishesCooked: 12, isCurrentUser: true },
  { id: 'user-4', name: 'Julia', avatar: '👩‍🍳', score: 720, rank: 4, dishesCooked: 10 },
  { id: 'user-5', name: 'Marco', avatar: '🧑‍🍳', score: 650, rank: 5, dishesCooked: 8 },
  { id: 'user-6', name: 'Sophie', avatar: '👩‍🍳', score: 540, rank: 6, dishesCooked: 7 },
];

export const weeklyChallenge: Challenge = {
  id: 'challenge-1',
  title: 'Pasta Perfection',
  description: 'Create your best homemade pasta dish! Any style, any sauce – show us your pasta skills.',
  recipe: 'Fresh Fettuccine with Lemon Butter Sauce',
  difficulty: 'Medium',
  points: 150,
  deadline: '3 days left',
  participants: 24,
  image: carbonaraImage,
  isJoined: false,
};

export const pastChallenges: Challenge[] = [
  {
    id: 'challenge-2',
    title: 'Breakfast Battle',
    description: 'Wake up your taste buds with creative breakfast dishes.',
    recipe: 'Eggs Benedict Variations',
    difficulty: 'Easy',
    points: 100,
    deadline: 'Completed',
    participants: 32,
    image: omeletteImage,
    isJoined: true,
  },
  {
    id: 'challenge-3',
    title: 'Soup Season',
    description: 'Warm up with homemade soups and stews.',
    recipe: 'Classic French Onion Soup',
    difficulty: 'Medium',
    points: 120,
    deadline: 'Completed',
    participants: 28,
    image: risottoImage,
    isJoined: true,
  },
];

export const friends: Friend[] = [
  {
    id: 'friend-1',
    name: 'Chef Maria',
    avatar: '👩‍🍳',
    score: 1250,
    recentDish: {
      id: 'dish-1',
      name: 'Truffle Risotto',
      image: risottoImage,
      rating: 4.8,
      userId: 'friend-1',
      userName: 'Chef Maria',
      createdAt: '2 days ago',
    },
  },
  {
    id: 'friend-2',
    name: 'Gordon',
    avatar: '🧑‍🍳',
    score: 980,
    recentDish: {
      id: 'dish-2',
      name: 'Beef Wellington',
      image: wellingtonImage,
      rating: 4.5,
      userId: 'friend-2',
      userName: 'Gordon',
      createdAt: '3 days ago',
    },
  },
  {
    id: 'friend-3',
    name: 'Julia',
    avatar: '👩‍🍳',
    score: 720,
    recentDish: {
      id: 'dish-3',
      name: 'French Omelette',
      image: omeletteImage,
      rating: 4.2,
      userId: 'friend-3',
      userName: 'Julia',
      createdAt: '1 day ago',
    },
  },
];

export const myDishes: Dish[] = [
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
