import {
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../utilis/utilis.js";

const sumbitForm = document.getElementById("sumbitForm");

sumbitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const img = e.target[0].files[0];
  const email = e.target[1].value;
  const password = e.target[2].value;
  const firstName = e.target[4].value;
  const lastName = e.target[5].value;
  const phone = e.target[6].value;
  const company = e.target[7].value;
  // console.log(img);

  const userInfo = {
    img,
    email,
    password,
    firstName,
    lastName,
    phone,
    company,
  };

  console.log(userInfo);

  //Creating Account
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log("user=>", user.user.uid);
    })
    .catch((err) => {
      alert(err);
    });

  //Uploading Image
  const userRef = ref(storage, `user/${user.user.uid}`); //error
  uploadBytes(userRef, img)
    .then(() => {
      console.log("user image uploaded");
//getting url of img that we uploaded
      getDownloadURL(userRef)
        .then((url) => {
          console.log("We got a URL", url);
        })
        .catch((err) => {
          console.log("We cant get the URL from FireBase");
        });
    })
    .catch(() => {
      console.log("Error in uploading image");
    });
});
