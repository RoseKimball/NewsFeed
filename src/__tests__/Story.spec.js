import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Story } from '../components/Story';
import { singularStory } from '../fixtures';
import { getStory } from '../services/HackerNewsAPI';


beforeEach(() => {
	cleanup();
	jest.resetAllMocks();
});

jest.mock('../services/HackerNewsAPI', () => ({
	getStory: jest.fn(),
}));

test('renders story component', async () => {
	getStory.mockImplementation(() => Promise.resolve(singularStory));

	const { getByText, queryByTestId } = render(<Story storyId='1' />);
	await waitForElement(() => [
		queryByTestId('story'),
		expect(queryByTestId('story-by').textContent).toEqual('By: Rose Kimball'),
	]);
});