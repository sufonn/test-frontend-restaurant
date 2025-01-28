interface ThumbnailProps {
  src: string;
  altText: string;
}

const Thumbnail = ({ src, altText }: ThumbnailProps) => {
  return (
    <div className="">
      <img src={src} alt={altText} />
    </div>
  );
};

export default Thumbnail;
