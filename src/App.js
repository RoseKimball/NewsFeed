import React, {useEffect, useState} from 'react';
import StoriesContainer from './containers/StoriesContainer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export const App = () => {
	const client = new ApolloClient({
		uri: 'http://localhost:4000'
	})
	return (
		<ApolloProvider client={client}>
			<StoriesContainer />
		</ApolloProvider>
	);
}; 