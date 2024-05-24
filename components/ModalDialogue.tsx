import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const ModalDialogue = ({
  triggerButton,
  title,
  description,
  children,
  footerButton,
}: {
  triggerButton: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  footerButton?: React.ReactNode;
}) => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        {triggerButton ? (
          triggerButton
        ) : (
          <Button variant="outline">open</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl overflow-y-auto p-2 min-h-[500px] h-[98vh]  max-h-[700px] overflow-x-hidden">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">{children}</div>
        <DialogFooter className="sm:justify-start sm:space-x-2">
        {footerButton ? footerButton : null}
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialogue;
