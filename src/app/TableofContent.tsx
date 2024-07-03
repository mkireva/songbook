import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import data from "data/data.json";
import AudioPlayer from "./AudioPlayer";


export default function TableofContent() {
  return (
    <div className="md:w-1/2 p-4 mx-auto sm:p-0 my-10">
      <h1 className="text-center text-2xl font-medium leading-tight text-muted-foreground dark:text-white tracking-tighter md:text-2xl lg:leading-[1.1]">
        Съдържание
      </h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Play</TableHead>
            <TableHead>Заглавие</TableHead>
            <TableHead className="text-right">Стр.</TableHead>
            {/* <TableHead className="text-right">Int</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((song) => (
            <TableRow key={song.id}>
              <TableCell>{song.play ? <AudioPlayer audio={song.audio ?? ""} /> : null}</TableCell>
              <TableCell>{song.title}</TableCell>
              <TableCell className="text-right">{song.page}</TableCell>
              {/* <TableCell className="text-right">{song.interpret}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
