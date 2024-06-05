<template>
  <v-app class="pa-2">
    <Layout :user="user"/>
    <v-main>
      <v-container fluid>
        <p>{{ data?.fqdn }}</p>
        <MySwitch v-model="verbose" />
        <v-row>
          <v-col cols="12" md="8">
            <AuthInfo :expiresAt="data.expires_at" class="mb-4" />
            <Events :events="data.events" class="mb-4" />
            <StateFlags :flags="data?.state_flags?.flags" class="mb-4" />
          </v-col>
          <v-col cols="12" md="4">
            <Owner :owner="data.owner" class="mb-4" />
            <AdministrativeContacts :contacts="data.administrative_contacts" class="mb-4" />
            <NsSet :nsset="data.nsset" class="mb-4" />
            <KeySet :keyset="data.keyset" class="mb-4" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Layout from './layouts/Layout.vue'
import MySwitch from './components/MySwitch.vue'
import AuthInfo from './components/AuthInfo.vue'
import Owner from './components/Owner.vue'
import AdministrativeContacts from './components/AdministrativeContacts.vue'
import NsSet from './components/NsSet.vue'
import KeySet from './components/KeySet.vue'
import Events from './components/Events.vue'
import StateFlags from './components/StateFlags.vue'
import axios from 'axios'
import { useAppStore } from './stores/app'
import { computed, watch } from 'vue'

export default {
  components: {
    Layout,
    MySwitch,
    AuthInfo,
    Owner,
    AdministrativeContacts,
    NsSet,
    KeySet,
    Events,
    StateFlags,
  },
  setup() {
    const store = useAppStore()
    const verbose = computed({
      get: () => store.verbose,
      set: (value) => store.setVerbose(value)
    })

    watch(verbose, (newValue) => {
      store.setVerbose(newValue)
    })

    return {
      store,
      verbose
    }
  },
  data() {
    return {
      data: {},
      user: { name: 'Jan Musílek' },
    }
  },
  mounted() {
    axios.get('src/domain-detail.json').then(response => {
      this.data = response.data
    })
  }
}
</script>
