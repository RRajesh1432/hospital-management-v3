import ReactPaginate from "react-paginate";

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Prev"
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      activeClassName="active"
    />
  );
}

export default Pagination;
