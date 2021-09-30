function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  friends.forEach(function (item) {
    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = [item.firstName, item.lastName].join(" ");
  });

  return ul;
}
