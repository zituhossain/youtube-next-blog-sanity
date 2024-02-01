import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ title, description, image }) => {
  const imageUrl = "http://127.0.0.1:1337" + image.data.attributes.url;

  return (
    <div className="lg:px-24 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col space-y-4 justify-end py-8 flex-1">
          <h1 className="capitalize text-3xl md:text-4xl font-semibold text-heading-color">
            {title}
          </h1>
          <p className="">{description}</p>
          <Link
            href="/contact"
            className="bg-primary-brand flex justify-center text-primary-bg w-44 py-2 rounded"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center flex-1">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={image.data.attributes.name}
              width={image.data.attributes.width}
              height={image.data.attributes.height}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
