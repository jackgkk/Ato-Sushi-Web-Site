import styled from 'styled-components'
import smoke from '../../assets/smokeImage.png'

export const Center = styled.div`
    max-width: 34rem;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: -4rem;
`

export const Background = styled.div`
    display: flex;
    height: 100vh;
    width: 101vw;
    top: 0;
    left: -5px;
    right: 0;
    position: absolute;
    background-image: url(${smoke});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: -1;
`

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 42px 60px;
    box-sizing: border-box;
    overflow: hidden;
`

export const DarkOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    z-index: 0;
`