import React, { useState } from 'react';
import { ContainerFooter } from './style';

const Footer:React.FC = () => {

    const [ano, setAno] = useState();

    function Data() {
        let date = new Date();
        let year = date.getFullYear();
        setAno(year);
    }

    return (
        <ContainerFooter >
            <p>&copy;Dalves-Fitness-express-{Data}</p>
        </ContainerFooter>
    )
}

export default Footer;
