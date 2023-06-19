import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    width: 1220px;
    min-height:80vh ;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
`
export const Img = styled.img`
        width: 920px;
        height: 500px;
        object-fit: cover;
        mask-repeat: no-repeat;
`

export const Date = styled.div`
        width: 920px;
        display: flex;
        justify-content: space-between;
        height: 24px;
        font-size: 14px;
        align-items: center;
        box-sizing: border-box;
        /* border-bottom: ${({line})=>line && '1px solid black'}; */
        .btn{
            padding: 10px 15px;
            background-color: rgb(70, 163, 88);
            color: white;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            box-sizing: border-box;
        }
`
export const P = styled.div`
    width: 920px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

`