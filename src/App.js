import NavBar from './AtoSushi/components/navBar'
import MainPage from './AtoSushi/pages/mainPage'
import logo from './assets/sushiLogo.png'
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import ReservePopup from './AtoSushi/components/reserveATable'
import ContactUs from './AtoSushi/pages/contactUs'
import MenuPage from './AtoSushi/pages/menuPage'

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <NavBar logo={logo} />

            <Switch location={location} key={location.pathname}>
                <Route
                    path="/insta"
                    component={() => {
                        window.location.href =
                            'https://www.instagram.com/ato_sushi_lodz/'
                        return null
                    }}
                    target='_blank'
                />
                <Route path="/facebook">
                    <Redirect
                        to={{
                            pathname: '',
                        }}
                        target="_blank"
                    />
                </Route>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/contact" exact>
                    <ContactUs />
                </Route>
                <Route path="/menu" exact>
                    <MenuPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
