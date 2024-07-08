import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useTranslations } from "next-intl";

import data from "data/data.json";
import AudioPlayer from "./AudioPlayer";
import { ScrollArea } from "components/scroll-area";
export default function TableofContent() {
  const t = useTranslations(); // Corrected
  return (
    <div className="md:w-1/2 p-4 mx-auto sm:p-0 my-10">
      <h1 className="text-center text-2xl font-medium leading-tight text-muted-foreground dark:text-white tracking-tighter md:text-2xl lg:leading-[1.1]">
        {t("table.heading")}
      </h1>
      <ScrollArea className="h-[600px] rounded-md border mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("table.play")}</TableHead>
              <TableHead>{t("table.title")}</TableHead>
              <TableHead className="text-right">{t("table.page")}</TableHead>
              {/* <TableHead className="text-right">Int</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((song) => (
              <TableRow key={song.id}>
                <TableCell>
                  {song.play ? <AudioPlayer audio={song.audio ?? ""} /> : null}
                </TableCell>
                <TableCell>{song.title}</TableCell>
                <TableCell className="text-right text-sm">
                  {song.page}
                </TableCell>
                {/* <TableCell className="text-right">{song.interpret}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </ScrollArea>
      <p className="text-center text-sm leading-tight text-primary dark:text-white tracking-tighter md:text-sm lg:leading-[1.1] mt-4">
           Интерпрет: Петър Ганев, Музика от Учителя - Интеграл
        </p>
    </div>
  );
}
