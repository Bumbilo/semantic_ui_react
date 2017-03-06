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

const StatisticTimeCard = () => (
    <div className="statistic_holiday">
        <div>
            <span className="label">Worked time</span>
            <span className="count">35 hr</span>
        </div>
        <div>
            <span className="label">Break time</span>
            <span className="count">3 hr</span>
        </div>
        <hr className="hr"/>
        <a href="#" className="view_link">View calendar</a>
    </div>
);

// Popup TimeCard
const TimeProgress = {
    width: '90%',
    background: '#b8e986'
};

const TimeProgress2 = {
    width: '3%',
    background: '#fcfd99'
};

const TimeProgress3 = {
    width: '7%',
    background: '#e6ebf0'
};


const PopupTimeCard = () => (
    <Popup trigger={<span style={TimeProgress}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Worked time
            </div>
            <div className="popup_count">
                35 hours
            </div>
        </div>
    </Popup>
);

const PopupTimeCard2 = () => (
    <Popup trigger={<span style={TimeProgress2}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Worked time
            </div>
            <div className="popup_count">
                3 hours
            </div>
        </div>
    </Popup>
);

const PopupTimeCard3 = () => (
    <Popup trigger={<span style={TimeProgress3}/>} positioning='bottom center'>
        <div className="popup_content">
            <div className="popup_title">
                Worked time
            </div>
            <div className="popup_count">
                Other
            </div>
        </div>
    </Popup>
);

const ProgressBarTime = () => (
    <div className="progress_bar">
        <PopupTimeCard/>
        <PopupTimeCard2/>
        <PopupTimeCard3/>
    </div>
);

const SidebarTimeCard = () => (
    <div className=''>
        <div className="sidebar_info">
            <div className='count_title'>Time card</div>
            <div className='title_column'>Your shift is: 08:00 -16:30</div>
            <ProgressBarTime/>
            <StatisticTimeCard/>
        </div>
    </div>
);

const YearTitle = () => (
    <div className="title_calendar_year">
        <button className="left">
            <Icon name='chevron left'/>
        </button>
        2017
        <button className="right">
            <Icon name='chevron right'/>
        </button>
    </div>
);


const TodayInfo = () => (
    <div className="today_info">
        <div className="today_info_item active">
            <Icon circular size='large' name='bell outline'/>
            <div className="today_info_user">
                <div className="subtitle_lable_week">
                    25 FEB
                </div>
                <div className="title_lable_week">
                    Forgot to check
                </div>
            </div>
            <button className="massage">
                <Icon name='talk outline'/>
            </button>
        </div>
        <div className="today_info_item ">
            <Icon circular size='large' name='clock'/>
            <div className="today_info_user">
                <div className="subtitle_lable_week">
                    25 FEB
                </div>
                <div className="title_lable_week">
                    <a href="#" className="user_link">Late</a>
                </div>
            </div>
            <button className="massage_no">
                <span className="countMassage">1</span>
                <Icon name='talk outline'/>
            </button>
        </div>
        <div className="today_info_item ">
            <Icon circular size='large' name='bell outline'/>
            <div className="today_info_user">
                <div className="subtitle_lable_week">
                    25 FEB
                </div>
                <div className="title_lable_week">
                    <a href="#" className="user_link">John Smith</a> <span className="ligth">Maker as</span>
                    Unauthorised absence
                </div>
            </div>
        </div>
        <div className="today_info_item ">
            <Icon circular size='large' name='pencil'/>
            <div className="today_info_user">
                <div className="subtitle_lable_week">
                    25 FEB
                </div>
                <div className="title_lable_week">
                    <a href="#" className="user_link">John Smith</a> <span className="ligth">Maker as</span> Forgot
                    check
                </div>
            </div>
        </div>
        <div className="today_info_item ">
            <Icon circular size='large' name='pencil'/>
            <div className="today_info_user">
                <div className="subtitle_lable_week">
                    25 FEB
                </div>
                <div className="title_lable_week">
                    <a href="#" className="user_link">John Smith</a> <span className="ligth"> Maker as</span> Forgot
                    check
                </div>
            </div>
        </div>
    </div>
);

const style = {padding: 0}
class BankHoliday extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={
                <Button className="light_yellow">
                    <span className="data_days day_holiday">{this.props.day}</span>
                </Button>
            } positioning='bottom left' on='click' style={style}>
                <div className="popup_content_day">
                    <div className="popup_title_day">
                        Bank holiday
                        <span className="count_hours"></span>
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

const ConnectDay = () => (
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
)

const OneDay = () => (
    <div className="one_day">
        <span className="connect_day_date">06/02</span>
        <span className="connect_day_status">First day off</span>
    </div>
)

class BookedHoliday extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={
                <span className="purple_day">
                </span>
            } positioning='bottom left' on='click' style={style}>
                <div className="popup_content_day">

                    <div className="popup_title_day">
                        Booked holiday
                        <span className="count_hours">5 Days</span>
                    </div>

                    <div className="popup_content_date">
                        <ConnectDay/>
                        <OneDay/>
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

const RedDay1 = () => (
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

const RedDay2 = () => (
    <div className="one_day">
        <span className="connect_day_date">13:02</span>
        <span className="connect_day_status">Check in</span>
    </div>
)

class RedDay extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={
                <span className="wrapp_label">
                    <span className="red_day"></span>
                </span>
            } positioning='bottom left' on='click' style={style}>
                <div className="popup_content_day">

                    <div className="popup_title_day">
                        Worked time
                        <span className="count_hours">7h 56min</span>
                    </div>
                    <div className="popup_content_date">
                        <RedDay1/>
                        <RedDay2/>
                    </div>
                    <div className="popup_status">
                        <Icon circular inverted name='close' size="small"/>
                        <span>Unauthorized leave</span>
                        <a href="#">
                            <Icon circular name='pencil' size="small"/>
                        </a>
                    </div>
                </div>
            </Popup>
        )
    }
}


