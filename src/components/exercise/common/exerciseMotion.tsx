"use client";
import { Dialog, DialogContent, DialogDescription,DialogTitle } from "@/components/ui/dialog";
import { ExerciseModal } from "@/lib/interfaceutils";
type Props = {
  exercise: ExerciseModal | null;
  open: boolean;
  onClose: () => void;
};
export default function ExerciseMotion({ exercise, open, onClose }: Props) {
  if (!exercise?.youtubeID) return null;
  const youtubeSrc = "https://www.youtube-nocookie.com/embed/" + exercise.youtubeID
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] md:min-w-lg bg-white rounded-xl shadow-xl">
        <div>
          <DialogTitle className="text-2xl font-bold border-l-4 border-black pl-3 mb-6">{exercise.exercise}</DialogTitle>
          <DialogDescription className="hidden">{exercise.exercise}の動画</DialogDescription>
          <div className="mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={youtubeSrc}
                title={exercise.exercise}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}