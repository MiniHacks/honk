import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: "AIzaSyCgVHSYmw4aLTFkNggbfH01FtvVUJ9ag_A",
    authDomain: "honk-b8a7f.firebaseapp.com",
    projectId: "honk-b8a7f",
    storageBucket: "honk-b8a7f.appspot.com",
    messagingSenderId: "992174185745",
    appId: "1:992174185745:web:9236f28b7c5d484e5600b0"
  };

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials)
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== 'undefined') {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ('measurementId' in clientCredentials) {
        getAnalytics()
      }
    }
    return app
  }
}
