import { galleryImages } from "@/images";
import Image from "next/image";

export const Photos: React.FC = () => {
  return (
    <div className="gallery-wrapper">
      {galleryImages.map((image) => (
        <div
          key={image.src}
          className={"gallery-image-wrapper"}
        >
          <Image
            className="gallery-image"
            src={image.src}
            alt="Love u"
            fill
          />
        </div>
      ))}
    </div>
  );
};
