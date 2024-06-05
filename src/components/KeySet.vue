<template>
  <DetailList title="Key Set" :data="keyset" listTitle="DNS Keys" :listData="keyset?.dns_keys" />
</template>

<script>
import DetailList from './shared/DetailList.vue';

export default {
  components: {
    DetailList
  },
  props: {
    keyset: {
      type: Object,
      required: true
    }
  }
};
</script>
