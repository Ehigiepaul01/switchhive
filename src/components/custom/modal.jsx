import { Dialog, DialogContent } from "../ui/dialog";

export default function Modal({
  children,
  isOpen,
  onClose,
  message,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-w-[400px] space-y-6"
        style={{ padding: 24 }}
      >
        <h5 className="text-stone-950 text-2xl font-medium ">{message}</h5>
        <div className="flex flex-col justify-center gap-5">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
