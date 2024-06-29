import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <>
      <footer className="w-full py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center"></div>
          <Link
            href="https://www.kireva.de/"
            className="text-m text-lg hover:text-gray-900 dark:hover:text-gray-400"
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
