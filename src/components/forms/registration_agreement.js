import React, {Component} from 'react';
import {
    Grid,
    Image,
    Header,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './forms.css';
import logo from '../../images/logo_form.png';

const UserAgreement = () => (
         <div className="user_agreement_content">
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
            </p>
         </div>
);

const TopMenu = () => (
   <div className="user_agreement_title">
      <Grid>
         <Grid.Row>
            <Grid.Column mobile={5} tablet={6} computer={6}>
               <Image src={logo} className='logo'/>
            </Grid.Column>
            <Grid.Column mobile={5} tablet={4} computer={4}>
               <Header as='h3'  textAlign='center'>User Agreement</Header>
            </Grid.Column>
            <Grid.Column mobile={6} tablet={6} computer={6}>
             <Button content='Create company'
             icon='chevron right'
             labelPosition='left'
             floated='right'
             color="green"/>
            </Grid.Column>
         </Grid.Row>
      </Grid>
   </div>
);

const GridExampleColumns = () => (
   <div>
      <TopMenu/>
      <UserAgreement/>
      <UserAgreement/>
   </div>
)

export default class Employees extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    render() {
        const {activeItem} = this.state;
        return (
            <div className="wrapper_user_agreement">
                <GridExampleColumns/>

            </div>
        )
    }
}

class RegistrationAgreement extends React.Component {
    render() {
        return (<Employees/>);
    }
}
