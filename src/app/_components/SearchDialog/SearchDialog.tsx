import { BaseDialog } from "@/app/_components/BaseDialog";

export interface SearchDialogProps {
  trigger: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  return <BaseDialog trigger={props.trigger}>Search</BaseDialog>;
}
