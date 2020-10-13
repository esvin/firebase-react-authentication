
import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBamqT8gVeWjVyPCcwF7nm18KAxL-BUGwY",
    authDomain: "learning-8dc7b.firebaseapp.com",
    databaseURL: "https://learning-8dc7b.firebaseio.com",
    projectId: "learning-8dc7b",
    storageBucket: "learning-8dc7b.appspot.com",
    messagingSenderId: "1038426454525",
    appId: "1:1038426454525:web:36e7110d83f820bf778194"
};

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;