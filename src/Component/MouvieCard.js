import React from 'react';
import {Card,Button} from 'react-bootstrap';





function MouvieCard({mouvie}) {
  return <div  >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mouvie.posterUrl} />
  <Card.Body>
    <Card.Title>{mouvie.title}</Card.Title>
    <Card.Text>
    {mouvie.description}
    </Card.Text>
    <Button variant="primary">Go To Description</Button>
  </Card.Body>
</Card>
  </div>;
}

export default MouvieCard;
