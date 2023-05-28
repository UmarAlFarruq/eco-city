import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as delet } from "../../assets/icons/delete.svg";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  min-width: 1440px;
  flex-direction: column;
  padding: 0 130px;
  box-sizing: border-box;
  padding-bottom: 20px;
  font-family: sans-serif;
`;
export const WrapperCard = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 34px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: sans-serif;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e9ec;
  width: 100%;
  height: 170px;
  gap: 20px;
`;

export const Img = styled.img`
  height: 170px;
  width: 170px;
  object-fit: cover;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #cbcbcb;
  line-height: 22px;
  width: 840px;
`;
export const Description = styled.div`
  color: black;
  max-height: 195px;
  overflow: hidden;
  margin-top: 5px;
`;
export const Saple = styled.div``;

export const Action = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100px;
`;
export const Icon = styled.div``;
Icon.Edit = styled(edit)`
  width: 24px;
  height: 20px;
  cursor: pointer;
`;
Icon.Delete = styled(delet)`
  width: 24px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.97;
    & path {
      fill: red;
    }
  }
`;
