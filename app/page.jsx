import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";

async function fetchHeroSection() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/hero-sections?populate=*", options);
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}


export default async function Home() {
  const heroContent = await fetchHeroSection();
  const { attributes: { title, description, image } } = heroContent[0];
  console.log(heroContent);
  
  return (
    <main className="flex min-h-screen space-y-8 my-8 flex-col">
      <HeroSection title={title} description={description} image={image} />
    </main>
  );
}
