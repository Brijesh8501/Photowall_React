import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props)
{
    return <div>
        <Link to="/navPage" className="addBtnIcon"></Link>
    <div className="photoGrid">
        {props.posts.map((post, index) => <Photo eachPost = {post} key = {index} removePropsToPhoto = {props.removeProps } />)}
    </div>
    </div>

}

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired,
    removeProps : PropTypes.func.isRequired

}
export default PhotoWall