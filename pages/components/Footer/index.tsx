import Link from "next/link";
import React from "react";
import { ContainerFooter, List, NavList, BoxMenu, H2, Box, ButtonToTop, Logo, BoxContent } from "./style";

const Footer: React.FC = () => {
    return (
        <>
            <ContainerFooter>
                <BoxMenu>
                    <List>
                        <H2 primary="150%">MENU</H2>
                        <NavList><a>HOME</a></NavList>
                        <NavList><a>IMC</a></NavList>
                        <NavList><a>Receitas</a></NavList>
                        <NavList><a>Exercícios</a></NavList>
                    </List>
                    <List>
                        <H2 primary="245%">CONTATO</H2>
                        <NavList><a>Gmail</a></NavList>
                        <NavList><a>Instagram</a></NavList>
                        <NavList><br/></NavList>
                        <NavList><br/></NavList>
                    </List>
                <Box>
                    <BoxContent>
                        <ButtonToTop><img src="/arrow.svg" /></ButtonToTop>
                        <Logo src="/logo.png" />
                    </BoxContent>
                </Box>
                </BoxMenu>
            </ContainerFooter>
        </>
    );
};

export default Footer;
