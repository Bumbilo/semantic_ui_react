import React, {Component} from 'react';
import {
   Dropdown,
   Grid,
   Image,
   Container,
   Button,
   Input,
   Menu,
   Table
} from 'semantic-ui-react';
import mainLogo from '../../images/logo.png';
import ava2 from '../../images/ava3.png';
import avaBig from '../../images/avaBig.png'
import appImg from '../../images/apps.svg';
import dottedImg from '../../images/dotted.svg';
import bellImg from '../../images/bell.svg';
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
   <Dropdown text='All employees'>
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
                     <a href="#" className="item emp_title">Employees (10)</a>
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

class MenuExample extends Component {
   state = {
      activeItem: 'account'
   }
   handleItemClick = (e, {name}) => this.setState({activeItem: name})
   render() {
      const {activeItem} = this.state

      return (
         <div>
            <Menu pointing secondary>
               <Menu.Item
                  name='account'
                  active={activeItem === 'account'}
                  onClick={this.handleItemClick}/>
               <Menu.Item
                  name='Holiday calendar'
                  active={activeItem === 'Holiday calendar'}
                  onClick={this.handleItemClick}/>
               <Menu.Item
                  name='Time card'
                  active={activeItem === 'Time card'}
                  onClick={this.handleItemClick}/>
               <Menu.Item
                  name='log notes'
                  active={activeItem === 'log notes'}
                  onClick={this.handleItemClick}>
                  Log / Notes
               </Menu.Item>
            </Menu>
         </div>
      )
   }
}

const EmployeeAvatar = () => (
   <div className='employee_avatar'>
      <Image src={avaBig} size='tiny' avatar/>
   </div>
);

// Content
const GridColumnsContent = () => (
   <Container>
      <Grid.Row>
         <div className="employee">
            <div className="employee_profile">
               <Grid columns='equal'>
                  <Grid.Column width={8}>
                    <EmployeeAvatar />
                  </Grid.Column>
                  <Grid.Column>
                     123
                  </Grid.Column>
                  <Grid.Column>
                     123
                  </Grid.Column>
               </Grid>
               <MenuExample/>
            </div>
            <div className="employee_option"></div>
         </div>
      </Grid.Row>
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
            <GridColumnsContent/>
         </div>
      )
   }
}

class EployeeAdd extends React.Component {
   render() {
      return (<Employees/>);
   }
}
