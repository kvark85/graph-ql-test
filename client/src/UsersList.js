import React, {memo} from 'react'
import PropTypes from 'prop-types';

const UsersList = ({users = []}) => {
  return(
    <>
      {users.map((user) => {
        return (
          <div style={{border: '1px solid black', marginBottom: 4}} key={user.id}>
            <h5>Name: {user.name}</h5>
            <h5>Username: {user.username}</h5>
            <h5>age: {user.age}</h5>
            <h5>age: {user.nationality}</h5>
          </div>
        )
      })}
    </>
  )
}

UsersList.propTypes = {
  users: PropTypes.array,
};

export default memo(UsersList)
