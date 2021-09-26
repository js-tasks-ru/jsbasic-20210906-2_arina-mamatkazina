function showSalary(users, age) {
  let str = "";
  let usersArr = users.filter((user) => user.age <= age);

  usersArr.forEach((user, i) => {
    if (i !== usersArr.length - 1) {
      str += `${user.name}, ${user.balance}\n`;
    } else {
      str += `${user.name}, ${user.balance}`;
    }
  });
  return str;
}
