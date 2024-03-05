import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ProjProps } from "./designProject";

const ImageWrapper = ({
  imageUrl,
  portrait,
}: {
  imageUrl: ProjProps["imageUrl"];
  portrait?: boolean;
}) => {
  return (
    <div>
      {Array.isArray(imageUrl) && imageUrl.length > 1 ? (
        <Carousel>
          <CarouselContent>
            {imageUrl.map((url, index) => (
              <CarouselItem key={index}>
                <div key={index}>
                  <Image
                    src={url}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={500}
                    style={{
                      width: portrait ? "60%" : "100%",
                      height: "auto",
                    }}
                    className="rounded-md shadow-lg mx-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : typeof imageUrl === "string" ? (
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="Single Image"
            width={500}
            height={500}
            style={{
              width: portrait ? "60%" : "100%",
              height: "auto",
            }}
            className="rounded-md shadow-lg"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ImageWrapper;
