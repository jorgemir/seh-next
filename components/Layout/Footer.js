import Link from 'next/link';

export default () => (
    <footer className="Footer flex items-center justify-between px-4 py-3 bg-gray-300">
      <div>&copy; Sport Event Hotels</div>
      <ul className="sm:flex sm:items-center sm:justify-between">
            <li><Link href="http://wwww.twitter.com"><a className="block text-gray-900 font-semibold rounded px-2 py-1 hover:bg-gray-400">twitter</a></Link></li>
            <li><Link href="mailto:sporteventhotels@gmail.com"><a className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">email us</a></Link></li>
            <li><Link href="http://wwww.instagram.com"><a className="block text-gray-900 font-semibold rounded px-2 py-1 mt-1 hover:bg-gray-400 sm:mt-0 sm:ml-2">instagram</a></Link></li>
        </ul>
    </footer>
  );