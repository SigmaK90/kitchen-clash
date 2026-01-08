import { useState } from 'react';
import { UserPlus, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface AddFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}

const AddFriendModal = ({ isOpen, onClose, onAdd }: AddFriendModalProps) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'adding' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setStatus('adding');
    
    // Simulate adding friend
    setTimeout(() => {
      setStatus('success');
      onAdd(name);
      setTimeout(() => {
        setName('');
        setStatus('idle');
        onClose();
      }, 1500);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-foreground text-accent">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Friend Added!</h3>
            <p className="text-muted-foreground">{name} is now your cooking buddy 🍳</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <UserPlus className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Add a Friend</h3>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Friend's Name or Username
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full"
                  disabled={status === 'adding'}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={status === 'adding'}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={!name.trim() || status === 'adding'}
                >
                  {status === 'adding' ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Adding...
                    </span>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Friend
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddFriendModal;
