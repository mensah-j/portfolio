import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./BaseDialog.module.css";
import mix from "classnames";

export interface BaseDialogProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export function BaseDialog(props: BaseDialogProps) {
  return (
    <Dialog.Root open={props.open}>
      <Dialog.Portal>
        <VisuallyHidden.Root>
          <Dialog.Title>Search</Dialog.Title>
        </VisuallyHidden.Root>
        <Dialog.Overlay
          className={mix(styles["overlay"], "fixed inset-0 bg-black/50")}
          onClick={() => props.onClose && props.onClose()}
        />
        <Dialog.Content
          aria-describedby={undefined}
          className={mix(
            styles["content"],
            "overflow-hidden fixed shadow-lg shadow-[#575757] top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-[100px] w-full h-full sm:w-[600px] md:w-[700px] sm:h-fit sm:rounded bg-gray-100",
          )}
        >
          {props.children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
