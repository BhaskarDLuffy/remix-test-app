const matchShedule = [
    {
        id: 1,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g14", "start-time": 1697445000, "end-time": 1697477400, countries: "AUS vs SL", "match-date": "oct 16" }
        ],
        "match-count": 1,
        "start-time": 1697445000,
        "end-time": 1697531400
    },
    {
        id: 2,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g15", "start-time": 1697531400, "end-time": 1697563800, countries: "SA vs NED", "match-date": "oct 17" }
        ],
        "match-count": 1,
        "start-time": 1697531400,
        "end-time": 1697617800
    },
    {
        id: 3,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g16", "start-time": 1697617800, "end-time": 1697650200, countries: "NZ vs AFG", "match-date": "oct 18" }
        ],
        "match-count": 1,
        "start-time": 1697617800,
        "end-time": 1697704200
    },
    {
        id: 4,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g17", "start-time": 1697704200, "end-time": 1697736600, countries: "IND vs BAN", "match-date": "oct 19" }
        ],
        "match-count": 1,
        "start-time": 1697704200, 
        "end-time": 1697790600
    },
    {
        id: 5,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g18", "start-time": 1697790600, "end-time": 1697823000, countries: "AUS vs PAK", "match-date": "oct 20" }
        ],
        "match-count": 1,
        "start-time": 1697790600,
        "end-time": 1697864400
    },
    {
        id: 6,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g19", "start-time": 1697864400, "end-time": 1697896800, countries: "NED vs SL", "match-date": "oct 21" },
            { "match-id": 2, key: "icc_wc_2023_g20", "start-time": 1697877000, "end-time": 1697909400, countries: "ENG vs SA", "match-date": "oct 21" }
        ],
        "match-count": 2,
        "start-time": 1697864400, 
        "end-time": 1697963400
    },
    {
        id: 7,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g21", "start-time": 1697963400, "end-time": 1697995800, countries: "IND vs NZ", "match-date": "oct 22" }
        ],
        "match-count": 1,
        "start-time": 1697963400, 
        "end-time": 1698049800
    },
    {
        id: 8,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g22", "start-time": 1698049800, "end-time": 1698082200, countries: "PAK vs AFG", "match-date": "oct 23" }
        ],
        "match-count": 1,
        "start-time": 1698049800, 
        "end-time": 1698136200
    },
    {
        id: 9,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g23", "start-time": 1698136200, "end-time": 1698168600, countries: "SA vs BAN", "match-date": "oct 24" }
        ],
        "match-count": 1,
        "start-time": 1698136200, 
        "end-time": 1698222600
    },
    {
        id: 10,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g24", "start-time": 1698222600, "end-time": 1698246000, countries: "AUS vs NED", "match-date": "oct 25" }
        ],
        "match-count": 1,
        "start-time": 1698222600, 
        "end-time": 1698309000
    },
    {
        id: 11,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g25", "start-time": 1698309000, "end-time": 1698341400, countries: "ENG vs SL", "match-date": "oct 26" }
        ],
        "match-count": 1,
        "start-time": 1698309000, 
        "end-time": 1698395400
    },
    {
        id: 12,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g26", "start-time": 1698395400, "end-time": 1698427800, countries: "PAK vs SA", "match-date": "oct 27" }
        ],
        "match-count": 1,
        "start-time": 1698395400, 
        "end-time": 1698469200
    },
    {
        id: 13,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g27", "start-time": 1698469200, "end-time": 1698501600, countries: "AUS vs NZ", "match-date": "oct 28" },
            { "match-id": 2, key: "icc_wc_2023_g28", "start-time": 1698481800, "end-time": 1698514200, countries: "NED vs BAN", "match-date": "oct 28" }
        ],
        "match-count": 2,
        "start-time": 1698469200,
        "end-time": 1698568200
    },
    {
        id: 14,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g29", "start-time": 1698568200, "end-time": 1698600600, countries: "IND vs ENG", "match-date": "oct 29" }
        ],
        "match-count": 1,
        "start-time": 1698568200,
        "end-time": 1698654600
    },
    {
        id: 15,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g30", "start-time": 1698654600, "end-time": 1698687000, countries: "AFG vs SL", "match-date": "oct 30" }
        ],
        "match-count": 1,
        "start-time": 1698654600, 
        "end-time": 1698741000
    },
    {
        id: 16,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g31", "start-time": 1698741000, "end-time": 1698773400, countries: "PAK vs BAN", "match-date": "oct 31" }
        ],
        "match-count": 1,
        "start-time": 1698741000, 
        "end-time": 1698827400
    },
    {
        id: 17,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g32", "start-time": 1698827400, "end-time": 1698859800, countries: "NZ vs SA", "match-date": "nov 1" }
        ],
        "match-count": 1,
        "start-time": 1698827400, 
        "end-time": 1698913800
    },
    {
        id: 18,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g33", "start-time": 1698913800, "end-time": 1698946200, countries: "IND vs SL", "match-date": "nov 2" }
        ],
        "match-count": 1,
        "start-time": 1698913800, 
        "end-time": 1699000200
    },
    {
        id: 19,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g34", "start-time": 1699000200, "end-time": 1699032600, countries: "NED vs AFG", "match-date": "nov 3" }
        ],
        "match-count": 1,
        "start-time": 1699000200, 
        "end-time": 1699074000
    },
    {
        id: 20,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g35", "start-time": 1699074000, "end-time": 1699106400, countries: "NZ vs PAK", "match-date": "nov 4" },
            { "match-id": 2, key: "icc_wc_2023_g36", "start-time": 1699086600, "end-time": 1699119000, countries: "ENG vs AUS", "match-date": "nov 4" }
        ],
        "match-count": 2,
        "start-time": 1699074000, 
        "end-time": 1699173000
    },
    {
        id: 21,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g37", "start-time": 1699173000, "end-time": 1699205400, countries: "IND vs SA", "match-date": "nov 5" }
        ],
        "match-count": 1,
        "start-time": 1699173000, 
        "end-time": 1699259400
    },
    {
        id: 22,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g38", "start-time": 1699259400, "end-time": 1699291800, countries: "BAN vs SL", "match-date": "nov 6" }
        ],
        "match-count": 1,
        "start-time": 1699259400, 
        "end-time": 1699345800
    },
    {
        id: 23,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g39", "start-time": 1699345800, "end-time": 1699378200, countries: "AUS vs AFG", "match-date": "nov 7" }
        ],
        "match-count": 1,
        "start-time": 1699345800, 
        "end-time": 1699432200
    },
    {
        id: 24,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g40", "start-time": 1699432200, "end-time": 1699464600, countries: "ENG vs NED", "match-date": "nov 8" }
        ],
        "match-count": 1,
        "start-time": 1699432200, 
        "end-time": 1699518600
    },
    {
        id: 25,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g41", "start-time": 1699518600, "end-time": 1699551000, countries: "NZ vs SL", "match-date": "nov 9" }
        ],
        "match-count": 1,
        "start-time": 1699518600, 
        "end-time": 1699605000
    },
    {
        id: 26,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g42", "start-time": 1699605000, "end-time": 1699637400, countries: "SA vs AFG", "match-date": "nov 10" }
        ],
        "match-count": 1,
        "start-time": 1699605000, 
        "end-time": 1699678800
    },
    {
        id: 27,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g43", "start-time": 1699678800, "end-time": 1699711200, countries: "AUS vs BAN", "match-date": "nov 11" },
            { "match-id": 2, key: "icc_wc_2023_g44", "start-time": 1699691400, "end-time": 1699723800, countries: "ENG vs PAK", "match-date": "nov 11" }
        ],
        "match-count": 2,
        "start-time": 1699678800, 
        "end-time": 1699777800
    },
    {
        id: 28,
        match: [
            { "match-id": 1, key: "icc_wc_2023_g45", "start-time": 1699777800, "end-time": 1699810200, countries: "IND vs NED", "match-date": "nov 12" },
        ],
        "match-count": 1,
        "start-time": 1699777800, 
        "end-time": 1699810200
    },
]

