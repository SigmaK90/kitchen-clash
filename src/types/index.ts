export interface User {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
  dishesCooked: number;
  isCurrentUser?: boolean;
}

export interface Dish {
  id: string;
  name: string;
  image: string;
  rating: number;
  userId: string;
  userName: string;
  createdAt: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  recipe: string;
  recipePrice: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  deadline: string;
  participants: number;
  image: string;
  isJoined: boolean;
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  score: number;
  recentDish?: Dish;
}
