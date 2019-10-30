import Link from 'next/link';

export default () => (
    <footer className="Footer flex items-center justify-between px-4 py-3 bg-gray-300">
      <div>&copy; Sport Event Hotels</div>
      <ul className="sm:flex sm:items-center sm:justify-between">
            <li><a href="http://wwww.twitter.com/HotelsEvent" className="block text-gray-900 font-semibold rounded px-2 py-1 hover:bg-gray-400">twitter</a></li>
            <li><a href="mailto:sporteventhotels@gmail.com" className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">email us</a></li>
            <li><a href="http://wwww.instagram.com" className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">instagram</a></li>
        </ul>
    </footer>
  );