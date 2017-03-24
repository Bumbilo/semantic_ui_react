import React, {Componen} from 'react';
import {Grid, Image, Container, Button, Icon} from 'semantic-ui-react';
import logo from '../../images/logo_bradgate.png';
import '../../CSS/fonts.css';
import './tablet.css';

const HeaderTablet = () => (
    <div className="header_tablet">
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column mobile={6} tablet={6} computer={6}>
                    <Image src={logo}/>
                </Grid.Column>
                <Grid.Column mobile={10} tablet={10} computer={10} textAlign="right">
                    <span className="header_tablet_date">02 March 2017</span>
                </Grid.Column>
            </Grid.Row>
        </div>
    </div>
);


const TabletContent = () => (
    <div className="content_tablet">
        <Grid verticalAlign='middle' centered>
            <Grid.Row >
                <Grid.Column textAlign="center">
                    <Container >
                   <span className="big_time">
                       07:57
                   </span>
                    </Container>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row verticalAlign='top'>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Button basic color='red' floated="right">Out</Button>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Button basic color='green'>In</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

const TabletFooter = () => (
    <div className="footer_tablet">
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column textAlign="right">
                    <Icon name="setting"/>
                </Grid.Column>
            </Grid.Row>
        </div>
    </div>
);

const TabletComponent = () => (
    <div className="wrapper_tablet">
            <HeaderTablet/>
            <TabletContent/>
            <TabletFooter/>
    </div>

);

export default TabletComponent;

