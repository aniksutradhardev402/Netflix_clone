import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword ,signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDYi0LOre7wfucsC5ziJjhnAi6J0KcrGLw",
  authDomain: "netflixclone-b60d3.firebaseapp.com",
  projectId: "netflixclone-b60d3",
  storageBucket: "netflixclone-b60d3.firebasestorage.app",
  messagingSenderId: "971222601237",
  appId: "1:971222601237:web:c47548cdbc93a3e7d4c81c",
  measurementId: "G-3VTG8G3MK6"
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