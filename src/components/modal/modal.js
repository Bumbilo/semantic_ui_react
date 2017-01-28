import React, {Component} from 'react';
import { Button, Header, Icon, Modal, Segment, Grid, Dropdown, Select } from 'semantic-ui-react';
import './modal.css';


const InvalidMessage = () => (
  <Segment basic className="invalid_message">
    Invalid email address format.
  </Segment>
)
const HeaderTitle = () => (
  <div>
    <Header as='h1' className="header_title">Update record infromation!</Header>
  </div>
)
const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        hello
      </Grid.Column>
      <Grid.Column>
        Dropdown
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
const SelectExample = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

const ModalWindow = () => (
  <Modal trigger={<Button>Show Modal</Button>} closeIcon='close'>
    <Header>
      <InvalidMessage  />
      <HeaderTitle />
    </Header>  
    <Modal.Content className="modal_content">
      <GridExampleVerticallyDivided />
    </Modal.Content>
  </Modal>
)

export default ModalWindow;