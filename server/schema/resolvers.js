const { UserList, MoviesList } = require('../FaceData')
const { _ } = require('lodash')

const resolvers = {
  Query: {
    // USER RESOLVES
    async users() {
      if(UserList) {
        return { users: UserList }
      }

      return { message: 'Yo, there was an error' }
    },
    user(parent, args) {
      console.log('parent from User =', parent)
      const id = args.id

      return UserList.find(user=> {
        return user.id === Number(id)
      })
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MoviesList
    },
    movie: (parent, args) => {
      const name = args.name

      return MoviesList.find(user=> {
        return user.name === name
      })
    }
  },
  User: {
    favoriteMovies: (parent) => {
      console.log('parent from "favoriteMovies" =', parent)

      return MoviesList.filter((movie) => {
        return movie.yearOfPublication > 2015
      })
    }
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input
      const lastId = UserList[UserList.length - 1].id

      user.id = lastId + 1
      UserList.push(user)

      return user
    },
    updateUserName: (parent, args) => {
      const { id, newUserName } = args.input
      let userUpdated

      UserList.forEach((user) => {
        if(user.id === Number(id)) {
          user.username = newUserName

          userUpdated = user
        }
      })

      return userUpdated
    },
    deleteUser: (parent, args) => {
      const id = args.id
      _.remove(UserList, (user) => {return user.id === Number(id)})
      return null
    }
  },
  UsersResult: {
    __resolveType (obj) {
      if(obj.users) {
        return 'UsersSuccessfulResult'
      }

      return 'UsersErrorResult'
    }
  }
}

module.exports = { resolvers }
