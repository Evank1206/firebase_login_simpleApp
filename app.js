// jQuery starts here
$(document).ready(function () {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBYjyqZTaSr-nRqhHMmPA8XT0mM_j8lvR4",
        authDomain: "fir-login-f624a.firebaseapp.com",
        databaseURL: "https://fir-login-f624a.firebaseio.com",
        projectId: "fir-login-f624a",
        storageBucket: "fir-login-f624a.appspot.com",
        messagingSenderId: "259200884218",
        appId: "1:259200884218:web:cfc4ee1c67f638059b1843"
    };
    // firebase initialize here
    firebase.initializeApp(firebaseConfig);

    const db = firebase.database();
    const auth = firebase.auth();

    // onAuthStateChanges() function
    auth.onAuthStateChanged(user => {

        if (user) { //if user true 
            console.log("signed in");
        } else { // if not true
            console.log("not signed in");
            auth.signOut();

        }
    });


    // sign out function
    $("#logout").on("click", function (e) {
        e.preventDefault();

        auth.signOut().then(function () {
            console.log("it's logined out");

        })
    })


    // register button here initialize user inputs value from 
    $("#resgisterBtn").on("click", (e) => {
        e.preventDefault();

        const email = $("#UserNameEmail").val();
        const password = $("#PasswordInput").val();
        // and then createUserWithEmailAndPassword function grab that input value to create user email&password
        if(email && password == 0){
            alert("enter email address")
        }else{
            auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
                if (error) {
                    console.log(error);
                }
            })

        }
      


    });
    // login user
    $("#login").on("click", function (e) {
        e.preventDefault();

        const email = $("#UserNameEmail").val();
        const password = $("#PasswordInput").val();

        auth.signInWithEmailAndPassword(email, password).catch(err => {
            if (err) {
                console.log(err);

            }
        })
    })





});

