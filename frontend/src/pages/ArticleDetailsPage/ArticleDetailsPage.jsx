import React from 'react';
import { Link } from 'react-router-dom';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { images } from '../../constants';
import SuggestedPosts from './container/SuggestedPosts';
import CommentContainer from '../../components/CommentContainer/CommentContainer';

const breadCrumbsData = [
  { name: 'Home', link: '/' },
  { name: 'Blog', link: '/blog' },
  { name: 'Article Title', link: '/blog/1' },
];

const postsData = [
  {
    _id: '1',
    image: images.Post1Image,
    title: 'Help children get better',
    createdAt: '2023',
  },
  {
    _id: '2',
    image: images.Post1Image,
    title: 'Help children get better',
    createdAt: '2023',
  },
  {
    _id: '3',
    image: images.Post1Image,
    title: 'Help children get better',
    createdAt: '2023',
  },
  {
    _id: '4',
    image: images.Post1Image,
    title: 'Help children get better',
    createdAt: '2023',
  },
];

const tagsData = [
  'Medical',
  'Lifestyle',
  'Learn',
  'Healthy',
  'Food',
  'Diet',
  'Education',
];

const ArticleDetailsPage = () => {
  return (
    <section className='container mx-auto max-w-7xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
      <article className='flex-1'>
        <BreadCrumbs data={breadCrumbsData} />
        <img src={images.Post1Image} alt='' className='rounded-xl w-full' />
        <Link
          to='/blog?category=selectedCategory'
          className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'
        >
          EDUCATION
        </Link>
        <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
          Help children get better education
        </h1>
        <div className='mt-4 text-dark-soft'>
          <p className='leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores reiciendis recusandae cumque velit. Consectetur cumque
            obcaecati dolor dignissimos, esse recusandae odit quo sequi amet
            earum ipsum nesciunt ea vitae.
          </p>
        </div>
        <CommentContainer className='mt-10' loggedInUserID='a' />
      </article>
      <SuggestedPosts
        header={'Latest Articles'}
        posts={postsData}
        tags={tagsData}
        className='mt-8 lg:mt-0 lg:max-w-sm'
      />
    </section>
  );
};

export default ArticleDetailsPage;
