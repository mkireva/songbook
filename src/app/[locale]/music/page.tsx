import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface Params {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Params): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Music" });
  return {
    title: t("title"),
  };
}

export default function About() {
  const t = useTranslations("Music");
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">
        <div className="container lg:w-3/4 p-4">
          <div className="mt-10 mb-10 text-center ">
            <h2 className="text-center text-primary dark:text-white text-3xl font-medium leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] mt-6">
              {t("title")}
            </h2>
          </div>
          <div className="p-2">
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph1")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph2")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph3")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph4")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph5")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph6")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph7")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph8")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph9")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph10")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph11")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph12")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph13")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph14")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph15")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph16")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph17")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph18")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph19")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph20")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph21")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph22")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph23")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph24")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph25")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph26")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph27")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph28")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph29")}&quot;
              </p>
            </blockquote>
            <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-md italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &quot;{t("content.paragraph30")}&quot;
              </p>
            </blockquote>
            <p className="text-md text-end">{t("content.paragraph31")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
