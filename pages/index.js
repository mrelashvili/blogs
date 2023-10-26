import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
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

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY} />
    </>
  );
};

export default HomePage;
