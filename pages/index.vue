<template>
  <section class="container">
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/login/">login</nuxt-link>
      <nuxt-link to="/diary/">日記帳</nuxt-link>
      <nuxt-link to="/firestore/">日記帳2</nuxt-link>
      <Counter
        :items="items" />
        <Counter2 />
        <Counter3 />
        <p>a</p>
    </div>
  </section>
</template>

<script>
import Counter from '~/components/main/Counter.vue'
import Counter2 from '~/components/main/Counter2.vue'
import Counter3 from '~/components/main/Counter3.vue'
export default {
  data() {
    return {
      items: [
        {
      name: '[props]',
      age: 10
        },
         {
      name: '[v-for]',
      age: 20
        },
      ]
    }
  },
  components: {
    Counter,
    Counter2,
    Counter3
    }
  }
</script>