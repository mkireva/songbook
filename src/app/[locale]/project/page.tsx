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
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Transformieren Sie Ihr tägliches Leben
                </h2>
                <p className="text-muted-foreground">
                  Bereicheren Sie Ihre Musikpaxis mit diesen wunderbaren
                  Musikübungen.
                </p>
                <div className="flex gap-2">
                  <Button size="lg">
                    Vorbestellen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Erfahre mehr
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Nach der Vorbestellung erhalten Sie eine digitale Kopie des
                  Buches.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/cover5.jpg"
                  alt="Product Image"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
              Im Buch sind enthalten:
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Alle überlieferten Lieder und Musikkompositionen",
                "bulgarische-deutsch",
                "Kommentare zu den einzelnen Liedern",
                "Wörterbuch der Musibegriffe und Index der Lieder",
              ].map((feature, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="flex items-center p-4">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <h3 className="font-semibold">{feature}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-4">
              Über das Projekt
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 items-start">
              <div className="space-y-4">
                <p>{t("content.paragraph2")}</p>
                <p>{t("content.paragraph3")}</p>
                <p>{t("content.paragraph4")}</p>
              </div>
              <div className="space-y-4">
                <p>{t("content.paragraph5")}</p>
                <p>{t("content.paragraph6")}</p>
                <p>{t("content.paragraph7")}</p>
                <p>{t("content.paragraph8")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
