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
        <Card>
          <Img src={noImg}></Img>
          <Data>
            <Description>
              Lorem ipsum dolor sit amet Quidem ducimus ab amet!
            </Description>
            <p>15.05.2023</p>
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
        <Card>
          <Img src={noImg}></Img>
          <Data>
            <Description>
              Lorem ipsum dolor sit amet Quidem ducimus ab amet!
            </Description>
            <p>15.05.2023</p>
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
      </WrapperCard>
    </Wrapper>
  );
};

export default Sample;
