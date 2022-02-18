import React from "react";
import { getPagesArray } from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
        {pagesArray.map(thisPage =>
          <span
            onClick={() => changePage(thisPage)}
            key={thisPage}
            className={page === thisPage ? 'page page__current' : 'page'}>{thisPage}</span>)}
      </div>
    )
}

export default Pagination;