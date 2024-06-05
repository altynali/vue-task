<template>
  <v-switch v-model="checked" label="Verbose view" @change="emitChange" color="primary"></v-switch>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      checked: this.value
    };
  },
  watch: {
    value(newValue) {
      this.checked = newValue
    },
    checked(newValue) {
      this.$emit('input', newValue)
    }
  },
  methods: {
    emitChange() {
      this.$emit('input', this.checked)
    }
  }
};
</script>
