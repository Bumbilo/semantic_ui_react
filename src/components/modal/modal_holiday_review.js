import React, {Component} from 'react';
import {
   Button,
   Image,
   Modal,
   Header,
   List,
   Grid,
   Icon
} from 'semantic-ui-react';
import ImgConnect from '../../images/time_request.png';
import '../../CSS/fonts.css';
import './modal.css';
import ava from '../../images/avaBig.png';

const HeaderTitle = () => (
   <div className='header_title'>
      <Image src={ImgConnect} className="img_header"/>
      <Header as='h2' className="header_title_check">
         Request review</Header>
   </div>
);

const ViewProfile = () => (
   <div className="view_holiday">
      <div className="view_holiday_title">
         <div className="holiday_title_user">
            <Image src={ava} avatar size='mini'/>
            <span className="profile_info">
               <span className="profile_name">James Smith</span>
               <br/>
               <span className="profile_position">Mechanical Designer</span>
            </span>
            <div className="holiday_date">
               <div className="hodiday_date_block">
                  <span className="profile_name">
                     7 days
                  </span>
               </div>
               <button className="square green">
                  <Icon name="checkmark"/>
               </button>
            </div>
         </div>

      </div>
   </div>

);

const GridExampleVerticallyDivided = () => (
   <Grid divided='vertically'>
      <Grid.Row>
         <Grid.Column>
            <ViewProfile/>
         </Grid.Column>
      </Grid.Row>
      <Grid.Row>
         <Grid.Column>
            <Button basic className="button_center">Cancel</Button>
         </Grid.Column>
      </Grid.Row>
   </Grid>
);

const ModalHolidayReview = () => (
   <Modal trigger={< Button > Show Modal </Button>} closeIcon='close'>
      <Header>
         <HeaderTitle/>
      </Header>
      <Modal.Content className="modal_content">
         <GridExampleVerticallyDivided/>
      </Modal.Content>
   </Modal>
);

export default ModalHolidayReview;
