import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input onChange={searchChange} className="pa2 ba b--green bg-lightest-blue" type = "se arch" placeholder = "search robots"/>
        </div>
    );
}

export default SearchBox;