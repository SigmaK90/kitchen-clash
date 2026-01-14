import { useState } from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import SubmissionCard, { Submission } from './SubmissionCard';
import DishSubmissionForm, { DishSubmission } from './DishSubmissionForm';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

interface ChallengeSubmissionsProps {
  challengeTitle: string;
  mySubmission: Submission | null;
  otherSubmissions: Submission[];
  onBack: () => void;
  onEditSubmission: (dish: DishSubmission) => void;
  onDeleteSubmission: () => void;
  onRateSubmission: (submissionId: string, rating: number) => void;
}

const ChallengeSubmissions = ({
  challengeTitle,
  mySubmission,
  otherSubmissions,
  onBack,
  onEditSubmission,
  onDeleteSubmission,
  onRateSubmission,
}: ChallengeSubmissionsProps) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleEdit = () => {
    setShowEditForm(true);
  };

  const handleEditSubmit = (dish: DishSubmission) => {
    onEditSubmission(dish);
    setShowEditForm(false);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDeleteSubmission();
    setShowDeleteConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-xl font-bold text-foreground">{challengeTitle}</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="w-4 h-4" />
            {otherSubmissions.length + (mySubmission ? 1 : 0)} submissions
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue={mySubmission ? "my-submission" : "all"} className="w-full">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="my-submission" disabled={!mySubmission}>
            My Submission
          </TabsTrigger>
          <TabsTrigger value="all">
            All Dishes ({otherSubmissions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-submission" className="mt-4">
          {mySubmission ? (
            <SubmissionCard
              submission={mySubmission}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              You haven't submitted a dish yet.
            </div>
          )}
        </TabsContent>

        <TabsContent value="all" className="mt-4">
          {otherSubmissions.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {otherSubmissions.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  onRate={(rating) => onRateSubmission(submission.id, rating)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No other submissions yet. Be the first!
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Edit Sheet */}
      <Sheet open={showEditForm} onOpenChange={setShowEditForm}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader className="sr-only">
            <SheetTitle>Edit Your Dish</SheetTitle>
          </SheetHeader>
          <DishSubmissionForm
            challengeTitle={challengeTitle}
            onSubmit={handleEditSubmit}
            onCancel={() => setShowEditForm(false)}
          />
        </SheetContent>
      </Sheet>

      {/* Delete Confirmation */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Submission?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your dish submission? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ChallengeSubmissions;
