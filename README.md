# The repository contains both server and client components that are compatible with GraphQL

## To run the project:

In first terminal:
```sh
cd .\client\
npm install
npm run start
```

In second terminal:
```sh
cd .\server\
npm install
npm run start
```
### Users queries:

```
// Operation
query GetAllUsers {
  users {
    ...on UsersSuccessfulResult {
      users {
        id
        name
        age
      }
    }

    ...on UsersErrorResult {
      message
    }
  }
}
```

```
// Operation
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    friends {
      name
    }
    favoriteMovies {
      name
      yearOfPublication
    }
  }
}
// Variables
{ "userId": "2" }
```

### Users mutations:

```
// Operation
mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(input: $createUserInput) {
    id
    name
    username
    age
    nationality
  }
}
// Variables
{
  "createUserInput": {
    "name": "Aaa",
    "username": "Bbb",
    "age": 20,
    "nationality": "BRAZIL"
  }
}
```

```
// Operation
mutation UpdateUserName($input: UpdateUserNameInput!) {
  updateUserName(input: $input) {
    id
    name
    username
  }
}
// Variables
{
  "input": {
    "id": "2",
    "newUserName": "AAAAAAAAA",
  }
}
```

```
// Operation
mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
    name
  }
}
// Variables
{ "deleteUserId": "2" }
```

### Movies queries:

```
// Operation
query GetMovies {
  movies {
    id
    name
  }
}
```

```
// Operation
query GetMovie($movieName: String) {
  movie(name: $movieName) {
    id
    name
    yearOfPublication
  }
}
// Variables
{ "movieName": "Movie CCC" }
```

### Mixed Query example:

```
query MixedQueryUsersAndMovies {
  users {
    ...on UsersSuccessfulResult {
      users {
        id
        name
        age
      }
    }

    ...on UsersErrorResult {
      message
    }
  }
  movies {
    name
  }
}
```
