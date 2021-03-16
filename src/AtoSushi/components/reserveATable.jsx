import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import './style.css'
import smoke from '../../assets/smokeImage.png'

export default function ReservePopup() {
    return (
        <StyledPopup
            trigger={<button id="secondary"> Rezerwuj Stolik </button>}
            modal
        >
            {(close) => (
                <PopUp>
                    <Header>
                        <h2>Zarezerwuj Stolik</h2>
                        <p className="lang">
                            Potrzebujemy od ciebie kilka danych
                        </p>
                    </Header>
                    <form action="submit">
                        <InputWrap>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                            <InputField>
                                <p>Imię</p>
                                <Input
                                    type="text"
                                    placeholder="np. Jan"
                                    className="nav"
                                />
                            </InputField>
                        </InputWrap>
                    </form>
                    <button type="submit">Wyslij</button>
                </PopUp>
            )}
        </StyledPopup>
    )
}

const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(0, 0, 0, 0.6);
    }
    @keyframes anvil {
        0% {
            transform: scale(1) translateY(0px);
            opacity: 0;
            box-shadow: 0 0 0 rgba(241, 241, 241, 0);
        }
        1% {
            transform: scale(0.96) translateY(10px);
            opacity: 0;
            box-shadow: 0 0 0 rgba(241, 241, 241, 0);
        }
        100% {
            transform: scale(1) translateY(0px);
            opacity: 1;
            box-shadow: 0 0 500px rgba(241, 241, 241, 0);
        }
    }
    &-content {
        -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9)
            forwards;
    }
    overflow: scroll;
`

const PopUp = styled.div`
    max-width: 55vw;
    border-radius: 30px;
    background: url(${smoke}),
        linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), #ffffff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 35px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
        margin: 10px 0px;
    }
    p {
        margin: 10px 0px;
    }
`

const Input = styled.input`
    width: 100%;
    height: 55px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    padding-left: 22px;
`

const InputField = styled.div`
    width: 40%;
    h6 {
        margin: 0;
        margin-bottom: 12px;
    }
    margin-top: 25px;
    margin-right: 22px;
    margin-left: 22px;
`

const InputWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
`
