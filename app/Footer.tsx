import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-full py-6 text-gray-800 dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center"></div>
          <Link
            href="https://www.kireva.de/"
            className="text-lg text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
            target="_blank"
          >
            &copy; {year} Песни от Учителя
          </Link>
          <div className="flex items-center"></div>
        </div>
      </footer>
    </>
  );
}
