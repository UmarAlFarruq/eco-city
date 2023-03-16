import styled from "styled-components";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as logout } from "../../assets/icons/logout1.svg";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 2px solid whitesmoke;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    padding: 0 7px;
    height: 44px;
  }
  @media ${device.tablet} {
    height: 54px;
    padding: 0 130px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  cursor: pointer;
  @media ${device.mobile} {
    gap: 8px;
    width: 40%;
  }
  @media ${device.tablet} {
    gap: 12px;
    width: 30%;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  height: 100%;
  width: 30%;
  @media ${device.mobile} {
    gap: 12px;
  }
  @media ${device.tablet} {
    gap: 25px;
  }
`;

export const Img = styled.img`
  @media ${device.mobile} {
    width: 30px;
  }
  @media ${device.tablet} {
    width: 36px;
  }
`;

export const Title = styled.div`
  font-family: Fira Code;
  color: #46a358;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;
// =============================================
export const Logo = styled.div``;

Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 24px;
  font-weight: 900px;
`;
Logo.User = styled(user)`
  cursor: pointer;
  transition: 600ms;
  width: 25px;
  height: 25px;
  :hover {
    scale: 1.1;
  }
`;
Logo.Setting = styled(setting)`
  width: 18px;
  height: 18px;
`;
Logo.Logout = styled(logout)`
  width: 18px;
  height: 18px;
`;

export const PopoverBody = styled.div`
  display: flex;
  transition: 0.4s;
  align-items: center;
  gap: 8px;
  color: #0d263b;
  padding: 3px;
  font-size: 14px;
  line-height: 24px;
  font-style: normal;
  border-top: ${({ bt }) => !bt && "1px solid whitesmoke"};
  font-weight: ${({ fw }) => fw || 400};
  :hover {
    cursor: pointer;
    color: #46a358;
    gap: 10px;
    border-bottom: ${({ bt }) => !bt && "1px solid #46a358"};
  }
  &:hover ${Logo.Setting} {
    & path {
      fill: #46a358;
    }
  }
  &:hover ${Logo.Logout} {
    & path {
      fill: #46a358;
    }
  }
`;
