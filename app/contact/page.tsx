import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      {" "}
      <Link
        href="https://www.kireva.de/"
        className="text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        prefetch={false}
        target="_blank"
      >
        Контакт
      </Link>
    </div>
  );
}
