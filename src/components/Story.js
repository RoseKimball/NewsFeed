import React, {useState, useEffect} from 'react';
import {getStory} from '../services/HackerNewsAPI';
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';
import {mapTime} from '../mappers/MapTime';

const Story = ({storyId}) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, [])

    return story && story.url ? (
        <>
            <StoryWrapper data-test-id='story'>
                <StoryTitle>
                    <a href={story.url}>{story.title}</a>
                </StoryTitle>
                <StoryMeta>
                    <span data-test-id='story_by'>
                        <StoryMetaElement color='#000'>By:</StoryMetaElement> {story.by}
                    </span>
                    <span data-test-id='story_time'>
                        <StoryMetaElement color='#000'>Posted:</StoryMetaElement> {` `}
                        {mapTime(story.time)}
                    </span>
                </StoryMeta>
            </StoryWrapper>
        </>
    ): null
}

export default Story;