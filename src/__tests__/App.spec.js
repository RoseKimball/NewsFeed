import React from 'react';
import { act } from 'react-dom/test-utils';
import { App } from '../App';
import { render, cleanup } from '@testing-library/react';
import { storyIds, singularStory } from '../fixtures/index';
import { getStory, getStoryIds } from '../services/HackerNewsAPI';
import { useInfiniteScroll } from '../hooks/UseInfiniteScroll';
import { STORY_INCREMENT } from '../constants/index';

beforeEach(cleanup);
 
test('renders the application', async() => {
    useInfiniteScroll.mockImplementation(() => ({
        count: STORY_INCREMENT,
    }));
    getStory.mockImplementation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

    await act(async () => {
        const { getByText, queryByTestId } = render(<App />)
        await waitForElement(() => [
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('Hacker News Stories')).toBeTruthy(),
            expect(getByText('story-by')).toBeTruthy(),
        ])
    })
})