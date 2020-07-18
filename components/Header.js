import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    padding: 15px 0;
    margin-bottom: 40px;

    nav {
        text-align: center;
    }

    .menu-links ul { 
        list-style: none;
        display: flex;
        justify-content: center;
    }

    .menu-links li {
        margin: 0 20px;
        cursor: pointer;
        font-family: "Montserrat",sans-serif;

        &:hover {
            color: #FF0000;
        }
    }
`

function HeaderComponent({ }) {
    return (
        <Header>
            <nav>
                <div className="menu-links">
                    <ul>
                        <li>SALE 5%</li>
                        <li>SALE 20%</li>
                        <li>SALE 40%</li>
                        <li>SALE 50%</li>
                    </ul>
                </div>
            </nav>
        </Header>
    )
}

export default HeaderComponent;