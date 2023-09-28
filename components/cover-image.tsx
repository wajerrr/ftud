import Image from 'next/image';

type Props = {
  src: string;
  vertical?: boolean;
  title: string;
  index?: number;
};

const CoverImage = ({ title, src, vertical, index = 4 }: Props) => {
  return vertical ? (
    <div className="h-[81vh] min-h-[500px] relative bg-neutral-200 border-b">
      <Image
        priority={Boolean(index < 3)}
        src={src}
        alt={`${title}`}
        className="object-contain"
        fill={true}
      />
    </div>
  ) : (
    <div className="bg-neutral-100 border-b">
      <Image src={src} alt={`${title}`} width={1912} height={1613} />
    </div>
  );
};
export default CoverImage;
