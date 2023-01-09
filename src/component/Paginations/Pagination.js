import ReactPaginate from "react-paginate";

const Pagination=({info, pageNumber, setPageNumber}) => {
    return (<div className="navigate"><ReactPaginate 
    className="pagination"
    nextLabel=' > '
    nextClassName="page-link next"
    previousClassName="page-link prev"
    previousLabel=' < '
    pageClassName="page-item"
    activeClassName="active"
    pageCount={info?.pages} 
    pageLinkClassName='page-link'
    onPageChange={(data) => {setPageNumber(data.selected)}}/></div>)
}

export default Pagination;