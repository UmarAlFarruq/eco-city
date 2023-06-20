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
import daraxt from "../../assets/imgs/daraxt.jpg";
import otin from "../../assets/imgs/otin.jpg";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import ApexChart from "../Chart";

export const data = [
  { id: 1, img: imgcard,location:"Toshkent Yunusobod ",  date: "16:19 / 17.02.2023", text: "Yunusobod tumani 15 dahada suv quviri yorilgan va juda ko'p miqdorda suv isrof bo'lmoqda zudlik bilan chora ko'rish kerak. Kelajak avlod uchun" },
  { id: 1, img: imgcard1,location:"Toshkent Yunusobod ",  date: "07:39 / 08.05.2023", text: "Shaxidlar xotira maydoni oldida bir daraxt qurib qolibdi va atrof muhit chiroyini buzib turibdi, bu daraxtni olib o'rniga yosh va chiroyli daraxt ekish kerak" },
  { id: 1, img: imgcard2,location:"Toshkent Yunusobod ",  date: "19:15 / 18.04.2023", text: "G'ofur G'ulom bog'ida axlatlar to'planib ketgan va o'tkan ketgan odamlarga manzarasi va badbo'y hidi bilan zarar bermoqda chor ko'rishingizni so'rab qolamiz. Obod shaxar uchun" },
  { id: 1, img: imgcard3,location:"Toshkent Yunusobod ",  date: "20:19 / 20.06.2023", text: "Muqimiy ko'chasida archa daraxti qulab tushgan va bu daraktga vaxtda qarab parvarish qilinmasa so'lib qolish mumkin.  Kelajak avlod uchun obod shahar qolsin" },
  { id: 1, img: daraxt,location:"Toshkent Yunusobod ",  date: "09:33 / 27.05.2023", text: "Chilonzor tumani 5 dahada daraxtning katta shohi singa va qurib qolgan shamol natijasida odamlarga jaroxat yetkazishi mumkin etiborli bo'lamiz, ishingizni yaxshi bajarishingizga ishonamiz" },
  { id: 1, img: otin,location:"Toshkent Yunusobod ",  date: "12:11 / 07.03.2023", text: "Qurib qolgan daraxt shoxlari atrof mukitga zarar bermoqda va shahar obodonligiga putur yetkazmoqda oldini olasizlar degan umiddaman" },
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
          <Button onClick={() =>localStorage.auth? navigate("/add"): navigate('/signup')} type="primary">
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
