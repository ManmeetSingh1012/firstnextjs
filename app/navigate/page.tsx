import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home() {
  const throwerror = () => {
    // throw new Error("This is an error");
    notFound();
  };
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/">Home</Link>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>
      </div>
    </div>
  );
}
