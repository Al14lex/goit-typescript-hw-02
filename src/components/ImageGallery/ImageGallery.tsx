import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../images-api";

interface PropsGallery {
  items: Photo[];
  onImageClick: (url: string) => void;
}

 const ImageGallery: FC<PropsGallery> = ({ items, onImageClick}) => {
    return (
        <ul>
          { items.map((item) => (
            <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
              <ImageCard url={item.urls.small} alt={item.alt_description ?? ''} />
            </li>
          ))}
        </ul>
    )
}
export default ImageGallery;