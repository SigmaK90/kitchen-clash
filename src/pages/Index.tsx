import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Leaderboard from '@/pages/Leaderboard';
import Challenges from '@/pages/Challenges';
import Friends from '@/pages/Friends';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'challenges' | 'friends'>('leaderboard');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'challenges' && <Challenges />}
        {activeTab === 'friends' && <Friends />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            🍳 CookOff – Cook, Compete, Connect
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
