const Banner = ({ src, altText }: ImageProps) => {
  return (
    <div className="banner">
      <img src={src} alt={altText} />
    </div>
  );
};

export default Banner;
