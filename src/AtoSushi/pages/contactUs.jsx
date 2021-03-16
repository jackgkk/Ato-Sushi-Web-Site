import React from 'react'
import tables from '../../assets/ContactUsBack.png'
import { Background, Center, Body, Container } from '../styles/reuseStyle'
import NavFrame from '../components/navFrame'
import styled from 'styled-components'
import map from '../../assets/Map.png'
import smoke from '../../assets/smokeImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Facebook, Insta } from '../components/insta'

export default function ContactUs() {
    return (
        <ContainerS>
            <BackgroundS>
                <div className="overlay"></div>
            </BackgroundS>
            <NavFrame />
            <CenterS>
                <h2>Skontaktuj się z nami</h2>
                <CenterS>
                    <ImageDiv>
                        <img src={map} alt="" />
                    </ImageDiv>
                    <div id="info">
                        <p>+48 (42) 207 99 99</p>
                        <p>biuro@atosushi.pl</p>
                        <p>ul. 6 Sierpnia 1/3, 90-606 Łódź</p>
                        <p style={{ lineHeight: '1.6' }}>
                            Godziny otwarcia:<br></br> pon - czw — 12.00 - 23.00{' '}
                            <br></br> pt - sob — 12.00 - 24.00 <br></br> nd i
                            święta — 12.00 - 22.00
                        </p>
                        <div id="socials">
                            <Insta className="fa-lg" />
                            <Facebook className="fa-lg" />
                        </div>
                    </div>
                </CenterS>
            </CenterS>
        </ContainerS>
    )
}

const ContainerS = styled(Container)`
    flex-direction: column;
`

const CenterS = styled(Center)`
    min-width: 42vw;
    max-width: none;
    div {
        margin-top: 2rem;
        flex-direction: row;
    }
    #info {
        width: auto;
        text-align: left;
        margin: auto 0px;
        margin-left: 60px;
        p {
            margin-top: 40px;
        }
        #socials {
            width: 30%;
            justify-content: space-between;
            display: flex;
        }
    }
`

const BackgroundS = styled(Background)`
    background-image: url(${tables});
    div {
        background: url(${smoke}),
            linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
            #0d0d0d;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: -10%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(9deg);
        transform-origin: center center;
        width: 50%;
        height: 120vh;
        overflow: hidden;
    }
`

const ImageDiv = styled.div`
    max-height: 100%;
    max-width: 60%;
    filter: drop-shadow(0px 4px 94px rgba(0, 0, 0, 0.75));
    border-radius: 30px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
