import Image from 'next/image';

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <div className="max-w-4xl mb-16 border-b pb-8">
      <div className="h-[81vh] min-h-[500px] relative  border bg-neutral-50 ">
        <Image
          src={src}
          alt={`${title}`}
          className="object-contain"
          fill={true}
        />
      </div>
      <h3 className="tracking-tight leading-tight pt-4 text-gray-500 text-l">{title}</h3>
    </div>
  );
};

export default CoverImage;
