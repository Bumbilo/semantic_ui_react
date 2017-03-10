import React, {Componen} from 'react';
import {Grid, Image, Container, Button, Icon} from 'semantic-ui-react';
import logo from '../../images/logo_bradgate.png';
import '../../CSS/fonts.css';
import './tablet.css';

const HeaderTablet = () => (
    <header className="header_tablet">
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column mobile={6} tablet={6} computer={6}>
                    <Image  src={logo}/>
                </Grid.Column>
                <Grid.Column mobile={10} tablet={10} computer={10} textAlign="right">
                    <span className="header_tablet_date">02 March 2017</span>
                </Grid.Column>
            </Grid.Row>
        </div>
    </header>
);


const TabletContent = () => (
    <div className="content_tablet">
        <Container className="grid">
            <Grid.Row>
                <Grid.Column textAlign="center">
                   <span className="big_time">
                       07:57
                   </span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Button basic color='red' floated="right" >Out</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={8}>
                    <Button basic color='green' >In</Button>
                </Grid.Column>
            </Grid.Row>
        </Container>
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
        <Grid>
            <HeaderTablet/>
            <TabletContent/>
            <TabletFooter/>
        </Grid>
    </div>

);

export default TabletComponent;

