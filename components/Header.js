import React from 'react';
//import styled from 'styled-components';

function HeaderComponent({ }) {
    return (
        <header>
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

            <style jsx>{`
                header {
                    padding: 15px 0;
                    margin-bottom: 40px;
                }
                
                header nav{
                    text-align: center;
                }

                header ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                }

                header li {
                    margin: 0 20px;
                    cursor: pointer;
                    font-family: "Montserrat",sans-serif;
                }

                header li:hover {
                    color: #FF0000;
                }
            `}</style>
        </header>
    )
}

export default HeaderComponent;