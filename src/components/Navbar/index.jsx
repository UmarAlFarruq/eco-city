import {
  Img,
  PopoverBody,
  Logo,
  Title,
  Wrapper,
  WrapperButton,
  WrapperLogo,
} from "./style";
import img from "../../assets/imgs/freepik7.jpg";
import { Button } from "../Generic";
import { Popover } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const localData = localStorage.auth ? JSON.parse(localStorage.auth) : null;
  let userName = localData
    ? (localData[0]?.firstName + " " + localData[0]?.lastName)
    : null;
  return (
    <div>
      <Wrapper className="nocopy">
        <WrapperLogo onClick={() => navigate("/")}>
          <Img src={img}></Img>
          <Title>Eco City</Title>
        </WrapperLogo>
        <WrapperButton>
          {localStorage.auth ? (
            <Popover
              style={{ padding: 0 }}
              placement="bottomRight"
              title={
                <PopoverBody fw={600} bt={true}>
                  {userName || 'User Name'}
                </PopoverBody>
              }
              content={
                <div style={{ transition: "1s" }}>
                  <PopoverBody onClick={() => navigate("profile")}>
                    <Logo.Setting /> Profile
                  </PopoverBody>
                  <PopoverBody
                    onClick={() => {
                      delete localStorage.auth;
                      delete localStorage.profileData;
                      navigate("/");
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
