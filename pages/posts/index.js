import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import React from 'react';

const AllPostsPages = (props) => {
  return <AllPosts posts={props.posts} />;
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPages;
