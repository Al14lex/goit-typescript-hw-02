import { FC } from "react";

interface PropsCard {
  url: string;
  alt: string;
}
const ImageCard: FC<PropsCard> = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;