const ConnectDay4 = () => (
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


const ConnectDay41 = () => (
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

const YellowGreen = () => (
    <Popup className="popup_day" trigger={
        <span className= "light_yellow">
            <div className="green_day"></div>
        </span >
    } positioning='bottom left' on='click' style={style}>
        <div className="popup_content_day">

            <div className="popup_title_day">
                Worked time
                <span className="count_hours">7h 56min</span>
            </div>

            <div className="popup_content_date">
                <ConnectDay4/>
                <ConnectDay41/>
            </div>

            <div className="popup_status">
                <a href="#">
                    <Icon circular name='pencil' size="small"/>
                </a>
            </div>
        </div>
    </Popup>
);

const YellowLight = () => (
    <Popup className="popup_day" trigger={
        <span className= "light_yellow">
        </span >
    } positioning='bottom left' on='click' style={style}>
        <div className="popup_content_day">

            <div className="popup_title_day">
                Worked time
                <span className="count_hours">7h 56min</span>
            </div>

            <div className="popup_content_date">
                <ConnectDay4/>
                <ConnectDay41/>
            </div>

            <div className="popup_status">
                <a href="#">
                    <Icon circular name='pencil' size="small"/>
                </a>
            </div>
        </div>
    </Popup>
);

const Greenday1 = () => (
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


const GreenDay2 = () => (
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

class YellowDay extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={
                <span className="wrapp_label">
                <span className="yellow_day"></span>
                </span>

            } positioning='bottom left' on='click' style={style}>
                <div className="popup_content_day">

                    <div className="popup_title_day">
                        Worked time
                        <span className="count_hours">7h 56min</span>
                    </div>
                    <div className="popup_content_date">
                        <Greenday1/>
                        <GreenDay2/>
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

class GreenDay extends React.Component {
    render() {
        return (
            <Popup className="popup_day" trigger={
                <span className="wrapp_label">
                    <span className="green_day">
                    </span>
                </span>
            } positioning='bottom left' on='click' style={style}>
                <div className="popup_content_day">

                    <div className="popup_title_day">
                        Worked time
                        <span className="count_hours">7h 56min</span>
                    </div>
                    <div className="popup_content_date">
                        <Greenday1/>
                        <GreenDay2/>
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

class AccordionExampleActiveIndex extends Component {
    state = {activeIndex: 0}

    handleSliderChange = (e) => this.setState({
        activeIndex: Number(e.target.value),
    })

    render() {
        const {activeIndex} = this.state
        return (
            <AccordionExampleStandard onTitleClick={this.handleTitleClick} activeIndex={activeIndex}/>
        )
    }
}

const AccordionExampleStandard = () => (
    <Accordion>
        <Accordion.Title>
            <Divider horizontal>Today</Divider>
        </Accordion.Title>
        <Accordion.Content >
            <TodayInfo></TodayInfo>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>Yesterday</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <TodayInfo></TodayInfo>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>Last Week</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <TodayInfo></TodayInfo>
        </Accordion.Content>
        <Accordion.Title>
            <Divider horizontal>Last month</Divider>
        </Accordion.Title>
        <Accordion.Content>
            <TodayInfo></TodayInfo>
        </Accordion.Content>
    </Accordion>
)

class LabelWeek extends React.Component {
    render() {
        return (
               <div className="label_week">
        <div className="title_lable_week">
           Week {this.props.number}
        </div>
        <div className="subtitle_lable_week">
            29/01-04/02
        </div>
    </div>
        )
    }
}


class LabeHours extends React.Component {
    render() {
        return (
            <div className="label_week">
                <div className="title_lable_week">
                    {this.props.time}
                </div>
                <div className="subtitle_lable_week">
                    total
                </div>
            </div>
        )
    }
}

const YearDays = () => (
    <div className="days_week">
        <ul className="calendar_card">
            <li className="wrapp_calendar_title">
                <ul className="calendar_card_title">
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>
            </li>
            <li>
                <ul className="calendar_card_content">
                    <li>
                        <LabelWeek number="5"/>
                    </li>
                    <li>
                        <ul className="calendar_card_days">
                            <li>
                                <span className="data_days day_holiday">31</span>
                                <YellowLight/>
                            </li>
                            <li >
                                <span className="data_days ">01</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">02</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">03</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">04</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">05</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">06</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LabeHours time="7hr 1min"/>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="calendar_card_content">
                    <li>
                        <LabelWeek number="6"/>
                    </li>
                    <li>
                        <ul className="calendar_card_days">
                            <li>
                                <span className="data_days day_holiday">07</span>
                                <YellowDay/>
                            </li>
                            <li >
                                <span className="data_days ">08</span>
                                <BookedHoliday/>
                            </li>
                            <li>
                                <span className="data_days ">09</span>
                                <BookedHoliday/>
                            </li>
                            <li>
                                <span className="data_days ">10</span>
                                <BookedHoliday/>
                            </li>
                            <li>
                                <span className="data_days ">11</span>
                                <BookedHoliday/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">12</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">13</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LabeHours time="7hr 25min"/>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="calendar_card_content">
                    <li>
                        <LabelWeek number="7"/>
                    </li>
                    <li>
                        <ul className="calendar_card_days">
                            <li>
                                <span className="data_days day_holiday">14</span>
                                <BookedHoliday/>
                            </li>
                            <li >
                                <span className="data_days ">15</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">16</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">17</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">18</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">19</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">20</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LabeHours time="40hr"/>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="calendar_card_content">
                    <li>
                        <LabelWeek number="8"/>
                    </li>
                    <li>
                        <ul className="calendar_card_days">
                            <li>
                                <span className="data_days day_holiday">21</span>
                                <GreenDay/>
                            </li>
                            <li >
                                <span className="data_days ">22</span>
                                <YellowDay/>
                            </li>
                            <li>
                                <span className="data_days ">23</span>
                                <RedDay/>
                            </li>
                            <li>
                                <span className="data_days ">24</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">25</span>
                                <span className="now_day"></span>
                            </li>
                            <li>
                                <span className="data_days day_holiday">26</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">27</span>
                                <GreenDay/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LabeHours time="55hr"/>
                    </li>
                </ul>
            </li>
            <li>
                <ul className="calendar_card_content">
                    <li>
                        <LabelWeek number="9"/>
                    </li>
                    <li>
                        <ul className="calendar_card_days">
                            <li>
                                <span className="data_days day_holiday">28</span>
                                <YellowGreen/>
                            </li>
                            <li >
                                <span className="data_days ">01</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">02</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">03</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days ">04</span>
                                <GreenDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">04</span>
                                <YellowDay/>
                            </li>
                            <li>
                                <span className="data_days day_holiday">05</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LabeHours time="45hr 7min"/>
                    </li>
                </ul>
            </li>
        </ul>
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
                </div>
                <YearTitle/>
                <YearDays/>
                <AccordionExampleActiveIndex/>
            </div>

            <div className="employee_option">
                <ButtonMakeRequest/>

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

class EployeeAdd2 extends React.Component {
    render() {
        return (<Employees/>);
    }
}
