function namify(users) {
  for (let i in users) {
    users[i] = users[i].name;
  }
  return users;
}
