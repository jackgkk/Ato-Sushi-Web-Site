import React from 'react'

import styled from 'styled-components'
import { Facebook, Insta } from './insta'

export default function SocialMedia() {
    return (
        <Container>
            <Follow className="follow">follow us</Follow>
            <Line />
            <Socials>
                <Insta />
                <Facebook />
            </Socials>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 270px;
    justify-content: space-between;
    position: absolute;
    left: 60px;
`

const Follow = styled.p`
    transform: rotate(-90deg) translateY(-1px) translateX(-10px);
    transform-origin: top left;
    margin: 0;
`

const Line = styled.div`
    transform: translateX(8px);
    height: 120px;
    width: 1px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0;
`

const Socials = styled.div`
    display: flex;
    flex-direction: column;
    height: 65px;
    justify-content: space-between;
    align-items: center;
    FontAwesomeIcon {
        cursor: pointer;
    }
`
