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
import { Popconfirm, message } from "antd";

const confirm = () => {
  message.success("Clicked on Yes.");
};

const Sample = () => {
  const navigate = useNavigate();
  const localData = localStorage.getItem("profileData");
  let data = localData ? JSON.parse(localData) : [];
  return (
    <Wrapper>
      <h2>User Name</h2>
      <WrapperCard>
        <CardHeader>
          <h2>Sizning murojatlaringiz: 2</h2>
          <Button type="primary" width="180px" onClick={() => navigate("/add")}>
            new Data
          </Button>
        </CardHeader>
        {data?.map(({ id, img, text, date, location }) => {
          return (
            <Card key={id}>
              <Img src={img ? img : noImg}></Img>
              <Data>
                <Description>
                 {text}
                </Description>
                <p>{date}</p>
              </Data>
              <Action>
                <Icon.Edit></Icon.Edit>
                <Popconfirm
                  placement="leftBottom"
                  title="Delete ?"
                  description={"rostan o'chirasizmi ?"}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <button style={{ background: "none", border: "none" }}>
                    <Icon.Delete></Icon.Delete>
                  </button>
                </Popconfirm>
              </Action>
            </Card>
          );
        })}
      </WrapperCard>
    </Wrapper>
  );
};

export default Sample;
