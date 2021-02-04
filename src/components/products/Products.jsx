import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Product } from './Product';

export const Products = () => {
    const [listItems, setListItems] = useState(
        Array.from(Array(30).keys(), n => n + 1)
      );
    
      const [isFetching, setIsFetching] = useState(false);
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
      }, [isFetching]);
    
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight
        )
          return;
        setIsFetching(true);
      };
    
      const fetchMoreListItems = () => {
        setTimeout(() => {
          setListItems(prevState => [
            ...prevState,
            ...Array.from(Array(20).keys(), n => n + prevState.length + 1)
          ]);
          setIsFetching(false);
        }, 2000);
      };
    
      return (
        <div className="products__main">
            <Header />
            <div className="container">
                <div className="row">
                {   
                    listItems.map((listItem, n) => (
                        <Product key={n} />
                    ))
                }
                </div>
            </div>
            { isFetching && <p className="products__load">Cargando más productos</p>}
        </div>
      );
}

