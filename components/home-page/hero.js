import classes from "./hero.module.css";
import NextImage from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <NextImage
          src="/images/site/rishabh.jpeg"
          alt="Profile Image"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi , I'm Rishabh</h1>
      <p>I work on web development - especially React and NodeJS </p>
    </section>
  );
};

export default Hero;
