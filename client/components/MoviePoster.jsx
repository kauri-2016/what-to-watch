import React from 'react'

export default React.createClass({

  render() {
    return (
      <div>
        {this.props.movie.map((movie) => {
          return (
            <div id="movie_info_container">

              <div className="col-sm-3 split">
                <h2>{movie.title} </h2>
                <p>{movie.overview}</p>
                <p>Rating: {movie.vote_average}/10</p>
                <p><a href='#' className="button" onClick={() => {this.props.refresh()}}>I DON'T WANT TO WATCH THAT</a></p>
              </div>

              <div className="col-sm-3 split">
                <img className='movie_poster' src={"http://image.tmdb.org/t/p/w500//" + movie.poster_path}></img>
              </div>

            </div>
          )
        })}
      </div>
    )
  }
})
