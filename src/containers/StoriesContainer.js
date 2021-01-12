import React, {useEffect, useState, memo} from 'react';
import { getStoryIds } from '../services/HackerNewsAPI';
import Story from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/UseInfiniteScroll';
const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])
    const { count } = useInfiniteScroll();

    useEffect(() => {
        console.log('count', count)
        getStoryIds().then(data => setStoryIds(data))
        
    }, [count])

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id='stories-container'>
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map((storyId, i) => (
                    <Story key={i} storyId={storyId}/>
                ))}
            </StoriesContainerWrapper>
        </>
    )
    
}

export default StoriesContainer;