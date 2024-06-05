<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-bold">Handle:</span> &nbsp;
              <span><a href="#">{{ data?.handle }}</a></span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-bold">Registrar:</span> &nbsp;
              <span><a href="#">{{ data?.registrar }}</a></span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pa-0">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{ listTitle }}:</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(item, index) in listData" :key="index" class="pa-0">
          <v-list-item-content>
            <v-list-item-title class="pl-6">{{ formatItem(item) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    listTitle: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatItem(item) {
      if (typeof item === 'string') {
        return item;
      } else if (item.name && item.ip_address) {
        return `${item.name} (${item.ip_address})`;
      }
      return '';
    }
  }
};
</script>
