import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="lg:px-24 px-4">
      <div className="flex">
        <div className="flex flex-col space-y-4 justify-end py-8 flex-1">
          <h1 className="capitalize text-5xl font-semibold">
            A blog for all ages and website lovers
          </h1>
          <p className="">
            This Blog is perfect if you have a blog idea and you want to share.
            Using its high-quality sections and components you can showcase your
            blog articles in a very beautiful and unique way.
          </p>
          <button className="bg-primary-brand text-primary-bg w-44 py-2 rounded">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center flex-1">
          <Image
            src="/images/hero.webp"
            alt="extended family hero image"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;