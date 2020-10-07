const fetchUsers = response => ({
    type: 'FETCH_USERS',
    response
  })

const addUsers = response => ({
  type: 'ADD_USER',
  response
})

export const usersActions = {
  fetchUsers,
  addUsers
};
