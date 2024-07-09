import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useTranslations } from "next-intl";

import data from "data/data.json";
import AudioPlayer from "./AudioPlayer";
import { ScrollArea } from "components/scroll-area";
import { Label } from "components/label";
export default function TableofContent() {
  const t = useTranslations(); // Corrected
  return (
    <div className="md:w-1/2 p-4 mx-auto sm:p-0 my-10">
      <h1 className="text-center text-2xl font-medium leading-tight text-muted-foreground dark:text-white tracking-tighter md:text-2xl lg:leading-[1.1]">
        {t("table.heading")}
      </h1>
      <ScrollArea className="h-[750px] rounded-md border mt-10">
        <Table>
        <TableCaption className="my-4 text-sm">Интерпрет: Петър Ганев, Музика от Учителя - Интеграл</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{t("table.play")}</TableHead>
              <TableHead>{t("table.title")}</TableHead>
              <TableHead className="text-right">{t("table.page")}</TableHead>
            
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
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      </ScrollArea>
      <div className="text-center items-center mt-2">
        <Label className="text-xs text-muted-foreground" htmlFor="email">
          
        </Label>
      </div>
    </div>
  );
}
