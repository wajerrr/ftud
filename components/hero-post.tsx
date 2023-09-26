import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  vertical?: boolean;
};

const HeroPost = ({ title, coverImage, vertical, slug }: Props) => {
  return (
    <section className="mb-5">
      <Link as={`/p/${slug}`} href="/p/[slug]">
        <CoverImage vertical={vertical} title={title} src={coverImage} />
        <h3 className="tracking-tight leading-tight pt-4 text-gray-500 text-l">
          {title}
        </h3>
      </Link>
    </section>
  );
};

export default HeroPost;
