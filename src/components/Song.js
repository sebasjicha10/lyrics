import React, {Fragment} from "react"
import PropTypes from "prop-types"


const Song = ({lyrics}) => {
    if(lyrics.length === 0) return null

    return (
        <Fragment>
            <h2>Lyrics</h2>
            <p className="lyrics">{lyrics}</p>
        </Fragment>
    )
}

Song.propTypes = {
    lyrics: PropTypes.string.isRequired
}
 
export default Song