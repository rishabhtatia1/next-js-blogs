import AllPosts from "../../components/posts/all-posts";

const AllPostsPage = () => {
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
  return <AllPosts posts={DUMMY_POSTS} />;
};
export default AllPostsPage;
