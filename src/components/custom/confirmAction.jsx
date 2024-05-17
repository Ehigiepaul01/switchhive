import { Button } from "../ui";
import { Dialog, DialogContent } from "../ui/dialog";

export default function ConfirmAction({
  isOpen,
  onClose,
  onCancel,
  message,
  onContinue,
  isLoading,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-w-[400px] space-y-6"
        style={{ padding: 32 }}
      >
        <p className="text-xl text-center ">{message}</p>

        <div className="flex items-center justify-center gap-5">
          <Button
            onClick={onCancel || onClose}
            variant="error"
            size="sm"
            className="text-red-500 "
            disabled={isLoading}
          >
            No
          </Button>
          <Button
            onClick={onContinue}
            size="sm"
            // className="w-[160px]"
            isLoading={isLoading}
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
