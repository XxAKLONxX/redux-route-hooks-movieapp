import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/Actions/actions';
import { ADD } from '../Redux/Actions/ActionTypes';
import addNewMouvie from '../Redux/Reducer';


function Add() {
  const mouvielist = useSelector((state) => state.mouvieList)
  const dispatch = useDispatch()
  const [name, setName] = useState()
  
  
  
  return <div>
  <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text"  onChange={(e)=> setName(e.target.value)}  />
    
    <Form.Text className="text">
      We'll share your added movie onse verified.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Poster Path/URL</Form.Label>
    <Form.Control type="text" />
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" />
  </Form.Group></Form.Group>
  
  <Button onClick={() => dispatch(add(    {
        id: 17,
        title: name,
        rate: 4,
        description:
            "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
        trailer: "https://www.youtube.com/embed/6QRvTv_tpw0",
    }))} variant="primary">

    Submit
  </Button>
  
</Form>

</div>


}




export default Add;
