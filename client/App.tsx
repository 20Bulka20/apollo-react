import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRegistry } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  gql,
  ApolloProvider,
  createHttpLink 
} from '@apollo/client';

const cache = new InMemoryCache()
const LOCAL_SYSTEM_IP_ADDRESS = '192.168.2.122'

const client = new ApolloClient({
  link: createHttpLink({
    uri: `http://${LOCAL_SYSTEM_IP_ADDRESS}:4000/graphql`,
  }),
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
// const cache = new InMemoryCache({});
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   cache,
//   uri: 'http://localhost:4000/graphql'
// });
// client
//   .query({
//     query: gql`
//     query GetUsers {
//       getUsers {
//     userName    
//       }
//     }
//     `
//   })
//   .then(result => console.log(result));