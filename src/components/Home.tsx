import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Header, Message } from 'semantic-ui-react';

import Container from './lib/ui/Container';

function Home() {
  const { data, loading } = useQuery(HELLO_QUERY);

  return (
    <Container>
      <Header>Home</Header>

      <Message>
        <Message.Header>BackendAPI says:</Message.Header>
        {loading ? <p>loading</p> : <p>{data ? data.hello : 'Error tyring to call the backend'}</p>}
      </Message>
    </Container>
  );
}

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default Home;
