import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '@/services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-black shadow-lg rounded-lg p-8 pb-12 mb-8 top-28">
      <h3 className="text-xl text-center text-white mb-8 font-semibold border-gray-500 rounded-md border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className="cursor-pointer text-white  block p-1 pl-3 my-2 rounded-md hover:bg-pink-900">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;