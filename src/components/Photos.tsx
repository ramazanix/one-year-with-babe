import { galleryImages } from "@/images";
import { Photo } from ".";

export const Photos: React.FC = () => {
  return (
    <>
      <h1 className="gallery-title">爱的画廊</h1>
      <div className="gallery-wrapper">
        {galleryImages.map((image, idx) => (
          <Photo
            src={image.src}
            key={image.src}
            idx={idx}
          />
        ))}
      </div>
    </>
  );
};
