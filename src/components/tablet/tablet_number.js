import React, {Componen} from 'react';
import {Grid, Image, Container, Button, Icon} from 'semantic-ui-react';
import logo from '../../images/logo_bradgate.png';
import largeAva from '../../images/large_ava.png';
import '../../CSS/fonts.css';
import './tablet.css';

const HeaderTablet = () => (
    <header className="header_tablet">
        <div className="ui grid">
            <Grid.Row>
                <Grid.Column mobile={6} tablet={8} computer={10}>
                    <Image src={logo}/>
                </Grid.Column>
                <Grid.Column mobile={10} tablet={8} computer={6} textAlign="right">
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
                <Grid.Column >
                    <input type="text" className="inputNumber" maxLength="4" placeholder="____" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="right">
                    <div className="btn_number btn_number_one active"></div>
                </Grid.Column>
                 <Grid.Column mobile={4} tablet={2} computer={2} textAlign="center">
                     <div className="btn_number btn_number_two"></div>
                 </Grid.Column>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="left">
                    <div className="btn_number btn_number_three"></div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="right">
                    <div className="btn_number btn_number_four"></div>
                </Grid.Column>
                <Grid.Column mobile={4} tablet={2} computer={2} textAlign="center">
                    <div className="btn_number btn_number_five"></div>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="left">
                    <div className="btn_number btn_number_six active"></div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="right">
                    <div className="btn_number btn_number_seven"></div>
                </Grid.Column>
                <Grid.Column mobile={4} tablet={2} computer={2} textAlign="center">
                    <div className="btn_number btn_number_eight active"></div>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="left">
                    <div className="btn_number btn_number_nine"></div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="right">
                    <div className="btn_number btn_number_before"></div>
                </Grid.Column>
                <Grid.Column mobile={4} tablet={2} computer={2} textAlign="center">
                    <div className="btn_number btn_number_zero"></div>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={7} computer={7} textAlign="left">
                    <div className="btn_number btn_number_next"></div>
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

const TabletComponentNumbers = () => (
    <div className="wrapper_tablet">
        <Grid>
            <HeaderTablet/>
            <TabletContent/>
            <TabletFooter/>
        </Grid>
    </div>
);

export default TabletComponentNumbers;
