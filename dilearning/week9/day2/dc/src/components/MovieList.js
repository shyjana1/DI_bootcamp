import React from 'react'
import {connect} from 'react-redux'

class MovieList extends React.Component {
    render
constructor() {
    super()
}
render() {
    return (
        <div>
        movie List
        </div>

    )
}
}
const mapStateToProps = (state) => {
    return{
        movie: state.movies
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList)