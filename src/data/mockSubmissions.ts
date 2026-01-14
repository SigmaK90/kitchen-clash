import { Submission } from '@/components/SubmissionCard';
import carbonara from '@/assets/carbonara.jpg';
import risotto from '@/assets/risotto.jpg';
import salmon from '@/assets/salmon.jpg';
import omelette from '@/assets/omelette.jpg';
import wellington from '@/assets/wellington.jpg';

// Challenge-specific submissions mapped by challenge ID
export const challengeSubmissions: Record<string, Submission[]> = {
  // Pasta Perfection Challenge
  'challenge-1': [
    {
      id: 'sub-1-1',
      name: 'Classic Italian Carbonara',
      prepTime: '35 mins',
      cost: '$18',
      ingredients: ['Guanciale', 'Pecorino Romano', 'Eggs', 'Black Pepper', 'Spaghetti'],
      tags: ['Comfort Food', 'Indulgent'],
      image: carbonara,
      userName: 'Chef Maria',
      userAvatar: 'https://i.pravatar.cc/100?img=5',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-1-2',
      name: 'Creamy Mushroom Fettuccine',
      prepTime: '40 mins',
      cost: '$15',
      ingredients: ['Fettuccine', 'Mushrooms', 'Parmesan', 'Cream', 'Garlic'],
      tags: ['Vegetarian', 'Gourmet'],
      image: risotto,
      userName: 'Gordon',
      userAvatar: 'https://i.pravatar.cc/100?img=8',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-1-3',
      name: 'Spicy Arrabbiata Penne',
      prepTime: '25 mins',
      cost: '$12',
      ingredients: ['Penne', 'Tomatoes', 'Chili Flakes', 'Garlic', 'Basil'],
      tags: ['Spicy', 'Quick & Easy'],
      image: salmon,
      userName: 'Sophie',
      userAvatar: 'https://i.pravatar.cc/100?img=9',
      rating: 0,
      isOwn: false,
    },
  ],

  // Breakfast Battle Challenge
  'challenge-2': [
    {
      id: 'sub-2-1',
      name: 'Perfect French Omelette',
      prepTime: '15 mins',
      cost: '$8',
      ingredients: ['Eggs', 'Butter', 'Chives', 'Gruyère', 'Salt'],
      tags: ['Quick & Easy', 'Healthy'],
      image: omelette,
      userName: 'Julia',
      userAvatar: 'https://i.pravatar.cc/100?img=10',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-2-2',
      name: 'Eggs Benedict Royale',
      prepTime: '30 mins',
      cost: '$16',
      ingredients: ['Eggs', 'Smoked Salmon', 'English Muffin', 'Hollandaise', 'Capers'],
      tags: ['Gourmet', 'Indulgent'],
      image: salmon,
      userName: 'Chef Maria',
      userAvatar: 'https://i.pravatar.cc/100?img=5',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-2-3',
      name: 'Fluffy Pancake Stack',
      prepTime: '25 mins',
      cost: '$10',
      ingredients: ['Flour', 'Buttermilk', 'Eggs', 'Maple Syrup', 'Berries'],
      tags: ['Comfort Food', 'Family Recipe'],
      image: carbonara,
      userName: 'Marco',
      userAvatar: 'https://i.pravatar.cc/100?img=12',
      rating: 0,
      isOwn: false,
    },
  ],

  // Soup Season Challenge
  'challenge-3': [
    {
      id: 'sub-3-1',
      name: 'French Onion Soup Gratinée',
      prepTime: '1 hour',
      cost: '$14',
      ingredients: ['Onions', 'Beef Broth', 'Gruyère', 'Baguette', 'Thyme'],
      tags: ['Comfort Food', 'Gourmet'],
      image: risotto,
      userName: 'Gordon',
      userAvatar: 'https://i.pravatar.cc/100?img=8',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-3-2',
      name: 'Creamy Tomato Basil Soup',
      prepTime: '45 mins',
      cost: '$10',
      ingredients: ['Tomatoes', 'Basil', 'Cream', 'Garlic', 'Onion'],
      tags: ['Vegetarian', 'Healthy'],
      image: carbonara,
      userName: 'Sophie',
      userAvatar: 'https://i.pravatar.cc/100?img=9',
      rating: 0,
      isOwn: false,
    },
    {
      id: 'sub-3-3',
      name: 'Beef & Vegetable Stew',
      prepTime: '2 hours',
      cost: '$22',
      ingredients: ['Beef Chuck', 'Carrots', 'Potatoes', 'Red Wine', 'Herbs'],
      tags: ['Comfort Food', 'Family Recipe'],
      image: wellington,
      userName: 'Julia',
      userAvatar: 'https://i.pravatar.cc/100?img=10',
      rating: 0,
      isOwn: false,
    },
  ],
};

// Helper to get submissions for a specific challenge
export const getSubmissionsForChallenge = (challengeId: string): Submission[] => {
  return challengeSubmissions[challengeId] || [];
};
