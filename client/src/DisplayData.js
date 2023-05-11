import React, { useState } from 'react'
import UsersList from './UsersList'
import MoviesList from './MoviesList'
import {useQuery, gql, useLazyQuery, useMutation} from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            ...on UsersSuccessfulResult {
                users {
                    id
                    name
                    age
                    nationality
                    username
                }
            }

            ...on UsersErrorResult {
                message
            }
        }
    }

`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
        }
    }
`

const QUERY_GET_MOVIE_BY_NAME = gql`
    query GetMovie($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
        }
    }
`

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
        }
    }
`

const DisplayData = () => {
  const [counter, setCounter] = useState(0)

  // Create user start
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [nationality, setNationality] = useState('')

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const [movieSearched, setMovieSearched] = useState('')

  const { data: moviesData } = useQuery(QUERY_ALL_MOVIES)
  const {
    data: usersData,
    loading: isUsersLoading,
    refetch: refetchUsers
  } = useQuery(QUERY_ALL_USERS)
  const [
    fetchMovie,
    {
      data: movieSearchData,
      error: movieError
    }
  ] = useLazyQuery(QUERY_GET_MOVIE_BY_NAME)

  if(isUsersLoading) return <h1>Data is loading</h1>

  const handleChangeState = () => setCounter(counter + 1)
  const handleFetchMovieData = () => fetchMovie({ variables: {name: movieSearched } })

  return <div>
    <button onClick={handleChangeState}>changeState</button>
    <div>{counter}</div>

    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="user name"
        value={username}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      <input
        type="text"
        placeholder="Nationality"
        value={nationality}
        onChange={({ target }) => setNationality(target.value.toUpperCase())}
      />

      <button onClick={async () => {
        await createUser({variables: {
          input: {name, username, age: Number(age), nationality }
        }})

        await refetchUsers()
      }}
      >
        Add user
      </button>
    </div>

    <UsersList users={usersData?.users?.users} />
    <div>*************************************************</div>

    <MoviesList movies={moviesData?.movies}/>
    <div>*************************************************</div>

    <input
      type="text"
      placeholder="instellar"
      value={movieSearched}
      onChange={({ target }) => setMovieSearched(target.value)}
    />
    <button onClick={handleFetchMovieData}>Fetch data</button>
    <div>
      {movieSearchData &&
        <div>
          <h1>Movie Name: {movieSearchData.movie.name}</h1>
          <h1>Year Of Publication: {movieSearchData.movie.yearOfPublication}</h1>
        </div>
      }
      {movieError &&
        <div>
          <h5>There was an error fetching the data</h5>
          <div>{movieError.toString()}</div>
        </div>
      }
    </div>

  </div>
}

export default DisplayData
