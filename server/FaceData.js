const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Perodo",
        username: "PerodoTech",
        age: 20,
        nationality: "BRAZIL"
      },
      {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 20,
        nationality: "INDIA"
      }
    ]
  },
  {
    id: 2,
    name: "Perodo",
    username: "PerodoTech",
    age: 20,
    nationality: "BRAZIL"
  },
  {
    id: 3,
    name: "Sarah",
    username: "Cameron",
    age: 20,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Perodo",
        username: "PerodoTech",
        age: 20,
        nationality: "BRAZIL"
      },
    ]
  },
]

const MoviesList = [
  {
    id: 1,
    name: "Movie AAA",
    yearOfPublication: "2019",
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Movie BBB",
    yearOfPublication: "2023",
    isInTheaters: false,
  },
  {
    id: 3,
    name: "Movie CCC",
    yearOfPublication: "1985",
    isInTheaters: false,
  },
]

module.exports = { UserList, MoviesList }
