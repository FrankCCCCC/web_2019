import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from 'reactstrap';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            unit: 'metric',
            city: 'Hsinchu',
            navbarToggle: false,
            favoriteCities: cookies.get('cities')? cookies.get('cities').split(';') : []
        };

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleFormQuery = this.handleFormQuery.bind(this);
        this.setFavoriteCities = this.setFavoriteCities.bind(this);
        this.clearFavoriteCities = this.clearFavoriteCities.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }

    render() {
        return (
            <Router>
                <div className={`main bg-faded ${this.state.group}`}>
                    <div className='container'>
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                            <NavbarToggler onClick={this.handleNavbarToggle}/>
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>Today</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/forecast'>Forecast</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown>
                                        <DropdownToggle nav caret>
                                            Favorite City
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {/* <DropdownItem>
                                                Option 1
                                            </DropdownItem> */}
                                            {this.state.favoriteCities.map((item, index, array) =>{return <DropdownItem key={index} onClick={this.handleDropDownClick}>{item}</DropdownItem>})}
                                            <DropdownItem divider />
                                            <DropdownItem onClick={this.clearFavoriteCities}>
                                                Clear
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                                <span className='navbar-text ml-auto'>DataLab</span>
                            </Collapse>
                        </Navbar>
                    </div>

                    <Route exact path="/" render={() => (
                        <Today city={this.state.city} unit={this.state.unit} onQuery={this.handleFormQuery} />
                    )}/>
                    <Route exact path="/forecast" render={() => (
                        <Forecast unit={this.state.unit} onUnitChange={this.handleUnitChange} />
                    )}/>
                </div>
            </Router>
        );
    }

    handleDropDownClick(e){
        // console.log(e.currentTarget);
        // console.log(e.target);
        // console.log(e.target.innerText);
        // console.log(e.target.type);
        this.handleFormQuery(e.target.innerText, this.state.unit)
    }

    setFavoriteCities(city) {
        const { cookies } = this.props;
        let temp = this.state.favoriteCities
        if(!temp.includes(city)){
            temp.push(city)
            cookies.set('cities', temp.join(';'))
            this.setState({
                favoriteCities: temp
            })
        }
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleFormQuery(city, unit) {
        this.setFavoriteCities(city)
        this.setState({
            city: city,
            unit: unit
        }, ()=>{});
    }

    clearFavoriteCities() {
        const { cookies } = this.props;
        cookies.set('cities', [])
        this.setState({
            favoriteCities: []
        })
    }
}

export default withCookies(Main);
