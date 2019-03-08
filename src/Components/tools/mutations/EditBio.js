import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const EDIT_BIO = gql`
mutation editBio($biography: String) {
    editBio(biography: $biography) {
        biography
    }
  }
`

const EditBio = (props) => {
    const [biography, setBio] = useState('')

    return (
        <Mutation variables={{ biography: biography }} mutation={EDIT_BIO} refetchQueries={['bio']}>
      {(editBio, { _, error, loading }) => {
        if (error) {
          console.log(error);
        }
        return (
          <div>
              <Text name="" id="" cols="30" rows="10" defaultValue={props.bio} onChange={e => setBio(e.target.value)}/>
            <button onClick={() => editBio()}>Edit Bio</button>
          </div>
        );
      }}
    </Mutation>
    );
};

export default EditBio;

const Text = styled.textarea`
  border: 1px solid #eee;

  &:focus {
    outline: 1px solid lightblue;
  }
`