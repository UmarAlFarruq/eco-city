import { Wrapper, Img, Container, Date, P } from "./style";
import img from "../../assets/imgs/photo_phone1.jpg";

const Details = () => {
  return (
    <Wrapper>
      <Container>
      <div style={{width:"920px"}} >
        <Img src={img} alt="img" />
        <Date>
            <p>Toshkent</p>
            <p>16:32 12/09/2023</p>
        </Date>
        </div>
        <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis aliquid eaque dignissimos exercitationem reiciendis molestiae, voluptatum blanditiis iusto alias quae sed quibusdam ratione, ea quod doloremque iure accusantium mollitia?
        </P>
        <Date line={true} >
            <h3>Holati:</h3>
            <hr />
            <button className="btn btn-dengger" >Ko'rib chiqilmoqda</button>
        </Date>
      </Container>
    </Wrapper>
  );
};

export default Details;
