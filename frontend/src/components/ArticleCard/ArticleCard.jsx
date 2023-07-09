import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { images } from '../../constants';

const ArticleCard = ({ className }) => {
  const post =1
  return (
    <div
      className={`${className} roudned-xl overflow-hidden  shadow-[rgba(7,_65,_2100,_0.1)_0px_9px_30px]`}
    >
      <img
        src={images.Post1Image}
        alt=''
        className='rounded-t-md w-full object-cover object-center h-auto md-h-52 lg:h-48 xl:h-60'
      />
      <div className='p-5'>
        <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px] '>
          Future of Work
        </h2>
        <p className='text-dark-light mt-3 text-sm md:text-lg '>
          Majority of people will work in jobs
        </p>
        <div className='flex justify-between flex-nowrap items-center mt-6'>
          <div className='flex items-center gap-x-2 md:gap-x-2.5'>
            <div>
              <img
                src={images.PostProfile}
                alt='post profile'
                className='w-9 h-9 md:w-9 md:h-9'
              />
            </div>
            <div className='flex flex-col'>
              <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                Viola Manisa
              </h4>
              <div className='flex items-center gap-x-2 '>
                {/* <span
                  className={`${
                    post.user.verified ? 'bg-[#36B37E]' : 'bg-red-500'
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className='w-1.5 h-1.5 text-[#36B37E]' />
                  ) : (
                    <AiOutlineClose className='w-1.5 h-1.5 text-red-500' />
                  )}
                </span> */}
                {/* <span className='italic text-dark-light text-xs md:text-sm'>
                  {post.user.verified ? 'Verified' : 'Unverified'} writer
                </span> */}

                <span className='italic text-dark-light text-xs md:text-sm'>
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className='font-bold text-dark-light italic text-sm md:text-base'>
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
