import style from './Pagination.module.css';

const Pagination = ({ allProducts, pagination, currentPage }) => {
  const totalPages = Math.ceil(allProducts / 9);

  return (
    <div className={style.paginationContainer}>
      <a className={style.link} onClick={() =>
        pagination(currentPage === 1 ? currentPage : currentPage - 1)
      }
      > Prev </a>
      {currentPage} de {totalPages}
      <a className={style.link} onClick={() =>
        pagination(currentPage === totalPages ? currentPage : currentPage + 1)
      }
      > Next </a>
    </div>
  );
};

export default Pagination;
