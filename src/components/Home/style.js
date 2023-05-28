import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 120px;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 180px;
  object-fit: cover;
  margin-left: 50px;
`;

export const Header = styled.div`
  border: 1px solid whitesmoke;
  width: 100%;
  display: flex;
  padding: 12px;
  margin-top: 18px;
  box-sizing: border-box;
  gap: 100px;
  border-radius: 4px;
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
export const P = styled.h2`
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: 400;
  color: #313130;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 3%;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 45%;
  object-fit: cover;
  transition: 0.5s;
`;
export const Card = styled.div`
  transition: 0.5s;
  width: 26%;
  min-height: 250px;
  height: 350px;
  border: 2px solid whitesmoke;
  border-radius: 4px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  &:hover ${CardImg} {
    opacity: 0.9;
  }
  :hover {
    color: rgb(0, 97, 223);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const DateCard = styled.div`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  display: flex;
  align-items:center ;
  font-size: 14px ;
  gap: 5px;
  padding-left:5px ;
  color: #8F8F8F;
  font-weight:300;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  box-sizing:border-box;
  font-size:16px ;
  font-weight:600;
  line-height:22px;
  height: 45%;
  padding-left:5px;
  overflow: hidden;
  /* font-family:Fida Code; */
`
