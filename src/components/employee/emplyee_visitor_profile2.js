import React, {Component} from 'react';
import {
    Dropdown,
    Grid,
    Image,
    Container,
    Popup,
    Header,
    Icon,
    Button,
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
            Bradgate Bakery
        </div>
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
        <AvatarInfromation/>
    </div>
);

/* ========== Sidebar block ========== */

const CountVisits = () => (
    <div className="visit_block">
        <div className="visitor_block-time">
            <div className="visitor_time">10:30 <span>AM</span></div>
            <div className="visitor_date">18 April</div>
        </div>
        <div className="visitor_block-status">
            Ongoing visit
        </div>
    </div>
);

const CountVisits2 = () => (
    <div className="visit_block grey">
        <div className="visitor_block-time">
            <div className="visitor_time">10:30 <span>AM</span></div>
            <div className="visitor_date">18 April</div>
        </div>
        <div className="visitor_block-status">
            Ongoing visit
        </div>
    </div>
);

const EmployeeVisits = () => (
    <div className="employee_visit sidebar">
        <Grid>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header as='h5'>Visit</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button basic className="btn_request_item">13</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <CountVisits/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <CountVisits2/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);


class EmplyeeQuestionVisitor extends Component {

    render() {
        return (
            <div className="visitor_question-item green">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={1} textAlign='center' >
                           <Icon name="check circle outline" />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            {this.props.text}
                        </Grid.Column>
                        <Grid.Column width={2} textAlign='center'>
                            {this.props.answer}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

class EmplyeeQuestionVisitorWarn extends Component {

    render() {
        return (
            <div className="visitor_question-item yellow">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={1} textAlign='center' >
                           <Icon name="warning sign" />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            {this.props.text}
                        </Grid.Column>
                        <Grid.Column width={2} textAlign='center'>
                            {this.props.answer}
                        </Grid.Column>
                        <Grid.Column width={16} className="answer" textAlign='left'>
                            {this.props.answerComent}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const PopupExampleBasic = () => (
  <Popup className='popup_visitor' wide trigger={<div className="visitor_status"><span className="st_round  awaiting_status"></span> <span>Awaiting approval</span></div>}
  position='bottom center'
  on='click'
  size='tiny'
  basic >
  <Grid divided columns='equal'>
   <Grid.Column width={16} className="popup_top_header">
   <Header as='h5' textAlign='center'>
      Appointment questionnaire
   </Header>
   </Grid.Column>
    <Grid.Column width={8}>
   <div textAlign='center'> Visitor can not go inside company !
           <Button basic color='red' content='Reject' fluid className="btn_popap" /></div>
    </Grid.Column>
    <Grid.Column width={8}>
   <div  textAlign='center'> Visitor can not go inside compan !
           <Button basic color='green' content='Approve' fluid className="btn_popap"/></div>
    </Grid.Column>
  </Grid>
</Popup>
)

class EmployeeItemVisitor extends Component {
    render() {
        return (
            <div className="employee_content item visitor">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="visitor_check">
                                <Image src={ava2} avatar/>
                                <div className="request_first_date">
                                    <div className="request_date_day">James Smith</div>
                                    <div className="request_full_day">Company name</div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div className="date_check">
                                <div>12 / 11 / 2016</div>
                                <div className="request_full_day">Check in 10:12</div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div className="date_check">
                                <div>12 / 11 / 2016</div>
                                <div className="request_full_day">Check out 11:01</div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5} textAlign='right'>
                           <PopupExampleBasic />
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <i className="icon-options-vertical option_visitor"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div className="visitor_info">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="visitor_info-item">
                                    Appointment ID: <span>1234</span>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <div className="visitor_info-item">
                                    Car reg: <span>DE05SK</span>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="visitor_info-item">
                                    Location: <span>Front desk main building</span>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div className="visitor_content">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as='h5'>Terms and conditions</Header>
                                <p>We want your visit to Millitec to be safe  and pleasant experience. <br/>
                                Fire Precautions
                                </p>
                                <p>Please familiarse yourself with the fire exits in different parts ofthe building.</p>
                                <p>Health & Safety</p>
                                <p>Please observe our Health & Safety rules. In the  workshoparea in particular, there
                                    are hazards from machinery operation, working forklifts, welding activites and
                                    chemical substances.</p>
                                <p>Please observe our Health & Safety rules. In the  workshoparea in particular, there
                                    are hazards from machinery operation, working forklifts, welding activites and
                                    chemical substances.</p>
                                <p>Condfindentiality</p>
                                <p>In the course of your visit, you may be made aware of, or become awareoff, information that
                                confidential of Millitec FoodSystem Limited. Itis our requirement that you protect any such async
                                information and async take allreasonable precations to prevent any such being passed to async
                                third parties.</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div className="visitor_question">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as='h5'>Questionnaire</Header>
                                <EmplyeeQuestionVisitor text="Do you like the system" answer="Yes"/>
                                <EmplyeeQuestionVisitor text="Have you had any sikness, diarrhoea or stomach disorder in the last 14 days? " answer="No"/>
                                <EmplyeeQuestionVisitor text="Have you visited any other type of factory or estabishment within the last 24 hours." answer="No"/>
                                <EmplyeeQuestionVisitor text="Have you been in contact with typhoid or paratyphoid or paratyphoid in the last month ?" answer="No"/>
                                <EmplyeeQuestionVisitorWarn text="Have you been out of the EU in the last  three month?" answer="Yes"/>
                                <EmplyeeQuestionVisitorWarn text="Are you suffering from any infetions of the skin, nose, throat, eyes or ears ?" answer="Yes" answerComent="i have dry hands"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }

}

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
                            <div className="main_info_profile">
                                <div>annabel@bradget-bakery.com</div>
                                <div>07777 123 456</div>
                            </div>
                        </Grid.Column>
                    </Grid>
                    <MenuExample/>
                </div>
                <div className='employee_profile_calendar visitor'>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <EmployeeItemVisitor status="st_round  approved_status" text="Approved"/>
                                {/*<EmployeeItemVisitor status="st_round  cancelled_status" text="Cancelled"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  pending_status" text="Pending"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  expected_status" text="Expected"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  rejected_status" text="Reject"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  awaiting_status" text="Awaiting approval"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  checked_status" text="Checked out"/>*/}
                                {/*<EmployeeItemVisitor status="st_round  checked_status" text="Checked out"/>*/}
                                {/*<EmployeePagination/>*/}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
            <div className="employee_option">
                <ButtonMakeRequest/>
                <EmployeeVisits/>
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

class EmployeeVisitorProfile2 extends React.Component {
    render() {
        return (<Employees/>);
    }
}
