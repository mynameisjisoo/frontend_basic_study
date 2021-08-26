"use strict";
//hoisting : var 변수와 function 선언이 제일 위로 올라가는 것

//callback helll example
class UserStorage {
  /*1. 사용자에게 id와 password받아옴
    2. 그걸 이용해서 서버에 login
    3. roles요청해서 받아옴-> 사용자의 이름과 역할 출력 
    */
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    UserStorage.getRoles(
      user,
      (userWithRoles) => {
        alert(
          `hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
