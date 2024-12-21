import { useEffect, useState } from "react";
import { DataType } from "../components/dataTable";
import { mockData } from "./HomePage";
import { BackToHomeButton, HomeContainer, InfoCard, ItemContent, ItemRow, ItemTitle, TitleContainer } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

export function ArticleInfoPage() {

    const navigate = useNavigate()
    const path = useLocation().pathname
    console.log(path)
    const [data, setData] = useState<DataType>()

    const articleId = path.replace('/', '')

    function getData(){
        fetch(`http://localhost:8000/articles/${Number(articleId)}`)
          .then(response => response.json())
          .then((json) => {
            setData(json);
          })
          .catch(error => console.error(error));
      }

      useEffect(() => {
        getData();
      }, [])


    const dataInfo = data ? data : mockData[0];

    return (
    <HomeContainer>
        <TitleContainer>
            Article
        </TitleContainer>
        <InfoCard>
            <ItemRow>
                <ItemTitle>
                    Title
                </ItemTitle>
                <ItemContent>
                    { dataInfo.title }
                </ItemContent>
            </ItemRow>
            <ItemRow>
                <ItemTitle>
                    Slug title
                </ItemTitle>
                <ItemContent>
                    { dataInfo.slug }
                </ItemContent>
            </ItemRow>
            <ItemRow>
                <ItemTitle>
                    Resume
                </ItemTitle>
                <ItemContent>
                    { dataInfo.resume }
                </ItemContent>
            </ItemRow>
            <ItemRow>
                <ItemTitle>
                    Complete article
                </ItemTitle>
                <ItemContent>
                    { dataInfo.article }
                </ItemContent>
            </ItemRow>
        </InfoCard>
        <BackToHomeButton onClick={() => navigate('/')}>
            Back To Home
        </BackToHomeButton>
    </HomeContainer>
    );
}