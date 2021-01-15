import React, {useState, useEffect} from 'react';
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';
import {mapTime} from '../mappers/MapTime';

const Story = ({article}) => {
	const [story, setStory] = useState(article);

	return story && story.url ? (
		<>
			<StoryWrapper data-test-id='story'>
				<StoryTitle>
					<a href={story.url}>{story.title}</a>
				</StoryTitle>
				<StoryMeta>
					<span data-test-id='story_by'>
						<StoryMetaElement color='#000'></StoryMetaElement> 
					</span>
					<span data-test-id='story_time'>
						<StoryMetaElement color='#000'>Posted:</StoryMetaElement> {' '}
						{mapTime(story.time)}
					</span>
				</StoryMeta>
			</StoryWrapper>
		</>
	): null;
};

export default Story;