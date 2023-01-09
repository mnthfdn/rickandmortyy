import LocationCards from "../component/LocationCards/LocationCards";
import Pagination from "../component/Paginations/Pagination";

function LocationPages({ results, pageNumber, setPageNumber, info }) {
  return (
    <div  style={{width: '100%'}}>
      <LocationCards results={results} />
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default LocationPages;
