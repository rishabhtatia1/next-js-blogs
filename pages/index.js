import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production  - it makes building fullstack React apps and sites a breeze and ships with built-in-SSR",
    date: "2022-02-10"
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production  - it makes building fullstack React apps and sites a breeze and ships with built-in-SSR",
    date: "2022-02-10"
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a React framework for production  - it makes building fullstack React apps and sites a breeze and ships with built-in-SSR",
    date: "2022-02-10"
  }
];
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};
export default HomePage;
