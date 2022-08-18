import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

import Producto from "../../../commons/Productos/Producto";

const Productos = () => {
  const toys = useSelector((state) => state.data.toys);
  const rechange = useSelector((state) => state.data.rechange);

  const [currentPage, setCurrentPage] = useState(1);  
  const [postsPerPage] = useState(8);

  useEffect(() => {}, [rechange]);

  // Get Current Page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = toys.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:flex-col">
        {currentPosts.map((item) => {
          return (
            <Producto
              item={item}
              grid={
                "col-span-2 flex md:col-span-2 md:flex-col lg:col-span-1 py-2"
              }
              img={
                "w-[120px] h-[164px] md:w-[260px] md:h-[338px] lg:w-[260px] lg:h-[338px]"
              }
              key={item.id}
            />
          );
        })}
      </div>
      <div className="col-span-2 md:col-span-4">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={toys.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Productos;
