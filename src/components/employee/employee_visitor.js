import React, {Component} from 'react';
import {
    Grid,
    Image,
    Segment,
    Container,
    Dropdown,
    Header,
    Sidebar,
    Checkbox,
    Button,
    Input,
    Menu,
    Icon
} from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import avaBig from '../../images/avaBig.png'
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
import '../../CSS/fonts.css';
import '../../CSS/simple-line-icons.css';
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
    <Dropdown text='All visitors'>
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
                            <a href="#" className="item">Log Book</a>
                            <a href="#" className="item">Visitors</a>
                            <a href="#" className="item">Report</a>
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
                            <a href="#" className="item header_title_menu">Visitor (110)</a>
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
                        </Grid.Column>
                    </Grid.Row>
                </Container>
            </div>
        </div>
    </header>
);

const EmployeeTitleVisitor = () => (
    <div className="employee_content title">
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Checkbox label={<label>Name <Icon name="sort"/></label>}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <span>Email <Icon name="sort"/></span>
                </Grid.Column>
                <Grid.Column width={4}>
                    <span>Phone <Icon name="sort"/></span>
                </Grid.Column>
                <Grid.Column width={4}>
                    <span>Last Visit <Icon name="sort"/></span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

const EmployeeItemVisitor = () => (
    <div className="employee_content item">
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <div className="visitor_check">
                        <Checkbox />
                        <Image src={ava2} avatar/>
                        <div className="request_first_date">
                            <div className="request_date_day">Anabel Smith</div>
                            <div className="request_full_day">Company name</div>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column width={4}>
                    <span className="visitor_item">james@companyname.com</span>
                </Grid.Column>
                <Grid.Column width={4}>
                    <span className="visitor_item">07777 123 456</span>
                </Grid.Column>
                <Grid.Column width={3}>
                    <div className="">
                        <div>12 / 11 / 2016</div>
                        <div className="request_full_day">Last host Teo Smith</div>
                    </div>
                </Grid.Column>
                <Grid.Column width={1}>
                    <i className="icon-options-vertical option_visitor"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

const stateOptions = [
    {key: '10', value: '10', text: '10'},
    {key: '20', value: '20', text: '20'},
    {key: '30', value: '30', text: '30'},
    {key: '40', value: '40', text: '40'},
    {key: '50', value: '50', text: '50'},
    {key: '60', value: '60', text: '60'},
    {key: '70', value: '70', text: '70'},
    {key: '80', value: '80', text: '80'}
];


const DropdownExampleCompact = () => (
    <div>
        <label>Show: </label>
        <Dropdown compact selection options={stateOptions} className="select_page"/>
    </div>
);

class EmployeePagination extends Component {
    state = {activeItem: '1'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        return (
            <Menu pagination>
                <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick}/>
                <Menu.Item disabled>...</Menu.Item>
                <Menu.Item name='10' active={activeItem === '10'} onClick={this.handleItemClick}/>
                <Menu.Item name='11' active={activeItem === '11'} onClick={this.handleItemClick}/>
                <Menu.Item name='12' active={activeItem === '12'} onClick={this.handleItemClick}/>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <DropdownExampleCompact/>
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        )
    }
}

// ========== Content ==========

const ContentMenu = () => (
    <Container>
        <div className="employee visitor">
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeTitleVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeeItemVisitor/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EmployeePagination/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </Container>
);

const AvatarInfromation = () => (
    <div className='avatar_info'>
        <div className='avatar_name sidebar'>
            Annabel Smith
        </div>
        <div className=''>
            Bradgate Bakery
        </div>
    </div>
);
const EmployeeAvatar = () => (
    <div className='employee_avatar sidebar'>
        <Image src={avaBig} size='tiny' avatar/>
        <AvatarInfromation/>
    </div>
);

const EmployeeWorkInformation = () => (
    <div className="work_info sidebar">
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Header as='h5'>Work Information</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>Phone:</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>01664 820 032</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>Email:</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>annable@bradgate-bar.com</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>Car number plate:</span>
                </Grid.Column>
                <Grid.Column width={8}>
                    <span>CD12KSM</span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

class SidebarRight extends Component {
    state = {visible: true};
    toggleVisibility = () => this.setState({visible: !this.state.visible});

    render() {
        const {visible} = this.state
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        width='thin'
                        direction='right'
                        visible={visible}
                        icon='labeled'
                        vertical
                    >
                        <EmployeeAvatar/>
                        <EmployeeWorkInformation/>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <ContentMenu />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default class Employees extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <div>
                <GridExampleColumns/>
                <SidebarRight/>
            </div>
        )
    }
}

class EployeeVisitor extends React.Component {
    render() {
        return (<Employees/>);
    }
}
