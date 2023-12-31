import Link from 'next/link';
import { TagType } from '../interfaces/post';

type Props = {
  tags?: TagType[];
};

export default function Tags({ tags }: Props) {
  return (
    tags && (
      <ul className="flex flex-wrap mb-4 w-[100%]">
        {tags.map(({ name, slug }, index) => {
          return (
            <li key={index} className="my-2">
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
