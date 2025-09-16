import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@heroui/react";

interface ImageGalleryProps {
  images: readonly string[];
}

const ImageGallery = memo(({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setImageLoaded(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex]}
          className="w-full max-w-xl h-65 md:h-80 overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Skeleton isLoaded={imageLoaded} className="w-full h-full rounded-lg">
            <img
              loading="lazy"
              src={images[activeIndex]}
              alt={`Project image ${activeIndex + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </Skeleton>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3">
        {images.map((img, index) => (
          <motion.div
            key={img}
            className={`w-15 h-19 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${index === activeIndex
              ? "border-blue-500"
              : "border-transparent"
              }`}
            onClick={() => handleThumbnailClick(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              loading="lazy"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default ImageGallery;

ImageGallery.displayName = "ImageGallery";
