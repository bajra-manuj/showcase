import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,

  authDomain: VITE_AUTH_DOMAIN,

  projectId: VITE_PROJECT_ID,

  storageBucket: VITE_STORAGE_BUCKET,

  messagingSenderId: VITE_MESSAGING_SENDER_ID,

  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIRESTORE_DATABASE = getFirestore(app);

export default async function getProjects() {
  let projects: any[] = [];
  try {
    const q = query(collection(FIRESTORE_DATABASE, 'projects'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
      projects.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error('error: ', e);
  }
  return projects;
}
