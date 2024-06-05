<template>
  <DetailList title="NS Set" :data="nsset" listTitle="DNS" :listData="nsset?.dns" />
</template>

<script>
import DetailList from './shared/DetailList.vue';

export default {
  components: {
    DetailList
  },
  props: {
    nsset: {
      type: Object,
      required: true
    }
  }
};
</script>
