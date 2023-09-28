import Image from 'next/image';

type Props = {
  src: string;
  vertical?: boolean;
  title: string;
  priority?: boolean;
};

const CoverImage = ({ title, src, vertical, priority }: Props) => {
  return vertical ? (
    <div className="h-[81vh] min-h-[500px] relative bg-neutral-200 border-b">
      <Image
        priority={priority}
        src={src}
        alt={`${title}`}
        className="object-contain"
        fill={true}
      />
    </div>
  ) : (
    <div className="bg-neutral-100 border-b">
      <Image
        priority={priority}
        src={src}
        alt={`${title}`}
        width={1000}
        height={667}
      />
    </div>
  );
};
export default CoverImage;
