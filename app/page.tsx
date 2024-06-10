import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://beinsasongs.vercel.app"),
  title: "Песни от Учителя",
  description:
    "Четвърто преработено и допълнено издание, 2024. Изданието съдържа вокални и инструментални композиции от Учителя Петър Дънов и негови ученици.",
  openGraph: {
    title: "Песни от Учителя",
    description:
      "Четвърто преработено и допълнено издание, 2024. Изданието съдържа вокални и инструментални композиции от Учителя Петър Дънов и негови ученици.",
    url: "beinsasongs.de",
    siteName: "Песни от Учителя",
    images: [
      {
        url: "https://beinsasongs.vercel.app/opengraph-image.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://beinsasongs.vercel.app/opengraph-image.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="container">
          <h2 className="text-2xl text-center font-semibold  text-sky-700 mt-20">
            Петър Дънов
          </h2>
          <h1 className="text-5xl text-center font-bold  text-sky-700 mt-6">
            Песни от Учителя
          </h1>
          <h1 className="text-xl p-3 text-center text-sky-700 mt-6">
            Издадени от <br />
            <span className="space-x-2">
              <span> Петър Ганев</span>
              <span className="font-bold text-2xl">·</span>
              <span> Мария Кирева</span>
            </span>
          </h1>
          <h1 className="text-xl p-3 italic text-center text-sky-700 mt-3">
            Четвърто преработено и допълнено издание
          </h1>
          <h1 className="text-xl text-center font-semibold text-sky-700 mt-3">
            2024
          </h1>
          <div className="max-w-5xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto my-10 pl-9 pr-9 pt-7 pb-8 bg-sky-100 rounded-lg mb-20">
            <div className="my-6">
              <Image
                src="/cover.jpeg"
                width={500}
                height={500}
                priority={true}
                alt="Picture of the author"
                className="shadow-xl rounded-xl"
              />
            </div>
            <div className=" my-4 max-w-4xl mx-auto p-2">
              <p className=" md:ml-10 text-xl text-start font-semibold  text-sky-700">
                Изданието съдържа вокални и инструментални композиции от Учителя
                Петър Дънов и негови ученици.
              </p>
              <p className=" mt-5 md:ml-10 text-xl text-start font-semibold text-sky-700">
                Интерактивният пдф-документ предлага:
              </p>
              <ul className="mt-3 pl-5 pr-5 list-disc">
                <li className="mt-1 md:ml-10 text-xl font-semibold text-sky-700">
                  Азбучно съдържание за мобилни устройства с навигация към всяка
                  песен
                </li>
                <li className="md:ml-10 text-xl font-semibold  text-sky-700">
                  Навигация от съдържанието на документа
                </li>
                <li className="md:ml-10 text-xl font-semibold  text-sky-700">
                  Навигация от заглавието на всяка песен до съответната
                  обяснителна бележка
                </li>
                <li className="md:ml-10 text-xl font-semibold  text-sky-700">
                  Обратна навигация от обяснителната бележка на песента към
                  съответната песен
                </li>
                <li className="md:ml-10 text-xl font-semibold  text-sky-700">
                  Азбучен показател с навигация към съответната песен
                </li>
              </ul>
              <div className=" my-10 flex items-center justify-center">
                <Button className="bg-sky-600 w-3/4 py-6 rounded-md items-center justify-center shadow-2xl hover:bg-sky-700">
                  <a
                    className="text-white text-2xl font-bold"
                    href={"/Песни-от-Учителя.2024.pdf"}
                    target="_blank"
                  >
                    Download
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
