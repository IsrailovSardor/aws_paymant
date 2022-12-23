import styled, { keyframes } from 'styled-components'

export const WrapperLogin = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    padding: 0 25px;
`
const breatheAnimation = keyframes`
    0% {box-shadow: none;}
    100% { box-shadow: rgba(207, 103, 228, 1) -30px 0px 50px 10px, rgba(127, 0, 255, 1) 0px 0px 50px 10px, rgba(103, 160, 228, 1) 30px 0px 50px 10px;}
`

export const BlockForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    width: 400px;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 4px;
    box-shadow: rgba(207, 103, 228, 1) -30px 0px 50px 10px, rgba(127, 0, 255, 1) 0px 0px 50px 10px, rgba(103, 160, 228, 1) 30px 0px 50px 10px;
    animation-name: ${breatheAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: 1;
`
export const BlockInput = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 100%;
        height: 30px;
        outline: none;
        border: 2px solid rgb(125, 125, 125);
        border-radius: 4px;
        padding: 0 10px;

        &::placeholder{ 
            color: rgb(125, 125, 125);
            font-size: 14px;
        }
    }

    span {
        color: red;
        font-size: 14px;
    }
`
export const Button = styled.button`
    width: 100%;
    height: 30px;
    color: rgb(125, 125, 125);
    font-size: 14px;
    border: 2px solid rgb(125, 125, 125);
    border-radius: 4px;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }
`
export const BlockItem = styled.div`
    display: flex;
    align-items: flex-end;
    font-size: 30px;
    font-weight: 600;
    gap: 10px;
    color: rgb(125, 125, 125);
    margin-bottom: 10px;
`