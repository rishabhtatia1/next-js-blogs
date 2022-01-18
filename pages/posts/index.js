import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};
export function getStaticProps() {
  try {
    const featuredPosts = getAllPosts();
    return {
      props: { posts: featuredPosts }
    };
  } catch (e) {
    return {
      props: { posts: [] }
    };
  }
}
export default AllPostsPage;
