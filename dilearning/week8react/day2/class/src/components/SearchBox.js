import React from 'react';

const SearchBox = (props) =>{
    const {daniel} = props
    return(
        <div>
            <input
            className = 'pa3 bs b--green bg-light blue'
            placeholder = 'Search...' type='search'
            onChange={daniel}
            onClick={daniel}
            />
            <button className='pa3 bs b--green bg-light blue'>Search</button>
        </div>
    )

}
export default SearchBox;