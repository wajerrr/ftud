import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

type Props = {
  title: string;
  photo: string;
  date: string;
  excerpt: string;
  slug: string;
  vertical?: boolean;
  priority?: boolean;
};

const HeroPost = ({ title, photo, vertical, slug, priority }: Props) => {
  return (
    <section className="mb-5">
      <Link as={`/p/${slug}`} href="/p/[slug]">
        <CoverImage
          priority={priority}
          vertical={vertical}
          title={title}
          src={photo}
        />
        <h2 className="tracking-tight leading-tight pt-4 text-gray-500 text-l">
          {title}
        </h2>
      </Link>
    </section>
  );
};

export default HeroPost;
