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

// register button here initialize user inputs value from 
    $("#resgisterBtn").on("click", (e) => {
        e.preventDefault();

        const email = $("#UserNameEmail").val();
        const password = $("#PasswordInput").val();
// and then createUserWithEmailAndPassword function grab that input value to create user email&password
        auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            if (error) {
                console.log(error);
            }



        })
    });
    $("#logout").on("click", function(){
        auth.signOut().then(function(){
            console.log("it's logined out");
            
        })
    })





});

