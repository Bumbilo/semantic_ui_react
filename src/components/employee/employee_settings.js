import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
    Table,
    Popup,
    Button,
    Icon,
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
    state = {activeItem: 'general'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu text vertical>
                <Menu.Item name='general' active={activeItem === 'general'} onClick={this.handleItemClick}/>
                <Menu.Item name='holiday' active={activeItem === 'holiday'} onClick={this.handleItemClick}/>
                <Menu.Item name='timeAttendance' active={activeItem === 'timeAttendance'}
                           onClick={this.handleItemClick}/>
                <Menu.Item name='employee' active={activeItem === 'employee'} onClick={this.handleItemClick}/>
                <Menu.Item name='nottification' active={activeItem === 'nottification'} onClick={this.handleItemClick}/>
                <Menu.Item name='permissions' active={activeItem === 'permissions'} onClick={this.handleItemClick}/>
            </Menu>
        )
    }
}

// ============ Popup ============

const UserPopupMinsy = () => (
    <Popup
        trigger={<Image src={mitsy} shape='circular'/>}
        content='Mitsy Smith'
        position='top right'
        size='tiny'
        className="setting_popup_users"
    />
);


const UserPopupJohn = () => (
    <Popup
        trigger={<Image src={john} shape='circular'/>}
        content='John Taddy'
        position='top right'
        size='tiny'
        className="setting_popup_users"
    />
);

const UserPopupDen = () => (
    <Popup
        trigger={<Image src={den} shape='circular'/>}
        content='Den Michel'
        position='top right'
        size='tiny'
        className="setting_popup_users"
    />
);
// ============ Content ============

const EmployeeSettings = () => (
    <div className="employee_title">
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <div className="title">
                        Employee settings
                    </div>
                    <div className="subtitle">
                        Configure actions and for your Page
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

const EmployeeLocations = () => (
    <div>
        <div className="employee_title_btn">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <div className="title">
                            Locations
                        </div>
                        <div className="subtitle">
                            Informational text about location
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button basic floated="right">Add Location</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="employee_settings_content">
            <Table compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={8}>Old Dalby</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Nottingham</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Nottingham</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    </div>
);

const EmployeePosition = () => (
    <div>
        <div className="employee_title_btn">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <div className="title">
                            Locations
                        </div>
                        <div className="subtitle">
                            Informational text about location
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button basic floated="right">Add Position</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="employee_settings_content">
            <Table compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={8}>Designer</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Accountant</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Developer</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Accountant</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Software developer</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Marketing manager</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Electrical Engineer</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Store Manager</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>CNC programmer</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    </div>
);

const EmployeeDepartments = () => (
    <div>
        <div className="employee_title_btn">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <div className="title">
                            Departments
                        </div>
                        <div className="subtitle">
                            Informational text about departments
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button basic floated="right">Add Department</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="employee_settings_content">
            <Table compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={8}>Design</Table.Cell>
                        <Table.Cell width={6}>
                            <UserPopupMinsy/>
                            <UserPopupJohn/>
                            <UserPopupDen/>
                            <a className="count_users">+2 more</a>
                        </Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Fabrication</Table.Cell>
                        <Table.Cell width={6}>
                            <UserPopupMinsy/>
                        </Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Software</Table.Cell>
                        <Table.Cell width={6}></Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    </div>
);


const EmployeeShift = () => (
    <div>
        <div className="employee_title_btn">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <div className="title">
                            Shift templates
                        </div>
                        <div className="subtitle">
                            Informational text about Shift
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button basic floated="right">Add shift</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="employee_settings_content">
            <Table compact='very'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={8}>Factory</Table.Cell>
                        <Table.Cell width={6}>
                            <span className="employee_setting_date">Mon - Fri 08:00 - 16:30</span>
                        </Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Office half</Table.Cell>
                        <Table.Cell width={6}>
                            <span className="employee_setting_date">Mon - Fri 08:00 - 12:30</span>
                        </Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell width={8}>Office</Table.Cell>
                        <Table.Cell width={6}>
                            <span className="employee_setting_date">Mon - Fri 09:00 - 17:00</span>
                        </Table.Cell>
                        <Table.Cell width={2}>
                            <button><Icon name="write"/></button>
                            <button><Icon name="trash outline"/></button>
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
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
                            <EmployeeSettings/>
                            <EmployeeLocations/>
                            <EmployeePosition/>
                            <EmployeeDepartments/>
                            <EmployeeShift/>
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

class EployeeSetting extends React.Component {
    render() {
        return (<Employees/>);
    }
}
