<template>
  <div class="newsList">
    <news-list-card
      v-for="(item, index) in list"
      :key="`news-${index}`"
      :post="item"
      class="newsList__item"
    />
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.newsList {
  &__item {
    margin: 8px 0;
    padding-top: 8px;
    & + & {
      border-top: 2px dashed $colorBorder;
    }
  }
}
</style>
