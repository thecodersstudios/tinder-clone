export const getMatchedUser = (users, loggedInUserId) => {
  return Object.values(users).find((user) => user.id !== loggedInUserId);
};
