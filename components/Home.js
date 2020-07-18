import React from 'react';
//import styled from 'styled-components';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer'
 

function Home({ phones }) {
    return (
        <main>
            <HeaderComponent />
            <ul>
                {phones.map((phone) => {
                    return (
                        <li key={phone.id}>
                            <img src={ phone.imagem } alt={`Este é o iphone: ${phone.modelo}` } />
                            <div>
                                <p className="name">{ phone.modelo }</p>
                                <p>{ phone.preco }</p>
                            </div>
                            <span>{ phone.desconto }</span>
                        </li>
                    )
                })}
            </ul>
            <FooterComponent />

            <style jsx>{`
                ul {
                    list-style: none;
                    margin: 0 auto;  
                    padding: 0;
                    display: grid; 
                    grid-gap: 30px;
                    width: 1200px;
                    grid-template-columns: repeat(3, 1fr); 
                }

                li {
                    text-align: center;
                    position: relative; 
                    padding: 15px 0;
                    border: 1px solid #CCC;
                    border-radius: 15px;
                }

                div {
                    height: 65px;
                }

                div p {
                    font-family: "Montserrat",sans-serif;
                }
                
                div .name {
                    font-size: 18px;
                    font-weight: 300;
                }

                img {
                    width: 100%;
                    height: 320px;
                }

                span {
                    position: absolute;
                    top: 20px;
                    left: 10px;
                    background-color: #FF0000;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: normal;
                    font-family: "Montserrat",sans-serif;
                }
            `}</style>
        </main>
    )
}

export default Home;