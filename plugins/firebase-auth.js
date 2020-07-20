// export default ({
//   store
// }) =>
// firebase.auth().onAuthStateChanged(async () => {
//   const currentUser = firebase.auth().currentUser

//   // currentUserがnullならnull, それ以外は名前、photoURL, uid, メアドを引数として渡す
//   const payload = currentUser ?
//     {
//       photoURL: currentUser.photoURL,
//       photuidoURL: currentUser.uid,
//       email: currentUser.email,
//       name: currentUser.displayName
//     } :
//     null

//   store.commit('setCurrentUser', payload)
// })