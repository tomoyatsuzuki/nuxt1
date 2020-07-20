<template>
  <section class="container">
    <nuxt-link to="/">Home</nuxt-link>
      <h2>Firebase API 掲示板</h2>
      <h4>【axios と Firestore でデータを POST, GET】</h4>
  <div>
    <v-text-field v-model="name" label="ニックネーム" :rules="rules" hide-details="auto"></v-text-field>
    <v-text-field v-model="comment" label="コメント"></v-text-field>
    <br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <br>
    </div>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </section>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    }
  },
  created() {
    axios.get('https://firestore.googleapis.com/v1/projects/fir-tsuzuki/databases/(default)/documents/users').then(res => {
      this.posts = res.data.documents
      // console.log(res.data.documents)
      })
    },
  methods: {
    //REST API で Firebase にデータを送る
    createComment() {
      axios.post('https://firestore.googleapis.com/v1/projects/fir-tsuzuki/databases/(default)/documents/users',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      this.name=""
      this.comment=""
      }
    }
  }

</script>

<style>
.container{
  text-align: center;
}
</style>