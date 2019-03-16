<template>
  <div id="wrapper-button">
    {{ label }}
    <input
      :type="type"
      :value="value"
      v-on="listeners"
      @input="customInput"
      @change="logChange"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
      default: 'example label'
    },
    type: {
      type: String,
      required: false,
      default: 'submit'
    },
    size: {
      type: Number,
      required: false,
      default: 20
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    listeners () {
      const { input, ...listeners } = this.$listeners
      return listeners
    }
  },
  methods: {
    customInput (exent) {
      this.$emit('customInput', event.target.value)
      console.log('customInput', event.target.value)
    },
    logChange (event) {
      console.log('change', event)
    }
  }
}
</script>

<style scoped>

</style>
