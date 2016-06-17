import React from 'react'

import api from '../api'
import MoviePoster from './MoviePoster'
import GenreList from './GenreList'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      movies: {results: []},
      genres: []
    }
  },

  componentDidMount () {
    api.getMovies(this.renderMovies)
    api.getGenreList(this.giveGenreList)
  },

  renderMovies (err, movies) {
    var item = movies.results[Math.floor(Math.random()*movies.results.length)]
    var arr = [item]
    console.log(item, 'item');

    this.setState({
      error: err,
      movies: {results: arr}
    })
  },

  giveGenreList (err, genreObj) {
    console.log("giveGenreList", genreObj.genres);
    this.setState({
      error: err,
      genres: genreObj.genres
    })
  },

  refreshMovie () {
      api.getMovies(this.renderMovies)
  },

  render() {
    console.log(this.state.genres, "state here");
    return (
          <div id="main_container">
              <h1>WHAT THE FUCK SHOULD I WATCH?</h1>
              <GenreList genreList = {this.state.genres}/>
              <MoviePoster movie={this.state.movies.results}/>
              <p><a href='#' onClick={this.refreshMovie}>I DON'T WANT TO WATCH THAT SHIT</a></p>
              <button onClick={this.refreshMovie}>refresh button</button>
          </div>
      )
    }

})
