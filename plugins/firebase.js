import firebase from "firebase"
// import firebase from 'firebase/app'
// import config from '~/firebase.config'

if (!firebase.apps.length) {
  // 認証情報を使用したモジュールの初期化
  firebase.initializeApp({
    apiKey: "AIzaSyAI_vkUb49-J6p_E0W4lKzVdD7m3nxd-00",
    authDomain: "fir-tsuzuki.firebaseapp.com",
    databaseURL: "https://fir-tsuzuki.firebaseio.com",
    projectId: "fir-tsuzuki",
    storageBucket: "fir-tsuzuki.appspot.com",
    messagingSenderId: "48484073209",
    appId: "1:48484073209:web:42413162e6a2a4215a6c28",
    measurementId: "G-RP7ET38LSQ"
  });
}

export default firebase