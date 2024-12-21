import { useState, useEffect } from "react";
import { DataType, Table } from "../components/dataTable";
import { HomeContainer, TitleContainer } from "./style";


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

export const mockData = [
  {
    id: 1,
    created_at: "2024-12-20T19:59:32.000000Z",
    updated_at: "2024-12-20T19:59:32.000000Z",
    title: "Iste saepe eaque quo deleniti adipisci eos.",
    slug: "iste-saepe-eaque-quo-deleniti-adipisci-eos",
    resume: "Nulla sunt ut enim est rerum tenetur facilis.",
    article: "Magni labore laudantium unde tempora ipsam eum. Sapiente reprehenderit exercitationem hic. Sed quam qui totam delectus tempora. Tempore blanditiis natus eos dignissimos."
  },
  {
    id: 2,
    created_at: "2024-12-20T19:59:32.000000Z",
    updated_at: "2024-12-20T19:59:32.000000Z",
    title: "Iste saepe eaque quo deleniti adipisci eos.",
    slug: "iste-saepe-eaque-quo-deleniti-adipisci-eos",
    resume: "Nulla sunt ut enim est rerum tenetur facilis.",
    article: "Magni labore laudantium unde tempora ipsam eum. Sapiente reprehenderit exercitationem hic. Sed quam qui totam delectus tempora. Tempore blanditiis natus eos dignissimos."
  },
  {
    id: 3,
    created_at: "2024-12-20T19:59:32.000000Z",
    updated_at: "2024-12-20T19:59:32.000000Z",
    title: "Iste saepe eaque quo deleniti adipisci eos.",
    slug: "iste-saepe-eaque-quo-deleniti-adipisci-eos",
    resume: "Nulla sunt ut enim est rerum tenetur facilis.",
    article: "Magni labore laudantium unde tempora ipsam eum. Sapiente reprehenderit exercitationem hic. Sed quam qui totam delectus tempora. Tempore blanditiis natus eos dignissimos."
  },
  {
    id: 4,
    created_at: "2024-12-20T19:59:32.000000Z",
    updated_at: "2024-12-20T19:59:32.000000Z",
    title: "Iste saepe eaque quo deleniti adipisci eos.",
    slug: "iste-saepe-eaque-quo-deleniti-adipisci-eos",
    resume: "Nulla sunt ut enim est rerum tenetur facilis.",
    article: "Magni labore laudantium unde tempora ipsam eum. Sapiente reprehenderit exercitationem hic. Sed quam qui totam delectus tempora. Tempore blanditiis natus eos dignissimos."
  },
  {
    id: 5,
    created_at: "2024-12-20T19:59:32.000000Z",
    updated_at: "2024-12-20T19:59:32.000000Z",
    title: "Iste saepe eaque quo deleniti adipisci eos.",
    slug: "iste-saepe-eaque-quo-deleniti-adipisci-eos",
    resume: "Nulla sunt ut enim est rerum tenetur facilis.",
    article: "Magni labore laudantium unde tempora ipsam eum. Sapiente reprehenderit exercitationem hic. Sed quam qui totam delectus tempora. Tempore blanditiis natus eos dignissimos."
  },
]