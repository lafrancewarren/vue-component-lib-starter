<template>
  <div class="global-style component-b">
    <input type="text" v-model="value">
    <button @click="onClick">Click me</button><br />
    <v-btn @click="onClick">Vuetify Click Me</v-btn>
  </div>
</template>

<script>
import MyMixin from '../mixins/MyMixin'

export default {
  mixins: [MyMixin],
  data () {
    return {
      value: this.hello()
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.component-b {
  background-color: lightgrey;
  padding: 10px;
  border-radius: 3px;
  button {
    font-weight: bold;
  }
}
</style>
