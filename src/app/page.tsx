import HomePage from "@/component/pages/home/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-gray-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16bg-gray-900 sm:items-start">
         <HomePage></HomePage>
      </main>
    </div>
  );
}
