var firstNameInput = document.querySelector('.textbox1');

var lastNameInput = document.querySelector('.textbox2');

var emailInput = document.querySelector('.textbox3');

var form = document.querySelector('.form');

var userStore = ObjectStore();

var list = document.querySelector('.list__users');

var searchBox = document.querySelector('.search-box');

var sortSelect = document.querySelector('.sort');

form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log('btn clicked');
  addUser();

});

function clearValue() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
}

function addUser() {

  var newUser = {
    email: emailInput.value,
    lastName: lastNameInput.value,
    firstName: firstNameInput.value
  };

  if (userStore.add(User(newUser))) {

    userStore.add(User(newUser));

    showUserStore();

    clearValue();

  }
}

function printUserString(obj) {

  var userString = obj.firstName + '          ' + obj.lastName + '         ' + obj.email;

  var listLi = document.createElement("li");

  var listXdiv = document.createElement("button");

  var itemString = document.createTextNode(userString);


  listLi.appendChild(itemString);
  listLi.appendChild(listXdiv);
  list.insertBefore(listLi, list.childNodes[0]);

  listLi.className += "list-item";
  listXdiv.className += "list-item__closebtn";
  listXdiv.id = i;
  listXdiv.textContent = "X";

  listXdiv.addEventListener('click', function(e) {

    var userObjArr = userStore.query();

    var x = event.target;

    console.log(x.id);
    userStore.remove(userObjArr[x.id]);

    showUserStore();

  });
}

function clearDom() {

  list.innerHTML = '';

}

function showUserStore() {

  clearDom();

  var userObjArr = userStore.query();

  for (i = 0; i < userObjArr.length; ++i) {

    var userObj = userObjArr[i];

    printUserString(userObj);

  }
}

searchBox.addEventListener('keyup', function(e) {

  clearDom();

  var userObjArr = userStore.query();

  for (i = 0; i < userObjArr.length; ++i) {

    var userString = userObjArr[i].firstName + ' ' + userObjArr[i].lastName + ' ' + userObjArr[i].email;

    var userObj = userObjArr[i];

    var n = (userString).search(searchBox.value);

    if ((n >= 0) && (searchBox.value.length > 0)) {

      console.log(userObj);

      printUserString(userObj);

    } else if (searchBox.value.length > 0){

    } else {

      showUserStore();
    }
  }
});

function getSortVal(sel) {
  clearDom();

  var value = sel.value;

  console.log(value);

  var userObjArr = userStore.query();

  function compare(a,b) {
    if (a.lastName < b.lastName) {

      return -1;
    }
    if (a.lastName > b.lastName) {

      return 1;
    }
    return 0;
  }

  if (value === 'alpha') {

    var newUserObjArr = userObjArr.sort(compare);
    var reverse = newUserObjArr.reverse(compare);
    console.log(value);

  } else if (value === 'reverse') {

    userObjArr.sort(compare);

  } else {

  }

  for (i = 0; i < userObjArr.length; ++i) {

    var userString = userObjArr[i].firstName + ' ' + userObjArr[i].lastName + ' ' + userObjArr[i].email;

    var userObj = userObjArr[i];

    printUserString(userObj);

  }
}
