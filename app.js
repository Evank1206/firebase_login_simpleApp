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

    let currentUser = "";

    // onAuthStateChanges() function
    auth.onAuthStateChanged(user => {

        if (user) {     //if user true 
            console.log("User-Logged-In: " + user.uid);
            currentUser = user.uid;     //save user/unique ID to in variable
            $("#formContainer").hide();
            // user page TEXT
            const userPageText = $("<h1/>");
            userPageText.text("Login in User Page");
            $(".UserContainer").append(userPageText);
            // USER PAGE input & button
            $(".UserContainer").append("<input type='text' id='todoText'/><input type='button' value='Submit' id='submitBtn'/>");
            // USER PAGE logOut button From
            $(".UserContainer").append("<input type='button' id='logOutFromUserBtn' value='LogOut'/>");
            // sign out from USER PAGE function
            $(document).on("click", "#logOutFromUserBtn", function (e) {
                e.preventDefault();
                // $("main").show()
                auth.signOut().then(function () {
                    console.log("it's logined out");
                    $(".UserContainer").hide();
                    // $("main").show()

                })
            })

        } else { // if not true
            console.log("not signed in");
            $("main").show();
            // $("main").empty();

        }
    });

    // USER PAGE input submit button
    $(document).on("click", "#submitBtn", function (e) {
        e.preventDefault();

        let UserLoggedPageInputValue = $("#todoText").val();
        //    console.log(UserLoggedPageInputValue);
        db.ref(currentUser).set({
            UserLoggedPageInputValue: UserLoggedPageInputValue
        })
        // console.log(currentUser);

    })

    // register button here initialize user inputs value from 
    $("#resgisterBtn").on("click", (e) => {
        e.preventDefault();

        const email = $("#UserNameEmail").val();
        const password = $("#PasswordInput").val();
        // and then createUserWithEmailAndPassword function grab that input value to create user email&password
        if (email && password == 0) {
            alert("enter email address")
        } else {
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
                console.log(err.message);
                alert(err.message)

            }
        })
    })





});

