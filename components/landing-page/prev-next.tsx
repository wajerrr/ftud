import Link from 'next/link';
import { PrevNextPostType } from '../../interfaces/post';

type Props = {
  previousPost: PrevNextPostType;
  nextPost: PrevNextPostType;
};

export default function PrevNextMenu({ previousPost, nextPost }: Props) {
  return (
    <div className='mb-2 mt-2 h-10'>
      {nextPost && (
        <Link
          as={`/p/${nextPost.slug}`}
          href="/p/[slug]"
          className="hover:underline border float-left p-2 block"
        >
          {`<<<`} Next
        </Link>
      )}

      {previousPost && (
        <Link
          as={`/p/${previousPost.slug}`}
          href="/p/[slug]"
          className="hover:underline float-right border p-2 block"
        >
          Previous {`>>>`}
        </Link>
      )}
    </div>
  );
}
