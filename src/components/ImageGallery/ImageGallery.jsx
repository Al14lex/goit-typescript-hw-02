import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick}) {
    return (
        <ul>
          { items.map((item) => (
            <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
              <ImageCard url={item.urls.small} alt={item.alt_description} />
            </li>
          ))}
        </ul>
    )
}