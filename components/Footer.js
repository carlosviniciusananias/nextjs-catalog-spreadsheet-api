import React from 'react';
//import styled from 'styled-components';

function FooterComponent({ }) {
    return (
        <footer>
            <p>Desenvolvido usando <a href="https://nextjs.org/">Next.js</a> e <a href="https://styled-components.com/">Styled-components</a></p>
            <p>Todos os direitos reservados.</p>

            <style jsx>{`
                footer {
                    padding-top: 30px;
                    text-align: center;
                }
                
                footer p {
                    font-size: 13px; 
                }
            `}</style>
        </footer>
    )
}

export default FooterComponent;