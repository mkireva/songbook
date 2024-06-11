
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-6 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4  ">
        
          <Link
            href="https://www.kireva.de/"
            className="text-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ml-6"
            prefetch={false}
            target="_blank"
          >
           Контакт
          </Link>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">&copy; 2024 Песни от Учителя</p>
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </footer>
  )
}