import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3HUg5iOqmOx_opIkuiesSracWKba_AXw",
  authDomain: "beewebquestdb.firebaseapp.com",
  projectId: "beewebquestdb",
  storageBucket: "beewebquestdb.appspot.com",
  messagingSenderId: "1096710598125",
  appId: "1:1096710598125:web:c7df32081499d066804be4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
