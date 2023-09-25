import Link from 'next/link';
import { TagType } from '../interfaces/post';

type Props = {
  tags?: TagType[];
};

export default function Tags({ tags }: Props) {
  return (
    tags && (
      <ul className="flex mb-4">
        {tags.map(({ name, slug }, index) => {
          return (
            <li key="index">
              {' '}
              <Link
                as={`/tags/${slug}`}
                href="/tags/[slug]"
                className="mr-2 hover:underline border pr-4 pl-4 p-1 block"
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
}
