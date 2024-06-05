<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-icon v-if="iconVisible" class="mr-2" :color="iconColor">{{ icon }}</v-icon>
      <span class="font-weight-bold">{{ label }}:</span> &nbsp;
      <span v-html="value"></span>
    </v-list-item-title>
  </v-list-item-content>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    iconVisible: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'mdi-eye'
    },
    iconColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>
