<template>
  <div>
    <v-card v-if="!verbose">
      <v-card-title>Administrative Contacts</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="(contact, index) in contacts" :key="index" class="px-0">
            <v-list-item-content>
              <DetailItem :label="contact.name" :value="`<a href='#'>${contact.handle}</a>`" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <div v-else>
      <v-card v-for="(contact, index) in contacts" :key="index" class="mb-4">
        <v-card-title>Administrative Contact</v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item>
              <DetailItem :label="'Handle'" :value="`<a href='#'>${contact.handle}</a>`" />
            </v-list-item>
            <v-list-item>
              <DetailItem v-for="field in ['organization', 'name']" :key="field" :label="capitalize(field)"
                :value="contact[field]" :iconVisible="true" :icon="contact.publish[field] ? 'mdi-eye' : 'mdi-eye-off'"
                :iconColor="contact.publish[field] ? 'green' : 'red'" />
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
import DetailItem from './shared/DetailItem.vue'

export default {
  components: {
    DetailItem
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  setup() {
    const store = useAppStore()
    const verbose = computed(() => store.verbose)
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

    return {
      verbose,
      capitalize
    }
  }
}
</script>
