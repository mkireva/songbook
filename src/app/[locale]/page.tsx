import Image from "next/image";
import { useTranslations } from "next-intl";
import TableofContent from "../TableofContent";
import { Button } from "components/ui/button";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <div className="min-h-screen">
        <div className="container">
          <h2 className="text-center text-2xl font-medium leading-tight text-primary dark:text-white  tracking-tighter md:text-2xl lg:leading-[1.1] mt-10">
            {t("author")}
          </h2>
          <h1 className="text-center text-4xl font-medium leading-tight text-primary dark:text-white tracking-tighter md:text-4xl lg:leading-[1.1] mt-6">
            {t("title")}
          </h1>
          <h1 className="text-lg p-3 text-center mt-6">
          {t("publisher")} <br />
            <span className="space-x-2">
              <span>{t("publisher1")}</span>
              <span className="font-bold text-2xl">·</span>
              <span>{t("publisher2")}</span>
            </span>
          </h1> 
          <h1 className="text-lg italic text-center text-muted-foreground mt-10">
            {t("edition")}
          </h1>
          <h1 className="text-lg text-center text-muted-foreground mt-3">
            {t("year")}
          </h1>
          <div className="max-w-5xl grid md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto my-6 ">
            <div className="my-6 ">
              <Image
                src="/cover.jpeg"
                width={500}
                height={500}
                quality={100}
                style={{ width: "100vw", height: "auto" }} // Maintain aspect ratio
                priority={true}
                alt="Picture of the author"
                className="shadow-xl rounded-xl"
              />
            </div>
            <div className="md:col-span-2 my-4 max-w-4xl mx-auto p-2">
              <p className=" md:ml-6 text-md text-start">{t("description")}</p>
              <p className=" mt-5 md:ml-6 text-md text-start">
                {t("interactive_pdf")}
              </p>
              <ul className="mt-3 pl-5 pr-5 list-disc">
                <li className="mt-1 md:ml-6 text-md">{t("feature1")}</li>
                <li className="md:ml-6 text-md">{t("feature2")}</li>
                <li className="md:ml-6 text-md">{t("feature3")}</li>
                <li className="md:ml-6 text-md">{t("feature4")}</li>
                <li className="md:ml-6 text-md">{t("feature5")}</li>
              </ul>
              <div className="my-8 flex items-center justify-center ">
                <Button className="md:w-3/5 w-full py-5 md:mt-10 lg:mt-10 xl:mt-10">
                  <a
                    className="text-lg"
                    href={"/Песни-от-Учителя-2024.pdf"}
                    target="_blank"
                  >
                    {t("download")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <TableofContent />
        
      </div>
    </>
  );
}
