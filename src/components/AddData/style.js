import styled from 'styled-components';
import {ReactComponent as send} from '../../assets/icons/send-svgrepo-com.svg'


const Container = styled.div`
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    padding: 0 130px;
    width: 100%;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Title = styled.div``
Title.Title = styled.div`
    font-family: var(--headerFont);
    font-style: normal;
    font-weight: 600;
    font-size: ${({ size }) => `${size || 18}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};

    line-height: ${({ lineHeight }) => `${lineHeight}px` || '28px'};
    letter-spacing: -0.02em;
    color: #0D263B;
`
const WrapperCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 34px 40px;
    width: 920px;
    
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const Img = styled.img`
    width: 113px;
    height: 113px;
    background: #C4C4C4;
    border-radius: 3px;
    margin-right: 20px;
`
Title.D = styled.div`
    font-family: var(--headerFond);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-top: ${({ mt }) => `${mt || 14}px`};
    margin-bottom: ${({ mb }) => `${mb || 14}px`};
`
export const UploadButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
`

const Input = styled.input`
    width: 100%;
    height: 44px;
    background: none;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    padding: 0px 15px;
    :active{
        list-style: none;
    }
    :focus{
        outline: none;
    }
`
const TextArea = styled.textarea`
    width: 100%;
    height: 104px;
    background: none;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    padding: 0px 15px;
    :active{
        list-style: none;
    }
    :focus{
        outline: none;
    }
`

export const Icon = styled(send)`
    width: 22px;
    height: 22px;
`

export { Container,TextArea, Title, WrapperCard, Img,Input };

