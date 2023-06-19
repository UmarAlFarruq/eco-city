import {
  Card,
  CardImg,
  DateCard,
  Description,
  Div,
  H2,
  Header,
  Img,
  Main,
  P,
  Wrapper,
} from "./style";
import { FieldTimeOutlined } from "@ant-design/icons";
import img from "../../assets/imgs/freepik7.jpg";
import imgcard from "../../assets/imgs/photo_phone.jpg";
import imgcard1 from "../../assets/imgs/photo_phone2.jpg";
import imgcard2 from "../../assets/imgs/photo_phone1.jpg";
import imgcard3 from "../../assets/imgs/photo_phone3.jpg";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import ApexChart from "../Chart";

export const data = [
  { id: 1, img: imgcard,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
  { id: 1, img: imgcard1,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
  { id: 1, img: imgcard2,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
  { id: 1, img: imgcard3,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
  { id: 1, img: imgcard,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
  { id: 1, img: imgcard,location:"Toshkent Yunusobod ",  date: "16:19 / 27.03.2023", text: "Lorem ipsum," },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header className="nocopy">
        <Img src={img}></Img>
        <Div>
          <H2>Shaxar obod bo'lishda o'z hissangizni qo'shing</H2>
          <P>
            Shaxringizdagi ko'zga ko'ringan muammolarni rasmga oling,
            locatsionni belgilab bizga yuboring
          </P>
          <Button onClick={() => navigate("/add")} type="primary">
            Rasimga oling va jo'nating
          </Button>
        </Div>
      </Header>
      <Main>
        {data.map(({ id, text, date, img }, index) => {
          return(
          <Card key={index} onClick={() => navigate(`${id}`)}>
            <CardImg src={img}></CardImg>
            <DateCard>
              <FieldTimeOutlined
                style={{ fontSize: "16px", color: "#8F8F8F" }}
              />
              {date}
            </DateCard>
            <Description>{text}</Description>
          </Card>
          )
        })}
      </Main>
      <ApexChart/>
    </Wrapper>
  );
};

export default Home;
