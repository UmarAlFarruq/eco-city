import {
  Img,
  PopoverBody,
  Logo,
  Title,
  Wrapper,
  WrapperButton,
  WrapperLogo,
} from "./style";
import { DownOutlined } from "@ant-design/icons";
import img from "../../assets/imgs/freepik7.jpg";
import { Button } from "../Generic";
import { Dropdown, Popover } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const registered = localStorage.token;

// the code for lenguage in Button
const lenguage = [
  {
    name: "Uzbek",
    code: "uz",
    flag: "uz",
  },
  {
    name: `English`,
    code: "en",
    flag: "gb",
  },
  {
    name: "Russsia",
    code: "ru",
    flag: "ru",
  },
];
const items = lenguage.map(({ name, code, flag }) => {
  return {
    label: (
      <p>
        {<span className={`fi fi-${flag}`}></span>} &nbsp; {name}
      </p>
    ),
    key: `${code}`,
  };
});

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div >
      <Wrapper className="nocopy">
        <WrapperLogo onClick={() => navigate("/")}>
          <Img src={img}></Img>
          <Title>Eco City</Title>
        </WrapperLogo>
        <WrapperButton>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button
              height={registered ? "34px" : "44px"}
              width={registered ? "80px" : "100px"}
              type={registered ? "secondary" : "primary"}
            >
              <span
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                En <DownOutlined />
              </span>
            </Button>
          </Dropdown>

          {localStorage.token ? (
            <Popover
              style={{ padding: 0 }}
              placement="bottomRight"
              title={
                <PopoverBody fw={600} bt={true}>
                  User Name
                </PopoverBody>
              }
              content={
                <div style={{ transition: "1s" }}>
                  <PopoverBody onClick={() => navigate("profile")}>
                    <Logo.Setting /> Profile
                  </PopoverBody>
                  <PopoverBody
                    onClick={() => {
                      delete localStorage.token;
                      navigate('/')
                    }}
                  >
                    <Logo.Logout /> Log Out
                  </PopoverBody>
                </div>
              }
              trigger="click"
            >
              <div>
                <Logo.User />
              </div>
            </Popover>
          ) : (
            <Button
              type="primary"
              width={"120px"}
              onClick={() => navigate("signin")}
            >
              Log in
            </Button>
          )}
        </WrapperButton>
      </Wrapper>
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Navbar;
