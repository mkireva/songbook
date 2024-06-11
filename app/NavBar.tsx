import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Component() {
  return (
    <header className="flex sticky top-0 left-0 bg-sky-50 h-20 w-full shrink-0 items-center shadow-sm px-4 md:px-6 pb-8 pt-8 bg-opacity-60">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden bg-opacity-60 bg-transparent border-none text-sky-700">
            <MenuIcon className="h-6 w-6"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image
              src="/logo_bsongs.png"
              alt="Песни от Учителя"
              width={150}
              height={150}
            />
            <span className="sr-only">Песни от Учителя</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold text-sky-700"
              prefetch={false}
            >
              Начало
            </Link>
            <Link
              href="/about"
              className="flex w-full items-center py-2 text-lg font-semibold text-sky-700"
              prefetch={false}
            >
              За книгата
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image
          src="/logo_bsongs.png"
          alt="Песни от Учителя"
          width={200}
          height={200}
          className="pl-10"
        />
        <span className="sr-only">Песнарка</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-lg font-medium transition-colors text-sky-700 hover:bg-sky-100 hover:text-sky-900 focus:bg-sky-100 focus:text-sky-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-sky-100/50 data-[state=open]:bg-sky-100/50 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50 dark:focus:bg-sky-800 dark:focus:text-sky-50 dark:data-[active]:bg-sky-800/50 dark:data-[state=open]:bg-sky-800/50"
          prefetch={false}
        >
          Начало
        </Link>
        <Link
          href="/about"
          className=" group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors text-sky-700 hover:bg-sky-100 hover:text-sky-900 focus:bg-sky-100 focus:text-sky-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-sky-100/50 data-[state=open]:bg-sky-100/50 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50 dark:focus:bg-sky-800 dark:focus:text-sky-50 dark:data-[active]:bg-sky-800/50 dark:data-[state=open]:bg-sky-800/50"
          prefetch={false}
        >
          За книгата
        </Link>
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

