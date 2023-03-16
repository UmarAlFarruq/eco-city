import styled from "styled-components";
import { device } from "../../../utils/responsive";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #0D263B",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#46A358",
        color: "#FFFFFF",
        border: "1px solid #46A358",
      };
    default:
      return {
        border: "1px solid #46A358",
        color: "#46A358",
      };
  }
};

const Container = styled.button`
  display: flex;
  width: fit-content;
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  background: none;
  padding: ${({ pd }) => `${pd}px` || 0};
  min-width:  80px;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  border-radius: 2px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  @media ${device.mobile} {
    height:30px;
    font-size:14px;
    width: ${({ width }) => width || "100px"};
  }
  @media ${device.tablet} {
    font-size: 16px;
    height:44px;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "44px"};
  }
`;
export { Container };
