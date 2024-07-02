import { HotkeyDescription } from "@/app/_components/HotkeyDescription";

export function BlogSearchFooter() {
  return (
    <div className="hidden sm:block text-xs font-bold bg-white border-gray-200 border-t shadow-lg shadow-black pt-2 pb-2 pl-4 pr-4">
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-1">
          <HotkeyDescription description="">↑</HotkeyDescription>
          <HotkeyDescription description="to navigate"> ↓</HotkeyDescription>
        </div>
        <HotkeyDescription description="to select">enter</HotkeyDescription>
        <HotkeyDescription description="to close">esc</HotkeyDescription>
      </div>
    </div>
  );
}
