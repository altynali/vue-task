<template>
  <v-card>
    <v-card-title>Owner</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item v-for="(value, key) in displayedInfo" :key="key" class="pa-0">
          <DetailItem :label="key" :value="value" :iconVisible="key !== 'Handle'" />
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import DetailItem from './shared/DetailItem.vue'

export default {
  components: {
    DetailItem
  },
  props: {
    owner: {
      type: Object,
      required: true
    }
  },
  computed: {
    displayedInfo() {
      const info = {
        Handle: `<a href="#">${this.owner?.handle}</a>`
      }
      if (this.owner?.publish.organization) {
        info['Organization'] = this.owner?.organization
      }
      if (this.owner?.publish.name) {
        info['Name'] = this.owner?.name
      }
      return info
    }
  }
}
</script>
