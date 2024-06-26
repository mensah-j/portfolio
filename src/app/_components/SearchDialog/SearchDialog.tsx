import { DialogBase } from "./DialogBase";

export interface SearchDialogProps {
  trigger: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  return <DialogBase trigger={props.trigger}>Search</DialogBase>;
}
