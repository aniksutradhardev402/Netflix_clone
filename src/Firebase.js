import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword ,signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "__FIREBASE_API_KEY__",
    authDomain: "__FIREBASE_AUTH_DOMAIN__",
    projectId: "__FIREBASE_PROJECT_ID__",
    storageBucket: "__FIREBASE_STORAGE_BUCKET__",
    messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
    appId: "__FIREBASE_APP_ID__",
    measurementId: "__FIREBASE_MEASUREMENT_ID__"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app)

const signup = async (name,email,password) => {
        try{
          const res =await createUserWithEmailAndPassword(auth,email,password);
          const user = res.user;
          // console.log("User created successfully:", user)
          await addDoc(collection(db,"user"),{
                uid: user.uid, 
                name ,
                authProvider: "local",
                email ,
                
            })
            console.log("User created successfully")

        }

        catch(error){
            console.error("Error creating user:", error)
            alert(error.message)
        }
}

const login = async (email,password) => {
    try{
        const res = await signInWithEmailAndPassword(auth,email,password)
        const user = res.user;
        console.log("User logged in successfully:", user)
    }
    catch(error){
        console.error("Error logging in:", error)
        alert(error.message)
    }
}

const logout = () => {
    signOut(auth).then(() => {
        console.log("User logged out successfully")
    }).catch((error) => {
        console.error("Error logging out:", error)
    })
}

export {auth,signup,login,logout}