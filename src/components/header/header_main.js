import React, {Component} from 'react';
import {Container, Menu, Grid, Item, Dropdown, Image, Icon} from 'semantic-ui-react'
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import './header.css';


// Dropdown profile
const trigger = (
    <div>
        <img className="ui avatar image mini" src={ava2}/>
    </div>
);
const DropdownProfile = () => (
    <Dropdown trigger={trigger} icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item> Your Profile </Dropdown.Item>
            <Dropdown.Item> Integrations </Dropdown.Item>
            <Dropdown.Item> Help </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> Settings </Dropdown.Item>
            <Dropdown.Item> Sign Out </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
// Dropdown All employees
const DropdownEmployees = () => (
    <Dropdown text='All employees'>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

// Dropdown Option
const DropdownOption = () => (
    <Dropdown icon='ellipsis vertical'>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

// Dropdown Menu
const DropdownMenu = () => (
    <Dropdown icon='grid layout'>
        <Dropdown.Menu className="DropdownMenu">
            <div className="MenuItem">
                <span>HR</span>
            </div>
            <div className="MenuItem">
                <span>Visitor</span>
            </div>
            <div className="MenuItem">
                <span>Contractors</span>
            </div>
            <div className="MenuItem">
                <span>Time-clock</span>
            </div>
            <Dropdown.Divider />
            <div className="more">
                More
            </div>
        </Dropdown.Menu>
    </Dropdown>
);

// Dropdown Menu
const DropdownNotice = () => (
    <Dropdown icon='alarm outline'>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const GridExampleColumns = () => (
    <header className="header">
        <div className="header_top_menu">
            <div className="ui container grid">
                <div className="ui row">
                    <div className="twelve wide column">
                        <div className="header_top_menu_link">
                            <a className="item logo">
                                <img src={mainLogo}/>
                            </a>
                            <a href="#" className="item">Employees</a>
                            <a href="#" className="item">Time & Attendance</a>
                            <a href="#" className="item">Calendar</a>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="header_top_profile">
                            <DropdownNotice />
                            <DropdownMenu />
                            <DropdownOption />
                            <DropdownProfile />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_top_inform">
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="twelve wide computer six wide tablet seven wide mobile column">
                            <a href="#" className="item emp_title">Employees (10)</a>
                        </div>
                        <div className="four wide computer ten wide tablet nine wide mobile column">
                            <div className="header_top_addEmp">
                                <a className="item" href="#">
                                    <span className="add">Add Employee</span>
                                    <button className="circular ui icon button">
                                        <i className="icon plus"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_top_search">
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="twelve wide computer six wide tablet eight wide mobile column ">
                            <div className="ui transparent left icon input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className=" four wide computer ten wide tablet eight wide mobile column ">
                            <div className="header_top_searchDown">
                                <DropdownEmployees />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default class MenuExampleBasic extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <GridExampleColumns />
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <MenuExampleBasic />
        );
    }
}