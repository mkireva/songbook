import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";
import TableofContent from "../TableofContent";

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
          {/* <h1 className="text-xl p-3 text-center text-muted-foreground mt-6">
            Издадени от <br />
            <span className="space-x-2">
              <span>Петър Ганев</span>
              <span className="font-bold text-2xl">·</span>
              <span>Мария Кирева</span>
            </span>
          </h1> */}
          <h1 className="text-lg italic text-center text-muted-foreground mt-10">
            {t("edition")}
          </h1>
          <h1 className="text-lg text-center text-muted-foreground mt-3">
            {t("year")}
          </h1>
          <div className="max-w-5xl grid md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto my-10 ">
            <div className="my-6 ">
              <Image
                src="/cover.jpeg"
                width={500}
                height={500}
                style={{ width: "100vw", height: "auto" }} // Maintain aspect ratio
                priority={true}
                alt="Picture of the author"
                className="shadow-xl rounded-xl"
              />
            </div>
            <div className="md:col-span-2 my-4 max-w-4xl mx-auto p-2">
              <p className=" md:ml-3 text-lg text-start ">{t("description")}</p>
              <p className=" md:ml-6 text-lg text-start mt-10">
                {t("interactive_pdf")}
              </p>
              <ul className="mt-3 pl-5 pr-5 list-disc">
                <li className="mt-1 md:ml-3 text-lg">{t("feature1")}</li>
                <li className="md:ml-3 text-lg">{t("feature2")}</li>
                <li className="md:ml-3 text-lg">{t("feature3")}</li>
                <li className="md:ml-3 text-lg">{t("feature4")}</li>
                <li className="md:ml-3 text-lg">{t("feature5")}</li>
              </ul>
            
              <div className=" md:ml-3 my-16 flex items-start justify-start ">
                <Button className=" w-full ">
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
      </div>
    </>
  );
}
