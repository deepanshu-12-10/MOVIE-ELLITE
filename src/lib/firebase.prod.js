import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


///////import {seedDatabase} from '../seed';

// we need to somehow seed the database

// we ned a config here 

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const firebase = Firebase.initializeApp(config);

/////////seedDatabase(firebase);

export{firebase};
