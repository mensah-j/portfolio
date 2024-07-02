import mix from "classnames";

export interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps) {
  return (
    <footer className="w-full">
      <div
        className={mix("w-full flex flex-col items-center", props.className)}
      >
        <div className="flex flex-row justify-end items-center p-2 font-semibold w-content">
          <p className="text-xs sm:text-sm text-center">
            © 2024 Jeffery Mensah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
