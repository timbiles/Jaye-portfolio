import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_EVENT = gql`
  mutation addEvent($event: EventInput) {
    addEvent(event: $event) {
      event
      date
      location
    }
  }
`;

const inputField = ['event', 'date', 'location'];

const AddEvent = (props) => {
  const [events, setEvent] = useState({
    event: '',
    date: '',
    location: ''
  });

  const inputChange = e => {
    setEvent({ ...events, [e.target.name]: e.target.value });
  };

  const eventMap = inputField.map((el, i) => {
    return (
      <div className="events_mapper" key={i}>
        <p>{el}</p>
        <input type="text" name={el} onChange={inputChange}/>
      </div>
    );
  });

  return (
    <Mutation variables={{ event: events }} mutation={ADD_EVENT} refetchQueries={['events']}>
      {(addEvent, { data, error, loading }) => {
        if (error) {
          console.log(error);
        }
        return (
          <div>
            {eventMap}
            <button onClick={() => {addEvent(); props.closeModal()}}>Add Event</button>
          </div>
        );
      }}
    </Mutation>
  );
};

export default AddEvent;
