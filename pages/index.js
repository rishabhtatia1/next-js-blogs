import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/post-utils";

const HomePage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Rishabh's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  try {
    const featuredPosts = getFeaturedPosts();
    return {
      props: { posts: featuredPosts }
    };
  } catch (e) {
    return {
      props: { posts: [] }
    };
  }
}
export default HomePage;
