import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { App } from '../App';
import { storyIds, singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/HackerNewsAPI';
import { useInfiniteScroll } from '../hooks/UseInfiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/UseInfiniteScroll');

jest.mock('../services/HackerNewsAPI', () => ({
	getStory: jest.fn(),
	getStoryIds: jest.fn(),
}));

test('renders the application', async () => {
	useInfiniteScroll.mockImplementation(() => ({
		count: STORY_INCREMENT,
	}));
	getStory.mockImplementation(() => Promise.resolve(singularStory));
	getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

	const { getByText, queryByTestId } = render(<App />);
	await waitForElement(() => [
		expect(getByText('Hacker News Stories')).toBeTruthy(),
		expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
	]);
});