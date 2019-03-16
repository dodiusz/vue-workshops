<template>
  <div>
    This is settings
    <br>
    <BaseInput
      label="label for button"
      value="asd"
      type="button"
    />
    <br>
    <BaseInput
      label="example input"
      type="text"
      value="type here"
      @input="input"
      @change="inputChanged"
      @customInput="customInput"
    />
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput'
export default {
  name: 'Settings',
  components: { BaseInput },
  methods: {
    input () {
      console.log('This shit wont work!')
    },
    customInput () {
      console.log('event from child')
    },
    inputChanged () {
      console.log('input changed!')
    }
  }
}
</script>

<style scoped>

</style>
