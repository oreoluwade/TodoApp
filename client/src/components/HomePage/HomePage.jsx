import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HomePage = () => (
  <Card>
    <CardHeader
      title="Hompage"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText>
      Welcome! Here, you can create Todos and
      mark them as completed when you are done.
    </CardText>
  </Card>
);

export default HomePage;
