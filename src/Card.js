import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = ({
  body = null,
  btns = [],
}) => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    {btns && btns.length && (
      <CardActions>
        {btns.map((btn) => <FlatButton {...btn} />)}
      </CardActions>
    )}
    {body && (
      <CardText expandable={true}>
        {body}
      </CardText>
    )}
  </Card>
);

export default CardExampleExpandable;
