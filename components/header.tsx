import Link from 'next/link';
import { BLOG_NAME } from '../lib/constants';

const Header = () => {
  return (
    <header>
      <h1 className="bg-neutral-50 border-b border-neutral-200 text-2xl font-semi-bold tracking-tight leading-tight p-2">
        <Link href="/" className="hover:underline">
          {BLOG_NAME}
        </Link>
      </h1>
    </header>
  );
};

export default Header;