const IccMatchKeys = [
    "icc_wc_2023_g1",
    "icc_wc_2023_g2",
    "icc_wc_2023_g3",
    "icc_wc_2023_g4",
    "icc_wc_2023_g5",
    "icc_wc_2023_g6",
    "icc_wc_2023_g7",
    "icc_wc_2023_g8",
    "icc_wc_2023_g9",
    "icc_wc_2023_g10",
    "icc_wc_2023_g11",
    "icc_wc_2023_g12",
    "icc_wc_2023_g13",
    "icc_wc_2023_g14",
    "icc_wc_2023_g15",
    "icc_wc_2023_g16",
    "icc_wc_2023_g17",
    "icc_wc_2023_g18",
    "icc_wc_2023_g19",
    "icc_wc_2023_g20",
    "icc_wc_2023_g21",
    "icc_wc_2023_g22",
    "icc_wc_2023_g23",
    "icc_wc_2023_g24",
    "icc_wc_2023_g25",
    "icc_wc_2023_g26",
    "icc_wc_2023_g27",
    "icc_wc_2023_g28",
    "icc_wc_2023_g29",
    "icc_wc_2023_g30",
    "icc_wc_2023_g31",
    "icc_wc_2023_g32",
    "icc_wc_2023_g33",
    "icc_wc_2023_g34",
    "icc_wc_2023_g35",
    "icc_wc_2023_g36",
    "icc_wc_2023_g37",
    "icc_wc_2023_g38",
    "icc_wc_2023_g39",
    "icc_wc_2023_g40",
    "icc_wc_2023_g41",
    "icc_wc_2023_g42",
    "icc_wc_2023_g43",
    "icc_wc_2023_g44",
    "icc_wc_2023_g45",
]

export{
    matchShedule,
    IccMatchKeys
}