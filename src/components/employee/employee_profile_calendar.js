import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
    Accordion,
    Button,
    Icon,
    Divider,
    Input,
    Menu,
    Popup
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
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

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

const AvatarInfromation = () => (
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
        <AvatarInfromation/>
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

/* ========== Sidebar block ========== */

const HolidayProgress = {
    width: '60%',
    background: '#e3d5ff'
};

const HolidayProgress2 = {
    width: '10%',
    background: '#f24b60'
};

const HolidayProgress3 = {
    width: '5%',
    background: '#ffc26a'
};

const HolidayProgress4 = {
    width: '10%',
    background: '#ff8d9b'
};

const HolidayProgress5 = {
    width: '15%',
    background: '#e6ebf0'
};

const PopupHoliday1 = () => (
    <Popup
        trigger={<span style={HolidayProgress}></span>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Holiday
            </div>
            <div className="popup_count">
                15 days
            </div>
        </div>
    </Popup>
);

const PopupHoliday2 = () => (
    <Popup
        trigger={<span style={HolidayProgress2}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Holiday
            </div>
            <div className="popup_count">
                4 days
            </div>
        </div>
    </Popup>
);

const PopupHoliday3 = () => (
    <Popup
        trigger={<span style={HolidayProgress3}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Holiday
            </div>
            <div className="popup_count">
                4 days
            </div>
        </div>
    </Popup>
);

const PopupHoliday4 = () => (
    <Popup
        trigger={<span style={HolidayProgress4}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Holiday
            </div>
            <div className="popup_count">
                Other
            </div>
        </div>
    </Popup>
);

const PopupHoliday5 = () => (
    <Popup
        trigger={<span style={HolidayProgress5}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Holiday
            </div>
            <div className="popup_count">
                Other
            </div>
        </div>
    </Popup>
);

const ProgressBarHoliday = () => (
    <div className="progress_bar">
        <PopupHoliday1/>
        <PopupHoliday2/>
        <PopupHoliday3/>
        <PopupHoliday4/>
        <PopupHoliday5/>
    </div>
);

const StatisticHoliday = () => (
    <div className="statistic_holiday">
        <div>
            <div className="statistic_square clr_vac"></div>
            <span className="label">Vaction</span>
            <span className="count">15</span>
        </div>
        <div>
            <div className="statistic_square clr_sick"></div>
            <span className="label">Sick leave</span>
            <span className="count">1&frac12;</span>
        </div>
        <div>
            <div className="statistic_square clr_mater"></div>
            <span className="label">Maternity / Parenting</span>
            <span className="count">2&frac12;</span>
        </div>
        <div>
            <div className="statistic_square clr_anu"></div>
            <span className="label">Unauthorised absence</span>
            <span className="count">2</span>
        </div>
        <div>
            <div className="statistic_square clr_blank"></div>
            <span className="label">Blank holiday days</span>
            <span className="count">8</span>
        </div>
        <div className="static_result">
            <div>
                <span className="label">Used days</span>
                <span className="count">21</span>
            </div>
            <div>
                <span className="label">Left days</span>
                <span className="count">4</span>
            </div>
        </div>
        <a href="#" className="view_link">View calendar</a>
    </div>
);

const SidebarAllowance = () => (
    <div className='employee_option_block'>
        <div className="sidebar_info">
            <div className='count_title'>Holliday Available</div>
            <div className='title_column'>You have in total 25 days for 2017</div>
            <ProgressBarHoliday/>
            <StatisticHoliday/>
        </div>
    </div>
);

class ItemProfileActive extends Component {
    render() {
        return (
            <Grid.Row>
                <Grid columns="equal" container className="profile_month_item active">
                    <Grid.Column>
                        <span className={this.props.status}>Approved</span>
                        <span className="profile_name_month">John Smith</span>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <span className="month_day">{this.props.days}</span>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div className="profile_start_month">
                            <span className="start_month_date">01 Fev </span>
                            <span className="start_month_status">Full day</span>
                        </div>
                        <div className="icon_time">
                            <Icon name="arrow right"/>
                        </div>
                        <div className="profile_end_month">
                            <span className="end_month_date">01 Fev </span>
                            <span className="end_month_status">Full day</span>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                    <span className="month_vocation">
                        {this.props.vacation}
                    </span>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <button className="profile_month_option">
                            <Icon name="ellipsis vertical"/>
                        </button>
                    </Grid.Column>
                </Grid>
            </Grid.Row>
        )
    }
}

class ItemProfile extends Component {
    render() {
        return (
            <Grid.Row>
                <Grid columns="equal" container className="profile_month_item">
                    <Grid.Column>
                        <span className={this.props.status}>Approved</span>
                        <span className="profile_name_month">John Smith</span>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <span className="month_day">{this.props.days}</span>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div className="profile_start_month">
                            <span className="start_month_date">01 Fev </span>
                            <span className="start_month_status">Full day</span>
                        </div>
                        <div className="icon_time">
                            <Icon name="arrow right"/>
                        </div>
                        <div className="profile_end_month">
                            <span className="end_month_date">01 Fev </span>
                            <span className="end_month_status">Full day</span>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                    <span className="month_vocation">
                        {this.props.vacation}
                    </span>

                    </Grid.Column>
                    <Grid.Column width={1}>
                        <button className="profile_month_option">
                            <Icon name="ellipsis vertical"/>
                        </button>
                    </Grid.Column>
                </Grid>
            </Grid.Row>
        )
    }
}


const HolidayRequestItem = () => (
    <div className="request_item">
        <div className="request_first_date">
            <div className="request_date_day">01 Jan 17</div>
            <div className="request_full_day">Full day</div>
        </div>
        <div className="request_arrow">
            <Icon name="arrow right"/>
        </div>
        <div className="request_last_date">
            <div className="request_date_day">08 Jan 17</div>
            <div className="request_full_day">Full day</div>
        </div>
        <button className="btn_request_item"><Icon disabled name='ellipsis vertical'/></button>
        <button className="btn_request_item btn_orange"><Icon name='info'/></button>
        <button className="btn_request_item btn_red"><Icon name='close'/></button>
    </div>
);

const HolidayRequest = () => (
    <div className="holiday_request">
        <div className='count_title'>Holiday request</div>
        <HolidayRequestItem/>
        <HolidayRequestItem/>
        <HolidayRequestItem/>
    </div>
);


const AccordionYears = () => (
    <Accordion>
        <Accordion.Title>
            <Divider horizontal>January</Divider>
        </Accordion.Title>
        <Accordion.Content >
            <Grid>
                <ItemProfileActive status="profile_status_month" days="8 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_pending" days="2 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_reject " days="1&#189; days" vacation="Sick leave"/>
                <ItemProfileActive status="profile_status_month" days="7 days" vacation="Vacation"/>
            </Grid>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>February</Divider>
            <span className="acartion_status">Vacation</span>
        </Accordion.Title>
        <Accordion.Content>
            <Grid>
                <ItemProfileActive status="profile_status_month" days="8 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_pending" days="2 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_reject " days="1&#189; days" vacation="Sick leave"/>
                <ItemProfileActive status="profile_status_month" days="7 days" vacation="Vacation"/>
            </Grid>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>March</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <Grid>
                <ItemProfileActive status="profile_status_month" days="8 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_pending" days="2 days" vacation="Vacation"/>
                <ItemProfile status="profile_status_month_reject " days="1&#189; days" vacation="Sick leave"/>
                <ItemProfileActive status="profile_status_month" days="7 days" vacation="Vacation"/>
            </Grid>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>April</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>May</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>June</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>July</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>August</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>September</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>October</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>November</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>December</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <h1>Title</h1>
        </Accordion.Content>
    </Accordion>
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
                </div>

                <div className='employee_profile_calendar'>
                    <Grid columns='equal'>
                        <AccordionYears />
                    </Grid>

                </div>
            </div>

            <div className="employee_option">
                <ButtonMakeRequest/>
                <SidebarAllowance/>
                <HolidayRequest/>
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

class EmployeeProfileCalendar extends React.Component {
    render() {
        return (<Employees/>);
    }
}
