import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import EditBio from '../mutations/EditBio';

const GET_BIO = gql`
query {
    bio {
      biography
    }
}
`
const web = <a href="http://www.thenostalgics.org/">thenostalgics.org</a>;

const GetBio = ({admin}) => {
    return (
        <Query query={GET_BIO}>
        {({loading, data}) => {
            if(loading) {
              return <p>Loading...</p>
            }
            return admin ? (
                <EditBio bio={data.bio.biography}/>
            ) : (
                <div className="bio_text">
              <pre>{data && data.bio.biography}</pre>
              <pre>
                {`
Check out my band's website here!
`}
                {web}
              </pre>
            </div>
            )
        }}
            
        </Query>
    );
};

export default GetBio;