'use strict';
//hoisting : var 변수와 function 선언이 제일 위로 올라가는 것

//callback helll example
class UserStorage {
  /*1. 사용자에게 id와 password받아옴
    2. 그걸 이용해서 서버에 login
    3. roles요청해서 받아옴-> 사용자의 이름과 역할 출력 
    */
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
