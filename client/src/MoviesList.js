import React, { memo  } from 'react'
import PropTypes from 'prop-types';

const MoviesList = ({movies = []}) => {
  return(
    <>
      {movies.map((user) => {
        return (
          <div style={{border: '1px solid black', marginBottom: 4}} key={user.id}>
            <h5>Movie name: {user.name}</h5>
          </div>
        )
      })}
    </>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default memo(MoviesList)
