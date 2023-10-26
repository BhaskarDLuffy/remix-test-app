import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const BowlingScore = ({ matchApiData }) => {
    return (
        <>
            <Table className="bg-white rounded-md mb-1">
                <TableHeader>
                    <TableRow className=" border-[#8F8F8F] text-black">
                        <TableHead className="ps-4 pe-0">Bowler</TableHead>
                        <TableHead className="text-left ps-4 pe-0">O</TableHead>
                        <TableHead className="text-left ps-4 pe-0">R</TableHead>
                        <TableHead className="text-left ps-4 pe-0">W</TableHead>
                        <TableHead className="text-left ps-4 pe-0">Eco</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-black">
                    <TableRow className=" border-none">
                        <TableCell className="ps-4 pe-0">
                            {matchApiData.players[`${matchApiData.play.live.bowler_key}`].player.name}*
                        </TableCell>
                        <TableCell className="ps-4 pe-0">{((matchApiData.players[`${matchApiData?.play?.live.bowler_key}`].score['1'].bowling.score.balls) / 6).toFixed(1)}</TableCell>
                        <TableCell className="ps-4 pe-0">{matchApiData.players[`${matchApiData?.play?.live.bowler_key}`].score['1'].bowling.score.runs}</TableCell>
                        <TableCell className="ps-4 pe-0">{matchApiData.players[`${matchApiData?.play?.live.bowler_key}`].score['1'].bowling.score.wickets}</TableCell>
                        <TableCell className="ps-4 pe-0">{matchApiData.players[`${matchApiData?.play?.live.bowler_key}`].score['1'].bowling.score.economy}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default BowlingScore