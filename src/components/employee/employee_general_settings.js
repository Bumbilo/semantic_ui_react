import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
    Icon,
    Popup,
    Button,
    Input,
    Menu
} from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
import mitsy from '../../images/user_mitsy.png';
import john from '../../images/user_jhon.png';
import den from '../../images/user_den.png';
import companyLogo from '../../images/logo_bradgate.png'
import '../../CSS/fonts.css';
import './employee.css';
import './timecard.css';

// Dropdown profile
const trigger = (<Image src={ava2} size='mini' avatar/>);
const DropdownProfile = () => (
    <Dropdown trigger={trigger} icon={null}>
        <Dropdown.Menu className="prifileDropdown">
            <Dropdown.Item>
                Your Profile
            </Dropdown.Item>
            <Dropdown.Item>
                Integrations
            </Dropdown.Item>
            <Dropdown.Item>
                Help
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>
                Settings
            </Dropdown.Item>
            <Dropdown.Item>
                Sign Out
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const triger2 = (<Image src={dottedImg}/>);

// Dropdown Option
const DropdownOption = () => (
    <Dropdown trigger={triger2} icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const triger3 = (<Image src={appImg}/>);
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
            <Dropdown.Divider/>
            <div className="more">
                More
            </div>
        </Dropdown.Menu>
    </Dropdown>
);

const triger4 = (<Image src={bellImg}/>);
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
    <Dropdown text='Sort'>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const DropdownFilter = () => (
    <Dropdown text='Filter'>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const ButtonCircularAdd = () => (<Button circular icon='plus'/>);
const InputSearch = () => (<Input icon='search' iconPosition='left' placeholder='Search...' transparent/>);

// ========== header ==========

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
                            <DropdownNotice/>
                            <DropdownMenu/>
                            <DropdownOption/>
                            <DropdownProfile/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </div>
            <div className="header_top_inform">
                <Container className="grid">
                    <Grid.Row>
                        <Grid.Column mobile={7} tablet={6} computer={12}>
                            <a href="#" className="item header_title_menu">
                                <a href="#" className="top_title_menu">Employees list ></a>
                                Misty Smith</a>
                        </Grid.Column>
                        <Grid.Column mobile={9} tablet={10} computer={4}>
                            <div className="header_top_addEmp">
                                <a className="item" href="#">
                                    <span className="add">Add Employee</span>
                                    <ButtonCircularAdd/>
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
                            <InputSearch/>
                        </Grid.Column>
                        <Grid.Column mobile={8} tablet={10} computer={4}>
                            <div className="header_top_searchDown">
                                <DropdownEmployees/>
                            </div>
                            <div className="header_top_searchDown filter_dropdown">
                                <DropdownFilter/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Container>
            </div>
        </div>
    </header>
);

// ========== Left Sidebar ==========

class MenuLeftSidebar extends Component {
    state = {activeItem: 'general   '};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu text vertical>
                <Menu.Item name='general' active={activeItem === 'general'} onClick={this.handleItemClick}/>
                <Menu.Item name='absence' active={activeItem === 'absence'} onClick={this.handleItemClick}/>
                <Menu.Item name='timeAttendance' active={activeItem === 'timeAttendance'} onClick={this.handleItemClick}/>
                <Menu.Item name='employee' active={activeItem === 'employee'} onClick={this.handleItemClick}/>
                <Menu.Item name='nottification' active={activeItem === 'nottification'} onClick={this.handleItemClick}/>
                <Menu.Item name='permissions' active={activeItem === 'permissions'} onClick={this.handleItemClick}/>
            </Menu>
        )
    }
}

// ============ Popup ============

const InfoPopup = () => (
    <Popup
        trigger={<Button circular icon='info' className="general_setting_info" />}
        position='top right'
        size='tiny'
        className="setting_popup_users"
    >
        <span className="popup_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus alias aliquid autem cum, cupiditate dignissimos dolore ducimus,
            earum esse id illo illum labore nesciunt officia, omnis porro sed sit tenetur?</span>
    </Popup>
);

const InfoPopupMap = () => (
    <Popup
        trigger={<Button circular icon='info' className="general_map_info" />}
        position='top right'
        size='tiny'
        className="setting_popup_users"
    >
        <span className="popup_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            earum esse id illo illum labore nesciunt officia, omnis porro sed sit tenetur</span>
    </Popup>
);
// ============ Content ============

const EmployeeSettings = () => (
    <div className="employee_title">
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <div className="title">
                       General Settings
                    </div>
                    <div className="subtitle">
                        Configure actions and for your Page
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Icon name="settings"/>
    </div>
);

const InputCountryName = () => ( <Input placeholder='Company name' fluid value="Bradge Bakary" className="input_general_settings"/>);
const InputAdress = () => ( <Input placeholder='Adress' fluid value="Madeline Rd, Beaumont Leys, Leicester LE4 1WX" className="input_general_settings"/>);
const InputPhone = () => ( <Input placeholder='Adress' fluid value="0116 123 1234" className="input_general_settings"/>);
const InputText = () => ( <Input placeholder='Adress' fluid value="12345" className="input_general_settings"/>);

const EmployeeCompanyDetails = () => (
    <div>
        <div className="employee_title_btn">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <div className="title">
                           Company details
                        </div>
                        <div className="subtitle">
                            Informational text about location
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="employee_settings_content">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <span className="name select">Company name</span>
                    </Grid.Column>
                    <Grid.Column width={7}><InputCountryName/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <span className="name select">Adress</span>
                        <InfoPopupMap/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <InputAdress />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.2139854400634!2d-1.1556886840365619!3d52.674173532544266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760412ed28d1f%3A0xf76f0f392416dae1!2sBradgate+Bakery!5e0!3m2!1sru!2sua!4v1491948663534" className="general_map"></iframe>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={9}><span className="name select">Company Logo</span></Grid.Column>
                    <Grid.Column width={7}>
                        <InputAdress />
                        <div className="general_company_logo">
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <span className="name select">Company phone</span>
                        <InfoPopup/>
                    </Grid.Column>
                    <Grid.Column width={7}><InputPhone/></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={9}><span className="name select">text</span></Grid.Column>
                    <Grid.Column width={7}><InputText/></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </div>
);

const ContentMenu = () => (
    <Container>
        <div className="employee">
            <div className="employee_option_left">
                <MenuLeftSidebar/>
            </div>
            <div className="employee_profile_right">
                <div className='employee_profile_info'>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <EmployeeCompanyDetails/>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        </div>
    </Container>
);

export default class Employees extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div>
                <GridExampleColumns/>
                <ContentMenu/>
            </div>
        )
    }
}

class EployeeGeneralHoliday extends React.Component {
    render() {
        return (<Employees/>);
    }
}
