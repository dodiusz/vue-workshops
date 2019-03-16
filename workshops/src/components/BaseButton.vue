<template>
  <label>
    {{ label }}
    <Button
      :disabled="loading"
      value="Click me"
    >
      Click me
    </Button>
  </label>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: true,
      default: 'default'
    },
    loading: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
