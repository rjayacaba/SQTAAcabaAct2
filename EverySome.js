function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        
        return submittedUsers.every(e => goodUsers.some(a => a === e));
      };
    }

    module.exports = checkUsersValid;