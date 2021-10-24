import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  credentials: "include",
  uri: "http://localhost:4000/graphql",
})