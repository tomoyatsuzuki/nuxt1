<template>
  <div class="container">
    <nuxt-link to="/">Home</nuxt-link>
    <h1>Firestore の練習</h1>
    <h2>async await を使って非同期処理を実行</h2>
    <h4>Firestore SDK を使ってコレクション>ドキュメント>フィールドからデータを追加・取得
    </h4>
    <div>
      名前<input v-model="name" type="text" class="form-control">
      コメント<input v-model="comment" type="text" class="form-control">
       id<input v-model="id" type="text" class="form-control">
      <button @click="btnClick" type="submit" class="btn btn-primary">送信</button>
      <button @click="updateUser" type="submit" class="btn btn-primary">更新</button>
    </div>
    <p v-for="(user, i) in users" :key="i">
      {{user}}
    </p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'
const db = firebase.firestore()

export default {
  data() {
    return {
      name: "",
      comment: "",
      id: ""
    }
  },
  methods: {
    btnClick() {
      db.collection('users').add({
        "name": this.name,
        "comment": this.comment
       })
      },
    async updateUser() {
      const userRef = db.collection('users').doc(this.id)
      await userRef.update({
        name: this.name,
        comment: this.comment,
        // updatedAt: firebase.firestore.FieldValue.serverTimestamp()
       })
     }
    },
  async asyncData() {
    const snapshot = await db
      .collection('users')
      // .where('name', '==', 'a')
      .get()
    const users = snapshot.docs.map(doc => doc.data())
    return {
      users: users
    }
  }
}
</script>