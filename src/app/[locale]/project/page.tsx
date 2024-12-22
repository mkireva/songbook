import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
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
  const t = await getTranslations({ locale, namespace: "project" });
  return {
    title: t("title"),
  };
}

export default function Project() {
  const t = useTranslations("project");
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl text-primary dark:text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Lieder des Meisters
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transformieren Sie Ihr Leben, indem Sie Ihre
                  tägliche Musikpaxis durch diese wunderbaren Musikübungen
                  bereichern.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Vorbestellen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  Mit dieser Vorbestellung erhalten Sie eine digitale Kopie des
                  Buches.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <Image
              src="/cover3.jpg"
              alt="Product Image"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-xl"
            />
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center">
                Über das Projekt
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {t("content.paragraph2")}
              </p>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {t("content.paragraph3")}
              </p>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {t("content.paragraph4")}
              </p>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {t("content.paragraph5")}
              </p>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              {t("content.paragraph6")}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
              Im Buch sind enthalten:
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Alle überlieferbaren Lieder und Musikkompositionen</h3>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">bulgarisch-deutsch</h3>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Ausführliche Kommentare zu jedem Lied</h3>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Wörterbuch der Musikbegriffe und Index der Lieder</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>

    // <div className="flex flex-col min-h-screen items-center ">
    //   <div className="container lg:w-4/5 p-4">
    //     <div className="mt-10 mb-10 text-center ">
    //       <h2 className="text-center text-primary dark:text-white text-3xl font-medium leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] mt-6">
    //         {t("title")}
    //       </h2>
    //     </div>

    //     <div className="p-2">
    //       <p className="text-md">{t("content.paragraph1")}</p>
    //       <div className="flex flex-col-2 items-center">
    //         <div>
    //           <p className="text-md mt-5 text-balance">
    //             {t("content.paragraph2")}
    //           </p>
    //           <p className="text-md mt-5 text-balance">
    //             {t("content.paragraph3")}
    //           </p>
    //         </div>
    //         <div className="my-6 p-6">
    //           <Image
    //             src="/cover.jpg"
    //             width={500}
    //             height={500}
    //             quality={100}
    //             style={{ width: "100vw", height: "auto" }} // Maintain aspect ratio
    //             priority={true}
    //             alt="Picture of the author"
    //             className="shadow-xl rounded-xl"
    //           />
    //         </div>
    //       </div>
    //       <p className="text-md mt-5 text-balance">{t("content.paragraph4")}</p>
    //       <p className="text-md mt-5 text-balance">{t("content.paragraph5")}</p>
    //       <p className="text-md mt-5 text-balance">{t("content.paragraph6")}</p>
    //       <p className="text-md mt-5 text-balance">
    //         {t("content.paragraph11")}
    //       </p>
    //       <p className="text-md">{t("content.paragraph12")}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
