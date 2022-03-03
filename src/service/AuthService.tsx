import { getApp } from "firebase/app";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class AuthService {
  auth: any;
  constructor(firebaseApp: any) {
    this.auth = getAuth(firebaseApp);
  }

  waitForUser(callback: any) {
    return onAuthStateChanged(this.auth, (userCred) => {
      callback(userCred);
    });
  }

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCred) => {
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }

  async logout() {
    await signOut(this.auth);
  }
}

export default new AuthService(getApp());
