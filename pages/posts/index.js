import AllPosts from '@/components/posts/all-posts';
import React from 'react';

const DUMMY = [
  {
    title: 'txt',
    image: 'getting-started-nextjs.png',
    excerpt: 'nextjs is framework for react',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'txt',
    image: 'getting-started-nextjs.png',
    excerpt: 'nextjs is framework for react',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'txt',
    image: 'getting-started-nextjs.png',
    excerpt: 'nextjs is framework for react',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
];

const AllPostsPages = () => {
  return <AllPosts posts={DUMMY} />;
};

export default AllPostsPages;
