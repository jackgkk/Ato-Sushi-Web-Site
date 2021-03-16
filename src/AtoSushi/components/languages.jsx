import React from 'react'
import styled from 'styled-components'

export default function Languages() {
    return (
        <Wrap>
            <p className="lang">polski</p>
            <p className="lang" id="line">
                /
            </p>
            <p className="lang">english</p>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    position: absolute;
    right: 60px;
    bottom: 42px;
    z-index: 3;

    p {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.6s ease-out;
    }

    p:hover {
        opacity: 1;
        color: white;
    }

    #line:hover {
        cursor: default;
        opacity: 0.7;
    }
`
