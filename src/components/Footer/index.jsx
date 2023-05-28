import { Wrapper } from "./style";
import {FacebookOutlined, GlobalOutlined,HomeTwoTone, InstagramOutlined, LinkedinOutlined, MailTwoTone, PhoneTwoTone} from '@ant-design/icons';

const Footer = () => {
    return ( 
        <Wrapper>
            <div>
                <h3>Contact</h3>
                <p> <PhoneTwoTone  style={{ fontSize: '22px',  }} size={"small"} />   +99893110111</p>
                <p> <GlobalOutlined style={{ fontSize: '22px',color:'blue'  }}  /> eco-city.uz</p>
                <p><MailTwoTone style={{ fontSize: '22px',  }} /> ecocity@gmail.com </p>
            </div>
            <div>
                <h3>Manzil</h3>
                <p> <HomeTwoTone style={{ fontSize: '18px',  }} /> Toshkent shahar Yunusobod</p>
                <p> <HomeTwoTone style={{ fontSize: '18px',  }} /> Samarqand</p>
                <p> <HomeTwoTone style={{ fontSize: '18px',  }} /> Andijon</p>
            </div>
            <div>
                <h3>Biz haqimizda</h3>
                <p>Kun uz</p>
                <p>Qalampir uz</p>
                <p>Daryo </p>
            </div>
            <div>
                <h3>Ijtimoiy tarmoqlarda</h3>
                <p> <LinkedinOutlined style={{ fontSize: '22px', color:'blue' }} /> ecocity.uz </p>
                <p><InstagramOutlined style={{ fontSize: '22px',color:'red'  }} /> ecocity_uz </p>
                <p><FacebookOutlined style={{ fontSize: '22px', color:'blue' }} />  Eco-City</p>
            </div>
        </Wrapper>
     );
}
 
export default Footer;