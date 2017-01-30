import React, {Component} from 'react';
import { Dropdown,  Grid, Image, Container, Button, Input } from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
import './header.css';

// Dropdown profile
const trigger = (
    <Image src={ava2} size='mini' avatar />
);
const DropdownProfile = () => (
    <Dropdown trigger={trigger} icon={null}>
        <Dropdown.Menu className="prifileDropdown">
            <Dropdown.Item> Your Profile </Dropdown.Item>
            <Dropdown.Item> Integrations </Dropdown.Item>
            <Dropdown.Item> Help </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> Settings </Dropdown.Item>
            <Dropdown.Item> Sign Out </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const triger2= (
    <Image src={dottedImg} />
);

// Dropdown Option
const DropdownOption = () => (
    <Dropdown trigger={triger2} icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const triger3 = (
    <Image src={appImg} />
);
// Dropdown Menu
const DropdownMenu = () => (
    <Dropdown trigger={triger3} icon={null}>
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

const triger4 = (
    <Image src={bellImg} />
);
// Dropdown Menu
const DropdownNotice = () => (
    <Dropdown trigger={triger4} icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
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

const ButtonCircularAdd = () => (
  <Button circular icon='plus' />
);

const InputSearch = () => (
  <Input icon='search' iconPosition='left' placeholder='Search...' transparent />
);

const GridExampleColumns = () => (
    <header className="header">
        <div className="header_top_menu">
            <div className="ui container grid">
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={10} computer={12}>
                        <div className="header_top_menu_link">
                            <a className="item logo">
                                <Image src={mainLogo}/>
                            </a>
                            <a href="#" className="item">Employees</a>
                            <a href="#" className="item">Time & Attendance</a>
                            <a href="#" className="item">Calendar</a>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={6} computer={4}>
                        <div className="header_top_profile">
                            <DropdownNotice />
                            <DropdownMenu />
                            <DropdownOption />
                            <DropdownProfile />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </div>
            <div className="header_top_inform">
                <Container className="grid">
                    <Grid.Row>
                        <Grid.Column mobile={7} tablet={6} computer={12}>
                           <a href="#" className="item emp_title">Employees (10)</a>
                        </Grid.Column>
                        <Grid.Column mobile={9} tablet={10} computer={4}>
                           <div className="header_top_addEmp">
                               <a className="item" href="#">
                                   <span className="add">Add Employee</span>
                                   <ButtonCircularAdd />
                               </a>
                           </div>
                        </Grid.Column>
                    </Grid.Row>
                </Container>
            </div>
            <div className="header_top_search">
                <Container className="grid">
                    <Grid.Row>
                        <Grid.Column mobile={8} tablet={6} computer={12}>
                           <InputSearch />
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={10} computer={4}>
                        <div className="header_top_searchDown">
                            <DropdownEmployees />
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                </Container>
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
