import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/post-utils";

const HomePage = ({ posts }) => {
  return (
    <div>
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
