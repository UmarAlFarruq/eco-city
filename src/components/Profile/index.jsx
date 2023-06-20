import {
  CardHeader,
  Card,
  Wrapper,
  WrapperCard,
  Img,
  Data,
  Action,
  Description,
  Icon,
} from "./style";
import { Button } from "../Generic";
import noImg from "../../assets/imgs/noImg.png";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useState } from "react";

const localData = localStorage.auth ? JSON.parse(localStorage.auth) : null;
let userName = localData
  ? (localData[0]?.firstName + " " + localData[0]?.lastName)
  : null;

const Sample = () => {
  const navigate = useNavigate();
  const localData = localStorage.getItem("profileData");
  const [data] = useState(localData ? JSON.parse(localData) : []);
  function onDelete(id) {
    message.success("Data deleted");
    localStorage.setItem(
      "profileData",
      JSON.stringify(data.filter((item) => item.id !== id))
    );
    window.location.reload();
  }

  return (
    <Wrapper>
      <h2 style={{padding:"15px 0"}} >{userName || "User Name" }</h2>
      <WrapperCard>
        <CardHeader>
          <h2>Sizning murojatlaringiz: {data.length} </h2>
          <Button type="primary" width="180px" onClick={() =>localStorage.auth? navigate("/add"): navigate('/signup')}>
            Xabar qo'shish
          </Button>
        </CardHeader>
        {data?.map(({ id, img, text, date }) => {
          return (
            <Card key={id}>
              <Img src={img ? img : noImg}></Img>
              <Data>
                <Description>{text}</Description>
                <p>{date}</p>
              </Data>
              <Action>
                <button
                  onClick={() => onDelete(id)}
                  style={{ background: "none", border: "none" }}
                >
                  <Icon.Delete></Icon.Delete>
                </button>
              </Action>
            </Card>
          );
        })}
      </WrapperCard>
    </Wrapper>
  );
};

export default Sample;
