// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'; // To access a piece of state. We are going to use this to access and display the counter and logged reducer
// import {incrementL, decrementL, blastL} from '../actions';
// import {Card, Image, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


// function Lincoln() {
//     const counterL = useSelector(state => state.counterL)
//     const dispatch = useDispatch(); // Allows us to dispatch actions 

// return(
// <Card.Group>
// <Card className='card'>
// <Image src='https://i.ebayimg.com/images/g/wtwAAOSwE4Rbca1r/s-l300.jpg' wrapped ui={false} />
// <Card.Content>
//   <Card.Meta>Team: Blaster Blades</Card.Meta>
//   <Card.Description>
//     <Button onClick ={() => dispatch(incrementL())} > +</Button>
//     <Button onClick ={() => dispatch(blastL(5))} > BLAST!</Button>
//     <Button onClick ={() => dispatch(decrementL())} > -</Button>
//   </Card.Description>
//   <h1>Lincoln   {counterL} </h1>
// </Card.Content>
// </Card>
// </Card.Group>
// )}

// export default Lincoln;