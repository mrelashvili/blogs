import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY = {
  title: 'txt',
  image: 'getting-started-nextjs.png',
  excerpt: 'nextjs is framework for react',
  date: '2022-02-10',
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post',
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY.slug}/${DUMMY.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY.title} image={imagePath} />
      {DUMMY.content}
    </article>
  );
};

export default PostContent;
