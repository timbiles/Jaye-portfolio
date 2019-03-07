import React, { useState } from 'react';
import moment from 'moment';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CancelEvent from '../mutations/CancelEvent';

const GET_EVENTS = gql`
  query events {
    events {
      id
      event
      date
      location
    }
  }
`;

const eventMap = (props) => {
  const [events, setEvents] = useState([])

    return (
      <Query query={GET_EVENTS}>
        {({ loading, data, error }) => {
          if (loading) {
            return <h1>Loading...</h1>;
          }
          if (error) {
            return <h1>THERE WAS AN ERROR</h1>;
          }
          setEvents(data.events)
          return events.map((el, i) => {
            return (
              <div className={props.styling} key={i}>
                <p>{moment.utc(el.date).format('D MMM')}</p>
                <p>{el.event}</p>
                <p>{el.location}</p>
                {props.edit && (
                  <CancelEvent id={el.id}/>
                )}
              </div>
            );
          });
        }}
      </Query>
    );
  }

export default eventMap;
