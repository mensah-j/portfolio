export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center w-full">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-9xl font-extrabold text-gray-500">404</div>
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-bold">not found</h1>
          <span className="text-sm font-semibold">
            Sorry, the page you are looking for does not exist.
          </span>
        </div>
      </div>
    </div>
  );
}
