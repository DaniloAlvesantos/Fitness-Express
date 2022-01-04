import styled from "styled-components";
import React from "react";

export default function style() {
    return (
        <></>
    )
}

export const ContainerFather = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Container_slider = styled.div`
    width: 50%;
    display: flex;
    overflow-x: auto;
    margin: 1rem;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        width:10px;
    }
    ::-webkit-scrollbar-track {
        background: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color:#8eedf7;
        border-radius: 20px;
        border: 2px solid #cdf7f6;
    }
    @media(max-width:800px){
        margin:0;
        width:65%
    }
    @media (max-width: 760px) {
        ::-webkit-scrollbar {
            width:0;
        }
        ::-webkit-scrollbar-thumb {
            display:none;
        }
    }
    @media (max-width:400px){
        margin:-1rem;
    }
`;
export const Image = styled.img`
    width:30rem;
    height:15rem;
    margin-left:0.4rem;
    border-radius: 5px;
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.41);
    object-fit: cover;

    @media(max-width:900px){
        width:28rem;
    }
    @media(max-width:870px){
        width:26rem;
        height:13rem;
    }
    @media(max-width:780px){
        width:25rem;
        height:12rem;
    }
    @media(max-width:600px){
        width:24rem;
        height:11rem;
    }
    @media(max-width:560px){
        width:23rem;
        height:12rem;
    }
    @media(max-width:520px){
        width:21rem;
    }
    @media (max-width:460px){
        width:20rem;
        height:11rem;
    }
    @media (max-width:420px){
        width:19rem;
    }
    @media (max-width:400px){
        width:18rem;
        height:10rem;
    }
    @media(max-width:350px){
        width:17rem;
        height:9rem;
    }
`;
export const CarroselMain = styled.div`
    width:35rem;
    height:16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    @media(max-width:870px){
        margin-right:3rem;
    }
    @media (max-width:420px){
        margin-right:2rem;
    }
`;
