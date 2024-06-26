import * as Dialog from "@radix-ui/react-dialog";
import styles from "./BaseDialog.module.css";
import mix from "classnames";

export interface BaseDialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function BaseDialog(props: BaseDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={mix(
            styles["overlay"],
            "fixed inset-0 bg-black/50 overlay",
          )}
        />
        <Dialog.Content
          className={mix(
            styles["content"],
            "fixed top-0 left-1/2 -translate-x-1/2 translate-y-[25%] w-[700px] h-60 rounded bg-white p-8",
          )}
        >
          {props.children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
