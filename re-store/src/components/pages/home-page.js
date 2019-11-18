import React from 'react';
import BookList from '../book-list'; 
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
    //test data
    // const books = [
    //     { id: 1,
    //       title: 'Production-Ready Microservices',
    //       author: 'Susan J. Fowler'},

    //       { id: 2,
    //        title: 'Release It!',
    //        author: 'Michael T. Nygard'}
    //  ];
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
      
  );
};

export default HomePage;