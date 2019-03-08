import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const REMOVE_EVENT = gql`
  mutation removeEvent($id: ID!) {
    removeEvent(id: $id) {
      event
    }
  }
`;

const CancelEvent = ({id}) => {
    return (
        <Mutation mutation={REMOVE_EVENT} refetchQueries={['events']}>
        {(removeEvent, { data, loading, error }) => {
          return (
            <button onClick={() => removeEvent({ variables: { id } })}>
              X
            </button>
          );
        }}
      </Mutation>
    );
};

export default CancelEvent;