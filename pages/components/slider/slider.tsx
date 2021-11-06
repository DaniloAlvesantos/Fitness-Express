import React from "react";
import { ContainerFather ,Container_slider, CarroselMain, Image } from "./style";

const Slider: React.FC = () => {
    return (
        <>
            <ContainerFather>
                <Container_slider>
                    <CarroselMain><Image src="/1.png" alt="image0" /></CarroselMain>
                    <CarroselMain><Image src="/2.png" alt="image1" /></CarroselMain>
                    <CarroselMain><Image src="/3.png" alt="image2" /></CarroselMain>
                </Container_slider>
            </ContainerFather>
        </>
    );
};

export default Slider;
