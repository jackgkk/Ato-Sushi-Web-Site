import React, { useState } from 'react'
import hero from '../../assets/sushiHero.png'
import styled from 'styled-components'
import ReservePopup from '../components/reserveATable'
import {
    Background,
    Center,
    Body,
    Container,
    DarkOverlay,
} from '../styles/reuseStyle'
import NavFrame from '../components/navFrame'
import SocialMedia from '../components/socialMedia'
import NavBar from '../components/navBar'
import { Link, useHistory } from 'react-router-dom'

export default function MainPage() {
    const [popup, setPopup] = useState(false)
    const history = useHistory()
    function handleMenu() {
        history.push('/menu')
    }
    return (
        <Container>
            <BackgroundS>
                <DarkOverlay />
                <div className="hero">
                    <img
                        src={hero}
                        alt="sushi master making sushi cutting fish"
                        id="hero"
                    />
                </div>
            </BackgroundS>
            <NavFrame />
            <Center>
                <h1>Poczuj smak Japonii w sercu Łodzi</h1>
                <ButtonWrap>
                    <button onClick={handleMenu}>Menu</button>
                    <ReservePopup />
                </ButtonWrap>
            </Center>
            <SocialMedia />
        </Container>
    )
}

const ButtonWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
    width: 80%;
    button {
        margin-top: 20px;
    }
    @media (max-width: 630px) {
        flex-direction: column;
    }
`

const BackgroundS = styled(Background)`
    .hero {
        position: absolute;
        right: -4.1%;
        transform: rotate(9deg);
        top: -8%;
        width: 52%;
        height: 120vh;
        overflow: hidden;
        div {
            width: 100%;
            height: 100%;
        }
        img {
            transform: rotate(-9deg);
            object-fit: cover;
            width: 102%;
            height: 90%;
            transform-origin: bottom right;
        }
    }
`
