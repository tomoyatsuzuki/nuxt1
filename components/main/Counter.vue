<template>
  <section class="container">
  <v-card class="mx-auto" max-width="400" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <img height="200" width="200" src="~assets/images/sample.png">
        <h2 class="overline mb-4">コンポーネント1</h2>
        <h3> counter: {{ $store.state.count }}</h3>
        <v-list-item-subtitle>Vuex commit version</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
    <v-btn  @click="$store.commit('countUp')" >+1</v-btn>
    <v-btn  @click="$store.commit('countMore')">×2</v-btn>
    <v-btn  @click="$store.commit('reset', 0)">リセット</v-btn>
      <div v-for="(item, i) in items" :key="i">
     <p>{{item.name}}</p>
     <p class='center'>{{item.age}}</p>
      </div>
    </v-card-actions>
  </v-card>
  </section>
</template>

<script>
  export default {
    data() {
    },
    methods: {
    },
    props:[
      'items'
    ]
  }
</script>

<style scoped>
.center {
text-align: center;
}
</style>