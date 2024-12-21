import { useState, useEffect } from "react";
import { DataType, Table } from "../components/dataTable";
import { HomeContainer, TitleContainer } from "./style";
import { mockData } from "../helpers/helper";


export function HomePage() {
    const [data, setData] = useState<DataType[]>([])

    function getData(){
        fetch('http://localhost:8000/articles')
          .then(response => response.json())
          .then((json) => {
            setData(json);
          })
          .catch(error => console.error(error));
      }

      useEffect(() => {
        getData();
      }, [])


    return (
    <HomeContainer>
        <TitleContainer>
            Science Articles
        </TitleContainer>
        <Table data={data.length ? data : mockData} />
    </HomeContainer>
    );
}
export { mockData };

