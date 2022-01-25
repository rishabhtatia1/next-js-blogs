import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

const PostItem = ({ post }) => {
  const formattedDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return newDate;
  };
  const imagePath = `/images/posts/${post?.slug}/${post?.image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${post?.slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{post?.title}</h3>
            <time>{formattedDate(post?.date)}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
