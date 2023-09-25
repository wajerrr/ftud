import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,

  slug,
}: Props) => {
  return (
    <section className='mb-5'>
      <Link as={`/p/${slug}`} href="/p/[slug]">
        <CoverImage title={title} src={coverImage} />
      </Link>
    </section>
  );
};

export default HeroPost;
