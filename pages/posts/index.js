import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-utils";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials."
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
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
