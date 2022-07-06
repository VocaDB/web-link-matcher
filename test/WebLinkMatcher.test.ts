import { WebLinkCategory } from '../src/WebLinkCategory';
import { WebLinkMatcher } from '../src/WebLinkMatcher';

test('matchWebLink match', () => {
	const result = WebLinkMatcher.matchWebLink(
		'http://www.youtube.com/user/tripshots',
	);

	expect(result).toBeDefined();
	if (result === undefined) throw new Error('result is undefined');
	expect(result.desc).toBe('YouTube Channel');
	expect(result.cat).toBe(WebLinkCategory.Official);
});

test('matchWebLink no match', () => {
	const result = WebLinkMatcher.matchWebLink('http://www.google.com');

	expect(result).toBeUndefined();
});
