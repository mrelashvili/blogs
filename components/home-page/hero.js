import Image from 'next/image';
import classes from './../../styles/home-page/hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/f1.jpg"
          alt="Image of avatar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
        totam, nihil fuga vitae iusto similique iure dicta doloribus aliquid!
      </p>
    </section>
  );
};

export default Hero;
