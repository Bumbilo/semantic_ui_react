import React, {Componen} from 'react';
import {Grid, Image, Container, Button, Icon} from 'semantic-ui-react';
import logo from '../../images/logo_bradgate.png';
import largeAva from '../../images/large_ava.png';
import '../../CSS/fonts.css';
import './tablet.css';

const HeaderTablet = () => (
    <div className="header_tablet">
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src={logo}/>
                </Grid.Column>
                <Grid.Column width={10} textAlign="right">
                    <span className="header_tablet_date">02 March 2017</span>
                </Grid.Column>
            </Grid.Row>
        </div>
    </div>
);

const TabletContent = () => (
    <div className="content_tablet">
        <Container className="grid">
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <span className="tablet_hello_name">
                        Hello Mitsy
                    </span>
                    <div className="tablet_avatar">
                        <Image src={largeAva} centered circular/>
                        <div className="tablet_icon_status">
                            <Icon name="check"/>
                        </div>
                    </div>
                    <div className="tablet_subtitle">
                        You've checked in at
                    </div>
                    <span className="tablet_time">
                        07:58
                    </span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Button basic floated="right" className="btn_tablet">I'm not Misty</Button>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Button basic className="btn_tablet green">OK</Button>
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

const TabletComponentProfile = () => (
    <div className="wrapper_tablet">
        <Grid>
            <HeaderTablet/>
            <TabletContent/>
            <TabletFooter/>
        </Grid>
    </div>
);

export default TabletComponentProfile;
