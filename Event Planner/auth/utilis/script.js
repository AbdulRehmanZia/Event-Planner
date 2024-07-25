import { auth, dataBase, storage, onAuthStateChanged } from './utilis.js';

// console.log(auth);
// console.log(storage);
// console.log(dataBase);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    window.location.href='/auth/login/index.html'
  }
});