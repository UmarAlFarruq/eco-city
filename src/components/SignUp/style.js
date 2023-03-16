import styled from "styled-components";
import { device } from "../../utils/responsive";
import { Input } from "antd";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 7px;
`;

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  @media ${device.mobile} {
    width: 100%;
    height: 536px;
    padding: 24px 16px;
  }
  @media ${device.tablet} {
    width: 580px;
    height: 536px;
    padding: 24px 30px;
  }
`;

export const Title = styled.div`
  font-size: ${({ size }) => size || "16px"};
  margin-top: ${({ mt }) => mt || "0px"};
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: ${({ color }) => color || "#0d263b"};
`;

export const Inputt = styled(Input)`
  border: none;
  border-bottom: 1px solid #e6e9ec;
  box-shadow: 0px 3px 10px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 5px;
  font-size: 16px;
  margin-top: ${({ mt }) => mt || "0px"};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0.1px #ffffff;
  }
`;

export const WrapperForgot = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  justify-content: space-between;
  align-items: center;
  color: #696969;
  width: 100%;
  margin-top: 16px;
`;
export const Forgot = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 16px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${({ color }) => color || "#0d263b"};
  border-bottom: ${({ color }) =>`1px solid ${color}`};
`;
