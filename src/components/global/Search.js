const Search = ({ searchQuery, setSearchQuery, headerLight }) => {
    // https://www.emgoto.com/react-search-bar/
    return (
        <>
            <div className={`search_container ${headerLight === true ? "light_header" : "dark_header"}`}>
                <form action="/productlist" method="get">
                    <input
                        value={searchQuery}
                        onInput={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        className="input_search"
                        placeholder="Søg efter produkt eller designer"
                        id="header-search"
                        name="s"
                    />
                    <button type="submit" className="search_btn"><span className="search_icon"></span></button>
                </form>
            </div>
        </>
    );
}

export default Search;