import React from 'react'
import Languages from '../components/languages'
import styled from 'styled-components'

export default function NavFrame() {
    return (
        <>
            <Languages />
            <ByYH className="lang">by Y.H.</ByYH>
        </>
    )
}

const ByYH = styled.div`
    position: absolute;
    left: 60px;
    bottom: 42px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`
