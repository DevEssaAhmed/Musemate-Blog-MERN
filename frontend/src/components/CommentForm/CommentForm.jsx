import React, { useState } from 'react';

const CommentForm = ({ btnLabel }) => {
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue('');
  };

  return (
    <form omSubmit={submitHandler}>
      <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
        <textarea
          className='w-full focus:outline-none bg-transparent'
          rows='5'
          placeholder='Leave your comment here'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button
          className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2'
          type='submit'
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
