import { Box } from "@mui/material";

let i = 0;

export const columnsStructure = [
    {
        accessorFn: (row) => {
            i++;
            const num = i-10;
            return `${num}`;
        },
        header: '#',
    },
    {
        accessorKey: 'client_name',
        header: 'Name',
    },
    {
        accessorKey: 'project_link',
        header: 'Project Link',
    },
    {
        accessorKey: 'id',
        header: 'Project Id',
    },
    {
        accessorFn: (row) => `${row.bid_value}$ - ${row.bid_value2}$`,
        header: 'Project Budget',
    },
    {
        accessorFn: (row) => `${row.actual_value}$`,
        header: 'Bid Value',
    },
    {
        accessorKey: 'deadline',
        header: 'Created',
    },
    {
        accessorFn: (row) => `name isn't founded in api`,
        header: 'Created By',
    },
    {
        accessorFn: (row) => `${row.bidding_minutes} mins ${row.bidding_seconds} seconds`,
        header: 'Bidding Delay Time',
    },
    {
        Cell: ({ cell }) => (
            <Box
                component="span"
            >
                {
                    cell.row.original.deal_status == '1' ?
                        <button className="bg-green-500 px-2 py-1">Connected to Deal</button> :
                        <button className="bg-red-600 px-2 py-1 text-white font-bold">Not Connected to Deal</button>
                }
            </Box>
        ),
        header: 'Status',
    },
]