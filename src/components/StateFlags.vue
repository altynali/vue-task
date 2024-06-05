<template>
  <v-card>
    <v-card-title>State Flags</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(flag, index) in filteredFlags" :key="index">
          <v-list-item-content class="d-flex align-center">
            <v-icon :color="flag.active ? 'green' : 'red'" class="mr-2">
              {{ flag.active ? 'mdi-check-circle' : 'mdi-close-circle' }}
            </v-icon>
            <v-list-item-title :style="{ color: flag.active ? 'green' : 'red' }">
              {{ flag.description }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed } from 'vue'
import { useAppStore } from '../stores/app'

export default {
  props: ['flags'],
  setup(props) {
    const store = useAppStore()
    const verbose = computed(() => store.verbose)

    const filteredFlags = computed(() => {
      return verbose.value ? props?.flags : props.flags?.filter(flag => flag.active)
    })

    return {
      filteredFlags
    }
  }
}
</script>
