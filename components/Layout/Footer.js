import Link from 'next/link';

export default () => (
    <footer className="Footer flex items-center justify-between px-4 py-3 bg-gray-300">
      <div>&copy; Sport Event Hotels</div>
      <ul>
            <li><Link href="http://wwww.twitter.com"><a>twitter</a></Link></li>
            <li><Link href="mailto:sporteventhotels@gmail.com"><a>email us</a></Link></li>
            <li><Link href="http://wwww.instagram.com"><a>instagram</a></Link></li>
        </ul>
    </footer>
  );