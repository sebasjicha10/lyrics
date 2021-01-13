import React, {useState} from "react"
import PropTypes from "prop-types"


const Form = ({setLyricsSearch}) => {

    const [search, setSearch] = useState({
        artist: "",
        song: "",
    })
    const [error, setError] = useState(false)

    const {artist, song} = search

    // Function for every input to read it's content
    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // Call APIs
    const handleSubmit = e => {
        e.preventDefault()

        if(artist.trim() === "" || song.trim() === "") {
            setError(true)
            return
        } 
        setError(false)
        
        // Send data to main Component
        setLyricsSearch(search)
    }

    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">All Fields are Mandatory</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Song Lyrics Browser</legend>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist's Name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song's Name"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>

                            </div>
                            <button type="submit"
                                type="submit"
                                className="btn btn-primary float-right"
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    setLyricsSearch: PropTypes.func.isRequired
}
 
export default Form