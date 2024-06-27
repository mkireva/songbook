import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="container">
          <h2 className="text-2xl text-center font-semibold text-sky-700 mt-10">
            {t("author")}
          </h2>
          <h1 className="text-4xl text-center font-bold text-sky-700 mt-6">
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
          <h1 className="text-xl italic text-center text-muted-foreground mt-10">
            {t("edition")}
          </h1>
          <h1 className="text-xl text-center font-semibold text-muted-foreground mt-3">
            {t("year")}{" "}
          </h1>
          <div className="max-w-5xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto my-10">
            <div className="my-6">
              <Image
                src="/cover.jpeg"
                width={500}
                height={500}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
                priority={true}
                alt="Picture of the author"
                className="shadow-xl rounded-xl"
              />
            </div>
            <div className=" my-4 max-w-4xl mx-auto p-2">
              <p className=" md:ml-6 text-xl text-start text-gray-800">
                {t("description")}
              </p>
              <p className=" mt-5 md:ml-6 text-xl text-start text-gray-800">
                {t("interactive_pdf")}
              </p>
              <ul className="mt-3 pl-5 pr-5 list-disc">
                <li className="mt-1 md:ml-6 text-xl  text-gray-800">
                  {t("feature1")}
                </li>
                <li className="md:ml-6 text-xl  text-gray-800">
                  {t("feature2")}
                </li>
                <li className="md:ml-6 text-xl text-gray-800">
                  {t("feature3")}
                </li>
                <li className="md:ml-6 text-xl text-gray-800">
                  {t("feature4")}
                </li>
                <li className="md:ml-6 text-xl text-gray-800">
                  {t("feature5")}
                </li>
              </ul>
              <div className=" my-10 flex items-center justify-center">
                <Button className="bg-sky-600 md:w-3/4 w-full py-6 font-bold rounded-md items-center justify-center shadow-lg hover:bg-sky-700">
                  <a
                    className="text-white text-2xl"
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
