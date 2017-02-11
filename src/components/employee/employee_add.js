import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
    Button,
    Icon,
    Input,
    Menu,
} from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import avaBig from '../../images/avaBig.png'
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
import '../../CSS/fonts.css';
import './employee.css';

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

const trigger2 = (<Image src={dottedImg}/>);

// Dropdown Option
const DropdownOption = () => (
    <Dropdown trigger={trigger2} icon={null}>
        <Dropdown.Menu>
            <Dropdown.Item>All employees</Dropdown.Item>
            <Dropdown.Item>All employees</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

const trigger3 = (<Image src={appImg}/>);

// Dropdown Menu
const DropdownMenu = () => (
    <Dropdown trigger={trigger3} icon={null}>
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

const trigger4 = (<Image src={bellImg}/>);

// Dropdown Menu
const DropdownNotice = () => (
    <Dropdown trigger={trigger4} icon={null}>
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

// header
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

class MenuExample extends Component {
    state = {
        activeItem: 'account'
    };
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
                    <Menu.Item name='Holiday calendar' active={activeItem === 'Holiday calendar'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Time card' active={activeItem === 'Time card'} onClick={this.handleItemClick}/>
                    <Menu.Item name='log notes' active={activeItem === 'log notes'} onClick={this.handleItemClick}>
                        Log / Notes
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

const AvatarInformation = () => (
    <div className='avatar_info'>
        <div className='avatar_name'>
            Misty Smith
        </div>
        <div className='avatar_position'>
            Mechanical Designer
        </div>
    </div>
);

const IconStatus = () => (
    <div className='employee_icon'>
        <Icon name='check circle'/>
    </div>
);

const ButtonMakeRequest = () => (
    <div className="employee_option_block">
        <div className='btn_wrap'>
            <Button content='Make Request' icon='dropdown' labelPosition='right' className='btn_request'/>
        </div>
    </div>

);

// Avatar
const EmployeeAvatar = () => (
    <div className='employee_avatar'>
        <Image src={avaBig} size='tiny' avatar/>
        <IconStatus/>
        <AvatarInformation/>
    </div>
);

const DepartmentMenu = () => (
    <div className='employee_block'>
        <div className='title_column'>Department</div>
        <div className='content_column'>Desing</div>
    </div>
);

const LocationMenu = () => (
    <div className='employee_block'>
        <div className='title_column'>Location</div>
        <div className='content_column'>Old Dalby</div>
    </div>
);

/* ========== Profile block ========== */

const ProfileInformation = () => (
    <div className='employee_block'>
        <div className="title_inform">
            Profile
        </div>
        <div className="title_column_lf">
            Information...
        </div>
    </div>
);

const ProfileInformationEmail = () => (
    <div className='employee_block'>
        <div className='title_column'>Email</div>
        <div className='content_column'>mitsy@longdomainname.com</div>
        <div className='content_column'>secondmail@domain.com</div>
    </div>
);

const ProfileInformationPhone = () => (
    <div className='employee_block'>
        <div className='title_column'>Phone</div>
        <div className='content_column'>+44 7449 123 456</div>
        <div className='content_column'>+359 899 132 456</div>
    </div>
);

const ProfileInformationBirday = () => (
    <div className='employee_block'>
        <div className='title_column'>Date of birthday</div>
        <div className='content_column'>07 / 07 / 1977</div>
    </div>
);

const ProfileInformationAcount = () => (
    <div className='employee_block'>
        <div className='title_column'>Account type</div>
        <div className='content_column'>Employee</div>
    </div>
);

const ProfileInformationStart = () => (
    <div className='employee_block'>
        <div className='title_column'>Start Date</div>
        <div className='content_column'>27/01/2014</div>
    </div>
);

const ProfileInformationManager = () => (
    <div className='employee_block'>
        <div className='title_column'>Manager</div>
        <div className='content_column'>Joe Doe</div>
    </div>
);

const ProfileInformationHoliday = () => (
    <div className='employee_block'>
        <div className='title_column'>Holiday entitlement</div>
        <div className='content_column'>25</div>
    </div>
);

/* ========== Security block ========== */

const SecurityInformation = () => (
    <div className='employee_block'>
        <div className="title_inform">
            Security
        </div>
        <div className="title_column_lf">
            Information...
        </div>
    </div>
);

const SecurityInformationPassword = () => (
    <div className='employee_block'>
        <div className='title_column'>Password</div>
        <div className='content_column'>Change password</div>
    </div>
);

const SecurityInformationLoginId = () => (
    <div className='employee_block'>
        <div className='title_column'>Login ID</div>
        <div className='content_column'>2314</div>
    </div>
);

const SecurityInformationPasswordLog = () => (
    <div className='employee_block'>
        <div className='title_column'>Log in email</div>
        <div className='content_column'>mitsy@logdomainname.com</div>
    </div>
);

const SecurityInformationKeyfob = () => (
    <div className='employee_block'>
        <div className='title_column'>Keyfob</div>
        <div className='content_column'>Assign Keyfob</div>
    </div>
);

/* ========== Employment block ========== */

const EmploymentInformation = () => (
    <div className='employee_block'>
        <div className="title_inform">
            Employment datails
        </div>
        <div className="title_column_lf">
            Information...
        </div>
    </div>
);

const EmploymentInformationBank = () => (
    <div className='employee_block'>
        <div className='title_column'>Bank details</div>
        <div className='content_column'>Change detaills</div>
    </div>
);

const EmploymentInformationNation = () => (
    <div className='employee_block'>
        <div className='title_column'>National Insurance Number</div>
        <div className='content_column'>Change detaills</div>
    </div>
);

const EmploymentInformationContact = () => (
    <div className='employee_block'>
        <div className='title_column'>Emergency contact</div>
        <div className='title_column'>Julia Smith - partner</div>
        <div className='title_column'>+44 7777 123 456</div>
        <div className='title_column'>Flat 1, Charnwood House, Alexandra park, Albert Road NG42KJ, Nottingham</div>

    </div>
);

/* ========== Additional block ========== */

const AdditionalInformation = () => (
    <div className='employee_block'>
        <div className="title_inform">
            Additional information
        </div>
        <div className="title_column_lf">
            Information...
        </div>
    </div>
);

const AdditionalInformationShoe = () => (
    <div className='employee_block'>
        <div className='title_column'>Shoe size</div>
        <div className='content_column'>10</div>
    </div>
);

const AdditionalInformationWork = () => (
    <div className='employee_block'>
        <div className='title_column'>Work permit</div>
        <div className='content_column'>Change detaills</div>
    </div>
);

const AdditionalInformationOther = () => (
    <div className='employee_block'>
        <div className='title_column'>Other information</div>
        <div className='title_column'>other details</div>
    </div>
);

/* ========== Sidebar block ========== */

const SidebarAllowance = () => (
    <div className='employee_option_block'>
        <div className="sidebar_info">
            <div className='count_title'>Holiday Available</div>
            <div className='title_column'>You have in total 25 days for 2017</div>
        </div>

        <div className='count_sidebar'>
            <div className='count_title'>Available</div>
            <div className='count_time'>4 day</div>
            <div className='count_sidebar_hover'>
            </div>
        </div>
    </div>
);

const SidebarTimeCard = () => (
    <div className='employee_option_block'>
        <div className="sidebar_info">
            <div className='count_title'>Time card</div>
            <div className='title_column'>Your shift is: 08:00 -16:30</div>
        </div>

        <div className='count_sidebar'>
            <div className='count_title'>Time Card</div>
            <div className='count_time'>35 hr</div>
            <div className='count_sidebar_hover'>
            </div>
        </div>
    </div>
);

// Content
const ContentMenu = () => (
    <Container>
        <div className="employee">
            <div className="employee_profile">

                <div className='employee_profile_info'>
                    <Grid columns='equal'>
                        <Grid.Column width={6}>
                            <EmployeeAvatar/>
                        </Grid.Column>
                        <Grid.Column>
                            <DepartmentMenu/>
                        </Grid.Column>
                        <Grid.Column >
                            <LocationMenu/>
                        </Grid.Column>
                    </Grid>
                    <MenuExample/>
                    <a href='#' className='edit'>Edit</a>
                </div>

                <div className='employee_profile_info border_bottom'>
                    <Grid columns='equal'>
                        <Grid.Column width={6}>
                            <ProfileInformation/>
                        </Grid.Column>
                        <Grid.Column>
                            <ProfileInformationEmail/>
                            <ProfileInformationPhone/>
                            <ProfileInformationBirday/>
                        </Grid.Column>
                        <Grid.Column>
                            <ProfileInformationAcount/>
                            <ProfileInformationStart/>
                            <ProfileInformationManager/>
                            <ProfileInformationHoliday/>
                        </Grid.Column>
                    </Grid>
                    <a href='#' className='edit'>Edit</a>
                </div>

                <div className='employee_profile_info border_bottom'>
                    <Grid columns='equal'>
                        <Grid.Column width={6}>
                            <SecurityInformation/>
                        </Grid.Column>
                        <Grid.Column>
                            <SecurityInformationPassword/>
                            <SecurityInformationLoginId/>
                        </Grid.Column>
                        <Grid.Column>
                            <SecurityInformationPasswordLog/>
                            <SecurityInformationKeyfob/>
                        </Grid.Column>
                    </Grid>
                    <a href='#' className='edit'>Edit</a>
                </div>

                <div className='employee_profile_info border_bottom'>
                    <Grid columns='equal'>
                        <Grid.Column width={6}>
                            <EmploymentInformation/>
                        </Grid.Column>
                        <Grid.Column>
                            <EmploymentInformationBank/>
                            <EmploymentInformationNation/>
                        </Grid.Column>
                        <Grid.Column>
                            <EmploymentInformationContact/>
                        </Grid.Column>
                    </Grid>
                    <a href='#' className='edit'>Edit</a>
                </div>

                <div className='employee_profile_info'>
                    <Grid columns='equal'>
                        <Grid.Column width={6}>
                            <AdditionalInformation/>
                        </Grid.Column>
                        <Grid.Column>
                            <AdditionalInformationShoe/>
                            <AdditionalInformationWork/>
                        </Grid.Column>
                        <Grid.Column>
                            <AdditionalInformationOther/>
                        </Grid.Column>
                    </Grid>
                    <a href='#' className='edit'>Edit</a>
                </div>
            </div>

            <div className="employee_option">
                <ButtonMakeRequest/>
                <SidebarAllowance/>
                <SidebarTimeCard/>
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

class EployeeAdd extends React.Component {
    render() {
        return (<Employees/>);
    }
}
