import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NavBar({ logo }) {
    return (
        <div style={{ position: 'relative', width: '100vw' }}>
            <NavDiv>
                <Link to="/">
                    <img src={logo} alt="ato sushi logo" />
                </Link>

                <ul>
                    <li className="nav">ato ramen</li>
                    <li className="nav">
                        <Link to="/menu">menu</Link>
                    </li>
                    <li className="nav">
                        <Link to="/contact">kontakt</Link>
                    </li>
                </ul>
            </NavDiv>
        </div>
    )
}

const NavDiv = styled.nav`
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    padding: 42px 60px;
    width: 100%;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    img {
        width: 155px;
        object-fit: contain;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        padding-left: 80px;
        position: relative;
        opacity: 1;
        transition: 0.6s ease-out;
        cursor: pointer;
    }

    li:hover {
        opacity: 1;
        color: white;
    }
`
