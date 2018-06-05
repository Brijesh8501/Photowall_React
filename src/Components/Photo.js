import React from 'react'
import PropTypes from "prop-types";

function Photo(props)
{
    const eachData = props.eachPost
    return <figure className="figure">
        <img src={eachData.imageLink} alt={eachData.description} className="photo"/>
        <figcaption><p>{eachData.description}</p></figcaption>
        <div className="btnContainer">
            <button className="btn" onClick= {() => { props.removePropsToPhoto(eachData) }}>Remove</button>
        </div>
    </figure>
}
Photo.propTypes = {
    eachPost : PropTypes.array.isRequired,
    removePropsToPhoto : PropTypes.func.isRequired

}

export default Photo