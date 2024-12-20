import DataTable from "react-data-table-component"
import { TableContainer } from "./style"

function Title ({ title }: { title: string }) {
    return (
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{ title }</p>
    )
}

export type DataType = {
    title: string,
    id: number,
    resume: string,
    slug: string,
    article: string,
  }



export function Table ({ data }: { data: DataType[] }) {
    const columns = [
        {
            name: <Title title="Title" />,
            selector: (row: { title: string }) => row.title,
        },
        {
            name: <Title title="Resume" />,
            selector: (row: { resume: string }) => row.resume,
            sortable: true,
        },

    ]

    return (
        <TableContainer>
            <DataTable
            columns={columns}
            data={data} 
            />   
        </TableContainer>
    )
}
