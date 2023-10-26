import { useState } from "react";
import { Link } from "@remix-run/react";
import { getPresentMatchParameters } from "~/services/cricket/MatchServices";
import { Button } from "~/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
} from "~/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";

const MatchSelector = ({matchvalue}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(matchvalue)
    const presentMatchParameters = getPresentMatchParameters();
    return (
        <>
            {presentMatchParameters[0]["match-count"] === 1 ?
                <>
                <p className="text-[#FFBE00] pe-2 font-semibold">{presentMatchParameters[0].match[0].countries.toUpperCase()}</p>
                </>
                :
                <>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-fit justify-between border-none text-[#FFBE00] hover:bg-transparent hover:text-[#FFBE00]"
                            >
                                {value
                                    ? presentMatchParameters[0].match.find((params) => params["match-id"] === value)?.countries.toUpperCase()
                                    : `Select Match`}
                                <svg fill="#FFBE00" className="ml-2 h-4 w-4 shrink-0 opacity-50" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[130px] p-0">
                            <Command className="bg__selector__blur">
                                <CommandGroup className="bg-[transparent]">
                                    {presentMatchParameters[0].match.map((params) => (
                                        <CommandItem
                                            key={params["match-id"]}
                                            value={params["match-id"]}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                            className="bg-transparent font-bold py-0 px-1"
                                        >
                                            <Link to={`${params.countries}`}>
                                                {(params.countries).toUpperCase()}
                                            </Link>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </>
            }
        </>
    )
}

export default MatchSelector