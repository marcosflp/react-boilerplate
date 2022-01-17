import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import getApiUrl from '../getApiUrl';

const httpLink = createHttpLink({
  uri: getApiUrl(),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;
