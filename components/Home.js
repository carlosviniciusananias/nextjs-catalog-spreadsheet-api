import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer'

const Content = styled.ul`
    list-style: none;
    margin: 0 auto; 
    padding: 0;
    display: grid; 
    grid-gap: 30px;
    width: 1200px;
    grid-template-columns: repeat(3, 1fr);
`

const ContentLi = styled.li`
    text-align: center;
    position: relative; 
    padding: 15px 0;
    border: 1px solid #CCC;
    border-radius: 15px;
`

const ContentPrice = styled.div`
    height: 65px;

    p {
        font-family: "Montserrat",sans-serif;
    }

    .name {
        font-size: 18px;
        font-weight: 300;
    }
`

const ContentImg = styled.img`
    width: 100%;
    height: 320px;
`

const ContentFlag = styled.span`
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
`

function Home({ phones }) {
    return (
        <main>
            <HeaderComponent />
            <Content>
                {phones.map((phone) => {
                    return (
                        <ContentLi key={phone.id}>
                            <ContentImg src={ phone.imagem } alt={`Este é o iphone: ${phone.modelo}` } />
                            <ContentPrice>
                                <p className="name">{ phone.modelo }</p>
                                <p>{ phone.preco }</p>
                            </ContentPrice>
                            <ContentFlag>{ phone.desconto }</ContentFlag>
                        </ContentLi>
                    )
                })}
            </Content>
            <FooterComponent />
        </main>
    )
}

export default Home;