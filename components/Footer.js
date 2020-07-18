import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    padding-top: 30px;
    text-align: center;

    p {
        font-size: 13px;
    }
`

function FooterComponent({ }) {
    return (
        <Footer>
            <p>Desenvolvido usando <a href="https://nextjs.org/">Next.js</a> e <a href="https://styled-components.com/">Styled-components</a></p>
            <p>Todos os direitos reservados.</p>
        </Footer>
    )
}

export default FooterComponent;