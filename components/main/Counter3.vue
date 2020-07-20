<template>
  <section class="container">
  <v-card class="mx-auto" max-width="400" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <img height="200" width="200" src="~assets/images/sample.png">
        <h2 class="overline mb-4">コンポーネント3</h2>
        <h3> counter: {{ $store.state.count3 }}</h3>
        <v-list-item-subtitle>mapActions version</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
    <v-btn  v-on:click="countUp3" >+1</v-btn>
    <v-btn  v-on:click="countMore3">×2</v-btn>
    <v-btn  v-on:click="reset3(0)">リセット</v-btn>
    </v-card-actions>
  </v-card>
  </section>
</template>

<script>
import { mapActions } from "vuex"
  export default {
    data() {
    },
    methods: {
      ...mapActions(["countUp3", "countMore3", "reset3"])
    },
  }
</script>