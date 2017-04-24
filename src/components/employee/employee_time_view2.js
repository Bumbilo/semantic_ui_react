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
    Popup,
} from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import avaBig from '../../images/avaBig.png'
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
import '../../CSS/fonts.css';
import './employee.css';
import './timecard.css';

//======================================================
// Dropdown profile
//======================================================
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

// ============ Popup =============
const style2 = {padding: '4px 8px', fontWeight: 'bold'};
const PopupMaternity = () => (
    <Popup trigger={<div className="maternity four"></div>}
           content='Maternity'
           position='top right'
           hideOnScroll
           size='tiny'
           style={style2}
    />
);

const PopupBooked = () => (
    <Popup trigger={<div className="booked six"></div>}
           content='Booked holiday'
           position='top right'
           size='tiny'
           style={style2}
           hideOnScroll/>

);

const BankHoliday = () => (
    <Popup trigger={<div className="day_col bank_hol_date">
        <div className="time_status "></div>
    </div>}
           content='Bank holiday'
           position='top right'
           size='tiny'
           style={style2}
           hideOnScroll/>
);

const ShowProfile = () => (
    <Popup trigger={<i className="icon-eye show"/>}
           content='Show'
           position='top right'
           size='tiny'
           style={style2}
           hideOnScroll/>
);

const style = {padding: 0};
const RedDays = () => (
    <div className="connect_day">
        <div>
            <span className="connect_day_date">08:04</span>
            <span className="connect_day_status">Check in</span>
        </div>
        <div>
            <span className="connect_day_date">12:30</span>
            <span className="connect_day_status">Check out</span>
        </div>
    </div>
);

const RedDays2 = () => (
    <div className="connect_day">
        <div>
            <span className="connect_day_date">13:04</span>
            <span className="connect_day_status">Check in</span>
        </div>
        <div>
            <span className="connect_day_date">16:30</span>
            <span className="connect_day_status">Check out</span>
        </div>
    </div>
);

class RedDay extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={<div className="time_status red"></div>} position='bottom left'
                   on='click' style={style}>
                <div className="popup_content_day">
                    <div className="popup_title_day">
                        Worked time
                        <span className="count_hours">7h 56min</span>
                    </div>
                    <div className="popup_content_date">
                        <RedDays/>
                        <RedDays2/>
                    </div>
                    <div className="popup_status">
                        <Icon circular inverted name='info' color="yellow" size="small"/>
                        <span>Late/Not check in</span>
                        <a href="#">
                            <Icon circular name='pencil' size="small"/>
                        </a>
                    </div>
                </div>
            </Popup>
        )
    }
}

const YellowDays = () => (
    <div className="connect_day">
        <div>
            <span className="connect_day_date">08:04</span>
            <span className="connect_day_status">Check in</span>
        </div>
        <div>
            <span className="connect_day_date">12:30</span>
            <span className="connect_day_status">Check out</span>
        </div>
    </div>
)


const YellowDays2 = () => (
    <div className="connect_day">
        <div>
            <span className="connect_day_date">13:04</span>
            <span className="connect_day_status">Check in</span>
        </div>
        <div>
            <span className="connect_day_date">16:30</span>
            <span className="connect_day_status">Check out</span>
        </div>
    </div>
)

const YellowDay = () => (
    <Popup className="popup_day" trigger={
        <div className="time_status yellow"></div>
    } position='bottom left' on='click' style={style}>
        <div className="popup_content_day">
            <div className="popup_title_day">
                Worked time
                <span className="count_hours">7h 56min</span>
            </div>
            <div className="popup_content_date">
                <YellowDays/>
                <YellowDays2/>
            </div>
            <div className="popup_status">
                <a href="#">
                    <Icon circular name='pencil' size="small"/>
                </a>
            </div>
        </div>
    </Popup>
);

const GreenDays = () => (
    <div className="connect_day">
        <div>
            <span className="connect_day_date">06/02</span>
            <span className="connect_day_status">First day off</span>
        </div>
        <div>
            <span className="connect_day_date">06/02</span>
            <span className="connect_day_status">First day off</span>
        </div>
    </div>
);

const GreenDays2 = () => (
    <div className="one_day">
        <span className="connect_day_date">06/02</span>
        <span className="connect_day_status">First day off</span>
    </div>
);

class GreenDay extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={<div className="time_status green"></div>} position='bottom left'
                   on='click' style={style}>
                <div className="popup_content_day">
                    <div className="popup_title_day">
                        Booked holiday
                        <span className="count_hours">5 Days</span>
                    </div>
                    <div className="popup_content_date">
                        <GreenDays/>
                        <GreenDays2/>
                    </div>
                    <div className="popup_status">
                        <span>No check records</span>
                        <a href="#">
                            <Icon circular name='pencil' size="small"/>
                        </a>
                    </div>
                </div>
            </Popup>
        )
    }
}
// Avatar

