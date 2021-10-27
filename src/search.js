import Data from "./data.json"

const SearchBar = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search the Emoji Here"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
        
    </form>
);

export default SearchBar;