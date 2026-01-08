import { useState } from 'react';
import { friends as initialFriends } from '@/data/mockData';
import { Friend } from '@/types';
import FriendCard from '@/components/FriendCard';
import DishComparison from '@/components/DishComparison';
import AddFriendModal from '@/components/AddFriendModal';
import { Users, UserPlus, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Friends = () => {
  const [friendsList, setFriendsList] = useState<Friend[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddFriend = (name: string) => {
    const newFriend: Friend = {
      id: `friend-${Date.now()}`,
      name,
      avatar: '🧑‍🍳',
      score: Math.floor(Math.random() * 500) + 100,
    };
    setFriendsList(prev => [...prev, newFriend]);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cooking Buddies</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Friends</h1>
          <p className="text-muted-foreground">Compare dishes and compete together!</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Friend
        </Button>
      </div>

      {/* Comparison Section */}
      {selectedFriend && (
        <div className="animate-in slide-in-from-top duration-300">
          <DishComparison 
            friend={selectedFriend} 
            onClose={() => setSelectedFriend(null)} 
          />
        </div>
      )}

      {/* Friends List */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ArrowLeftRight className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">
            {selectedFriend ? 'Select another friend' : 'Select a friend to compare dishes'}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {friendsList.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              isSelected={selectedFriend?.id === friend.id}
              onSelect={setSelectedFriend}
            />
          ))}
        </div>
      </div>

      {/* Empty State */}
      {friendsList.length === 0 && (
        <div className="text-center py-12 rounded-xl bg-card border border-border">
          <p className="text-4xl mb-4">👥</p>
          <h3 className="text-lg font-semibold text-foreground mb-2">No friends yet</h3>
          <p className="text-muted-foreground mb-4">Add friends to compare your cooking!</p>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Your First Friend
          </Button>
        </div>
      )}

      {/* Add Friend Modal */}
      <AddFriendModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddFriend}
      />
    </div>
  );
};

export default Friends;