const options = [
    {key: 'design', text: 'Design', value: 'Design'},
    {key: 'meneger', text: 'Meneger', value: 'Meneger'},
    {key: 'engineer', text: 'Engineer', value: 'Engineer'}
];

const MultipleSelection = () => (
    <Dropdown placeholder='Skills' multiple selection options={options} className="filter_list_select left"/>
);

const EmployeeChangeMongth = () => (
    <Grid className="filter_list">
        <Grid.Row>
            <Grid.Column mobile={4} tablet={4} computer={4}>
               <span>01 Mar 2017 - 31 Mar 2017</span>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={12} computer={12}>
                <ul className="change_year">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const EmployeeFilterUser = () => (
    <Grid className="filter_list">
        <Grid.Row>
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Button basic icon='expand' size='mini' floated='right'/>
                <Button basic icon='print' size='mini' floated='right'/>
                <Button basic size='mini' floated='right'><i className="icon-eye"/></Button>
                <MultipleSelection floated='left'/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const days = [
    {key: 'march', text: '01 Mar 2017 - 31 Mar 2017', value: '01 Mar 2017 - 31 Mar 2017'},
    {key: 'april', text: '01 April 2017 - 31 April 2017', value: '01 April 2017 - 31 April 2017'},
    {key: 'May', text: '01 May 2017 - 31 May 2017', value: '01 May 2017 - 31 May 2017'},
    {key: 'june', text: '01 June 2017 - 31 June 2017', value: '01 June 2017 - 31 June 2017'}
];

const DropdownSelectionMonth = () => (
    <Dropdown placeholder='Date' fluid selection options={days} className="select_month"/>
);

const EmployeeDaysDate = () => (
    <div className="days_row">
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    01
                </span>
                <span className="day">
                    mon
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    02
                </span>
                <span className="day">
                   tue
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    03
                </span>
                <span className="day">
                    wed
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    04
                </span>
                <span className="day">
                   thu
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    05
                </span>
                <span className="day">
                    fri
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    06
                </span>
                <span className="day">
                   sat
                </span>
            </div>
        </div>
        <div className="day_col hol_date">
            <div className="days_date">
                <span className="number">
                    07
                </span>
                <span className="day">
                   sun
                </span>
            </div>
        </div>
        <div className="day_col hol_date">
            <div className="days_date">
                <span className="number">
                    08
                </span>
                <span className="day">
                    mon
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    09
                </span>
                <span className="day">
                   tue
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   10
                </span>
                <span className="day">
                   wed
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   11
                </span>
                <span className="day">
                   thu
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                    12
                </span>
                <span className="day">
                   fri
                </span>
            </div>
        </div>
        <div className="day_col  hol_date">
            <div className="days_date  hol_date">
                <span className="number">
                   13
                </span>
                <span className="day">
                   sat
                </span>
            </div>
        </div>
        <div className="day_col  hol_date">
            <div className="days_date">
                <span className="number">
                   14
                </span>
                <span className="day">
                   sun
                </span>
            </div>
        </div>
        <div className="day_col bank_hol_date">
            <div className="days_date">
                <span className="number">
                   15
                </span>
                <span className="day">
                   mon
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   16
                </span>
                <span className="day">
                   tue
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   17
                </span>
                <span className="day">
                   wed
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   18
                </span>
                <span className="day">
                   thu
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   19
                </span>
                <span className="day">
                   fri
                </span>
            </div>
        </div>
        <div className="day_col hol_date">
            <div className="days_date">
                <span className="number">
                   20
                </span>
                <span className="day">
                   sat
                </span>
            </div>
        </div>
        <div className="day_col  hol_date">
            <div className="days_date">
                <span className="number">
                   21
                </span>
                <span className="day">
                   sun
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   22
                </span>
                <span className="day">
                    mon
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   23
                </span>
                <span className="day">
                   thu
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   24
                </span>
                <span className="day">
                   wed
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   25
                </span>
                <span className="day">
                   thu
                </span>
            </div>
        </div>
        <div className="day_col current_date">
            <div className="days_date">
                <span className="number">
                   26
                </span>
                <span className="day">
                   fri
                </span>
            </div>
        </div>
        <div className="day_col hol_date">
            <div className="days_date">
                <span className="number">
                   27
                </span>
                <span className="day">
                   sat
                </span>
            </div>
        </div>
        <div className="day_col hol_date">
            <div className="days_date">
                <span className="number">
                   28
                </span>
                <span className="day">
                    sun
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   29
                </span>
                <span className="day">
                   mon
                </span>
            </div>
        </div>
        <div className="day_col">
            <div className="days_date">
                <span className="number">
                   30
                </span>
                <span className="day">
                   tue
                </span>
            </div>
        </div>
    </div>
);

const EmployeeDaysAll3 = () => (
    <div className="days_row">
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status "></div>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <RedDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <BankHoliday/>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <div className="day_col ">
            <GreenDay/>
        </div>
        <div className="day_col">
            <RedDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col current_day">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <div className="day_col ">
            <div className="time_stus"></div>
        </div>
        <div className="day_col">
            <div className="time_stus"></div>
        </div>
    </div>
);

const EmployeeDaysAll2 = () => (
    <div className="days_row">
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status "></div>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <RedDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <BankHoliday/>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <PopupBooked/>
        </div>
        <div className="day_col">
            <div className="time_status"></div>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <div className="day_col">
            <div className="time_status "></div>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <div className="time_status "></div>
        </div>
        <div className="day_col">
            <div className="time_status "></div>
        </div>
        <div className="day_col current_day">
            <div className="time_status "></div>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <div className="day_col ">
            <div className="time_stus"></div>
        </div>
        <div className="day_col">
            <div className="time_stus"></div>
        </div>
    </div>
);

const EmployeeDaysAll = () => (
    <div className="days_row">
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <RedDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status "></div>
        </div>
        <div className="day_col">
            <PopupMaternity/>
        </div>
        <div className="day_col">
        </div>
        <div className="day_col">
        </div>
        <div className="day_col">
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <BankHoliday/>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col clicked">
            <RedDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <YellowDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <div className="time_status"></div>
        </div>
        <div className="day_col ">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col">
            <GreenDay/>
        </div>
        <div className="day_col current_day">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <GreenDay/>
        </div>
        <div className="day_col hol_date">
            <RedDay/>
        </div>
        <div className="day_col ">
            <div className="time_stus"></div>
        </div>
        <div className="day_col">
            <div className="time_stus"></div>
        </div>
    </div>
);

const position = [
    {key: 'design', text: 'Design', value: 'Design'},
    {key: 'meneger', text: 'Meneger', value: 'Meneger'},
    {key: 'engineer', text: 'Engineer', value: 'Engineer'}
];

const DropdownPosition = () => (
    <Dropdown text='Design' options={position} className="filter_position"/>
);


const DropdownPosition2 = () => (
    <Dropdown text='Engineer' options={position} className="filter_position"/>
);

const Employee_User = () => (
    <div className="user_col">
        <div className="user_status">
            <Image src={ava2} avatar/>
            <div className="status green"></div>
        </div>
        <div className="user_info">
            <span className="user_name">
                John Smith
            </span>
            <span className="user_position">
                Design manager
            </span>
        </div>
        <ShowProfile/>
    </div>
);

const Employee_User2 = () => (
    <div className="user_col">
        <div className="user_status">
            <Image src={ava2} avatar/>
            <div className="status red"></div>
        </div>
        <div className="user_info">
            <span className="user_name">
                John Smith
            </span>
            <span className="user_position">
               Senior engineer
            </span>
        </div>
        <ShowProfile/>
    </div>
);

const Employee_User3 = () => (
    <div className="user_col">
        <div className="user_status">
            <Image src={ava2} avatar/>
            <div className="status yellow"></div>
        </div>
        <div className="user_info">
            <span className="user_name">
                John Smith
            </span>
            <span className="user_position">
              Assistant engineer
            </span>
        </div>
        <ShowProfile/>
    </div>
);
const EmployeeSelectDate = () => (
    <div className="change_date">
        <DropdownSelectionMonth />
    </div>
);

const EmployeeDays = () => (
    <ul className="employee_time_list">
        <li className="list_row">
            <EmployeeSelectDate/>
            <EmployeeDaysDate/>
        </li>
    </ul>
);

const EmployeeTimeList = () => (
    <ul className="employee_time_list">
        <li className="list_row"><DropdownPosition/>
            <span className="title_month">8 -16 March - W13</span>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
    </ul>
);

const EmployeeTimeList2 = () => (
    <ul className="employee_time_list">
        <li className="list_row"><DropdownPosition2/>

        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User2/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User3/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User2/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User3/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User3/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll3/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll3/>
        </li>
    </ul>
);


// Content
const ContentMenu = () => (
    <div className="center_list">
        <div className="employee_time_view">

            <EmployeeFilterUser/>
            <EmployeeDays/>
            <EmployeeTimeList/>
            <EmployeeTimeList2/>
        </div>
    </div>
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

class EployeeTimeView2 extends React.Component {
    render() {
        return (<EployeeTimeView/>);
    }
}
