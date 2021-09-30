function showSalary(users, age) {
  let usersArr = users.filter((user) => user.age <= age);

  // usersArr.forEach((user, i) => {
  //   if (i !== usersArr.length - 1) {
  //     str += `${user.name}, ${user.balance}\n`;
  //   } else {
  //     str += `${user.name}, ${user.balance}`;
  //   }
  // });

  let arr = usersArr.map((user, i) => `${user.name}, ${user.balance}`);

  let str = arr.join("\n");

  return str;

  //Знаю, что можно все сделать в 1 строчку, но так некрасиво :)
}
