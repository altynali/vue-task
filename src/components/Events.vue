<template>
  <v-card>
    <v-card-title>Events</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(event, key) in events" :key="key" class="pa-0">
          <v-list-item-content>
            <v-row>
              <v-col cols="12" md="3">
                <p>{{ formatEventKey(key) }}</p>
              </v-col>
              <v-col cols="12" md="4">
                <div>{{ formatDate(event?.timestamp) }}</div>
              </v-col>
              <v-col cols="12" md="2">
                <p>Registrar:</p>
              </v-col>
              <v-col cols="12" md="3">
                <div>{{ event?.registrar_handle }}</div>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['events'],
  methods: {
    formatEventKey(key) {
      return key.charAt(0).toUpperCase() + key.slice(1) + ' date:';
    },
    formatDate(date) {
      if (!date) return 'No date available';
      const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      return new Date(date).toLocaleDateString('en-US', options);
    }
  }
};
</script>
