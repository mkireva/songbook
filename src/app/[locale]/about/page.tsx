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
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("title"),
  };
}

export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">
        <div className="container lg:w-3/4 p-4">
          <div className="mt-10 mb-10 text-center ">
            <h1 className="text-4xl text-sky-700">{t("title")}</h1>
          </div>
          <div className="p-2">
            <p className="text-xl">{t("content.paragraph1")}</p>
            <p className="text-xl mt-5">{t("content.paragraph2")}</p>

            <p className="text-xl mt-5">{t("content.paragraph3")}</p>

            <p className="text-xl mt-5">{t("content.paragraph4")}</p>
            <p className="text-xl mt-5">{t("content.paragraph5")}</p>

            <ul className="list-decimal list-inside mt-5">
              <li className="text-xl mt-5 ">{t("content.list1")}</li>
              <li className="text-xl mt-5">{t("content.list2")}</li>
              <li className="text-xl mt-5">{t("content.list3")}</li>
            </ul>
            <p className="text-xl mt-5">{t("content.paragraph6")}</p>
            <p className="text-xl mt-5">{t("content.paragraph7")}</p>
            <ul className="list-decimal list-inside mt-5">
              <li className="text-xl mt-5">{t("content.list4")}</li>
              <li className="text-xl mt-5">{t("content.list5")}</li>
              <li className="text-xl mt-5">{t("content.list6")}</li>
            </ul>
            <p className="text-xl mt-5">{t("content.paragraph8")}</p>
            <p className="text-xl mt-5">{t("content.paragraph9")}</p>
            <p className="text-xl mt-5">{t("content.paragraph10")}</p>
            <p className="text-xl mt-5 text-end mr-3">
              {t("content.paragraph11")}
            </p>
            <p className="text-xl text-end">{t("content.paragraph12")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
