import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
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

// ============ Popup =============

const PopupMaternity = () => (
   <Popup
 trigger={<div className="maternity four"></div>}
 content='Maternity'
 position='top right'
 hideOnScroll
/>
);





// Avatar
const EmployeeAvatar = () => (
    <div className='employee_avatar'>
        <Image src={avaBig} size='tiny' avatar/>
        <IconStatus/>
        <AvatarInfromation/>
    </div>
);

const options = [
  { key: 'design', text: 'Design', value: 'Design' },
  { key: 'meneger', text: 'Meneger', value: 'Meneger' },
  { key: 'engineer', text: 'Engineer', value: 'Engineer' }
]

const MultipleSelection = () => (
  <Dropdown placeholder='Skills' multiple selection options={options} className="filter_list_select" />
)

const EmployeeFilterUser = () => (
    <Grid className="filter_list">
        <Grid.Row>
            <Grid.Column mobile={3} tablet={3} computer={3} >
                <Input transparent placeholder='Filter users' className="filter_list_search" />
            </Grid.Column>
            <Grid.Column mobile={13} tablet={13} computer={13}>
                <Button basic icon='expand'  size='mini' floated='right' />
                <Button basic icon='print'  size='mini' floated='right' />
                <Button basic  size='mini' floated='right'><i className="icon-eye"/></Button>
                <MultipleSelection/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
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

const days = [
  { key: 'march', text: '01 Mar 2017 - 31 Mar 2017', value: '01 Mar 2017 - 31 Mar 2017' },
  { key: 'april', text: '01 April 2017 - 31 April 2017', value: '01 April 2017 - 31 April 2017' },
  { key: 'May', text: '01 May 2017 - 31 May 2017', value: '01 May 2017 - 31 May 2017' },
  { key: 'june', text: '01 June 2017 - 31 June 2017', value: '01 June 2017 - 31 June 2017' }
]

const DropdownSelectionMonth = () => (
  <Dropdown placeholder='Date' fluid selection options={days} className="select_month" />
)

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

const EmployeeDaysAll2 = () => (
    <div className="days_row">
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
            <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status "></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
     <div className="day_col bank_hol_date">
          <div className="time_status "></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
        <div className="day_col ">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col current_day">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
        <div className="day_col ">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
    </div>
);

const EmployeeDaysAll = () => (
    <div className="days_row">
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
            <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
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
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
     <div className="day_col bank_hol_date">
          <div className="time_status"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col clicked">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
        <div className="day_col ">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
        <div className="day_col current_day">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status green"></div>
        </div>
        <div className="day_col hol_date">
          <div className="time_status"></div>
        </div>
        <div className="day_col ">
          <div className="time_status green"></div>
        </div>
        <div className="day_col">
          <div className="time_status green"></div>
        </div>
    </div>
);

const position = [
  { key: 'design', text: 'Design', value: 'Design' },
  { key: 'meneger', text: 'Meneger', value: 'Meneger' },
  { key: 'engineer', text: 'Engineer', value: 'Engineer' }
]

const DropdownPosition = () => (
  <Dropdown text='Design' options={position} className="filter_position" />
)


const DropdownPosition2 = () => (
  <Dropdown text='Engineer' options={position} className="filter_position" />
)

const Employee_User = () => (
            <div className="user_col">
                <div className="user_status">
                    <Image src={ava2} avatar />
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
                <i className="icon-eye show"/>
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
         <li> <DropdownPosition/> </li>
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
         <li> <DropdownPosition2/> </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
        </li>
        <li className="list_row">
            <Employee_User/>
            <EmployeeDaysAll2/>
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

class EployeeTimeView extends React.Component {
    render() {
        return (<EployeeTimeView/>);
    }
}
