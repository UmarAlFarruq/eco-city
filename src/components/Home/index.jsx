import {
  Card,
  CardImg,
  DateCard,
  Description,
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

const Home = () => {

  const navigate = useNavigate()

  return (
    <Wrapper>
      <Header className="nocopy">
        <Img src={img}></Img>
        <div>
          <H2>Shaxar obod bo'lishda o'z hissangizni qo'shing</H2>
          <P>
            Shaxringizdagi ko'zga ko'ringan muammolarni rasmga oling,
            locatsionni belgilab bizga yuboring
          </P>
          <Button onClick={()=>navigate('/add') }  type="primary">
            Rasimga oling va jo'nating
          </Button>
        </div>
      </Header>
      <Main>
        <Card>
          <CardImg src={imgcard3}></CardImg>
          <DateCard>
            <FieldTimeOutlined style={{ fontSize: "16px", color: "#8F8F8F" }} />
            16:19 / 27.03.2023
          </DateCard>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sint
            dicta veniam cupiditate aspernatur earum inventore dolore accusamus
            vitae cumque!
          </Description>
        </Card>
        <Card>
          <CardImg src={imgcard2}></CardImg>
          <DateCard>
            <FieldTimeOutlined style={{ fontSize: "16px", color: "#8F8F8F" }} />
            16:19 / 27.03.2023
          </DateCard>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maiores dignissimos dolor praesentium error est aspernatur rerum
            officia, necessitatibus, nostrum voluptates vel. Amet explicabo
            asperiores dolorem odio
          </Description>
        </Card>
        <Card>
          <CardImg src={imgcard1}></CardImg>
          <DateCard>
            <FieldTimeOutlined style={{ fontSize: "16px", color: "#8F8F8F" }} />
            16:19 / 27.03.2023
          </DateCard>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            perferendis voluptatum nihil explicabo reiciendis quod voluptates
            excepturi.
          </Description>
        </Card>
        <Card>
          <CardImg src={imgcard}></CardImg>
          <DateCard>
            <FieldTimeOutlined style={{ fontSize: "16px", color: "#8F8F8F" }} />
            16:19 / 27.03.2023
          </DateCard>
          <Description>
            Lorem ipsum, consectetur, at fugiat nemo neque facilis.
          </Description>
        </Card>
      </Main>
    </Wrapper>
  );
};

export default Home;
