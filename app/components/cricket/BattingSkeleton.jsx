import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const BattingSkeleton = () => {
  return (
    <>
            <Table className="bg-white rounded-md my-1">
                <TableHeader>
                    <TableRow className=" border-[#8F8F8F] text-black">
                        <TableHead className="ps-4 pe-0">Batsman</TableHead>
                        <TableHead className="text-left ps-4 pe-0">R</TableHead>
                        <TableHead className="text-left ps-4 pe-0">B</TableHead>
                        <TableHead className="text-left ps-4 pe-0">4s</TableHead>
                        <TableHead className="text-left ps-4 pe-0">6s</TableHead>
                        <TableHead className="text-left ps-4 pe-0">SR</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-black">
                    <TableRow className=" border-none">
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                        <TableCell className="ps-4 pe-0">-</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
  )
}

export default BattingSkeleton