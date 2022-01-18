import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/post-utils";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};
export function getStaticProps(context) {
  try {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
      props: {
        post: postData
      },
      revalidate: 600
    };
  } catch (e) {
    return {
      props: {
        post: {}
      }
    };
  }
}
export function getStaticPaths() {
  const postFiles = getPostFiles();
  const slugs = postFiles.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  };
}
export default PostDetailPage;
