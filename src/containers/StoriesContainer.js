import React, {useEffect, useState, memo} from 'react';
import { useQuery } from '@apollo/react-hooks';

import Story from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/UseInfiniteScroll';
import { GET_ALL_ARTICLES } from '../graphql/get-all-articles';

const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const { data: { allArticles = [] } = {} } = useQuery(GET_ALL_ARTICLES);

	return (
		<>
			<GlobalStyle />
			<StoriesContainerWrapper data-test-id='stories-container'>
				<h1>Articles I recommend</h1>
				{allArticles && allArticles.slice(0, 100).map((article) => <Story key={article.id} article={article}/>)}
			</StoriesContainerWrapper>
		</>
	);
    
};

export default StoriesContainer;