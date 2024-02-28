import { SearchResult } from '@/types';
import { SearchResultSchema } from '@/utils';
import * as v from 'valibot';

export default async function getWikiResults(
  searchTerm: string
): Promise<SearchResult | undefined> {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  });
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`
  );
  if (!response.ok) return undefined;
  try {
    const json = await response.json();
    const validationResult = v.parse(SearchResultSchema, response);

    return json;
  } catch (error) {
    console.error('efron error:', error);
  }
  return {};
}
