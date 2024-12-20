import { useState, useEffect } from "react";
import { DataType, Table } from "../components/dataTable";
import { HomeContainer, TitleContainer } from "./style";

export function HomePage() {
    const [data, setData] = useState<DataType[]>([])

    function getData(){
        fetch('http://127.0.0.1:8000/articles')
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
            TIITITITITITI
        </TitleContainer>
        <Table data={data} />
    </HomeContainer>
    );
}