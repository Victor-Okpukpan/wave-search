import Link from "next/link";
import Parser from "html-react-parser";

interface Url {
  type: string;
  template: string;
}

interface Query {
  request: object[];
  nextPage: object[];
}

interface Context {
  title: string;
}

interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

interface Item {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: object;
}

interface SearchResult {
  kind: string;
  url: Url;
  queries: {
    request: Query[];
    nextPage: Query[];
  };
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

interface WebSearchResultsProps {
  results: SearchResult;
}

export default function WebSearchResults({ results }: WebSearchResultsProps) {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-56">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        {results.searchInformation?.formattedTotalResults} results{" "}
        {results.searchInformation?.formattedSearchTime} seconds{" "}
      </p>

      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
