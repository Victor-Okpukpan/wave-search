import CountryLookupAPI from "./CountryLookupAPI";

export default function FooterComponent() {
  return (
    <footer className="absolute bottom-0 w-full px-4 py-5 bg-gray-200">
      <div className="border-b border-b-gray-400 pb-2">
        <CountryLookupAPI />
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 justify-between items-center pt-2">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
