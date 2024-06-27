import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <>
      <footer className="w-full py-6 text-gray-800 dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center"></div>
          <Link
            href="https://www.kireva.de/"
            className="text-md text-gray-800 text-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
            target="_blank"
          >
            &copy; {t("text", { now: new Date() })}
          </Link>
          <div className="flex items-center"></div>
        </div>
      </footer>
    </>
  );
}
