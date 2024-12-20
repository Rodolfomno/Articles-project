import DataTable from "react-data-table-component"
import { TableContainer } from "./style"
import { useNavigate } from "react-router-dom"

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

    const navigate = useNavigate()

    function onClick (id: number) {
         navigate(`/${id}`)
    }
    
    const columns = [
        {
            name: <Title title="Title" />,
            cell: (row: { title: string, id: number }) => <div
            style={{ cursor: 'pointer' }}
            onClick={() => onClick(row.id)}>{ row.title }</div>,
        },
        {
            name: <Title title="Resume" />,
            selector: (row: { resume: string }) => row.resume,
            sortable: true,
        }

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
