import Image, { ImageProps } from "next/image";
import { SyntheticEvent, useState } from "react";

export interface FallbackImageProps extends ImageProps {
  fallbackSrc?: string;
  src: string;
  placeholder?: "blur" | "empty";
}

const fallback = "/images/fallback.svg";
const blurDataUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EABYQAQEBAAAAAAAAAAAAAAAAAFEAAf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AWOBTlf/Z";

const ImageWithFallback = ({
  alt = "",
  src = "",
  fallbackSrc = fallback,
  blurDataURL = blurDataUrl,
  placeholder = "blur",
  ...props
}: FallbackImageProps) => {
  const [onErrorSrc, setOnErrorSrc] = useState<string | undefined>(undefined);

  const handleOnError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (e?.currentTarget?.src !== fallbackSrc) {
      console.warn(`Image with src = ["${src}"],  could not load`);
      setOnErrorSrc(fallbackSrc);
    }
  };

  return (
    <Image
      onError={(e) => handleOnError(e)}
      onLoadingComplete={(result) => {
        if (!result || result.naturalWidth * result.naturalHeight === 0) {
          setOnErrorSrc(fallbackSrc);
        }
      }}
      alt={alt}
      src={
        onErrorSrc
          ? onErrorSrc
          : src?.startsWith("/images")
          ? src
          : `/api/imageProxy?url=${encodeURIComponent(src)}`
      }
      fill
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
};

export default ImageWithFallback;
