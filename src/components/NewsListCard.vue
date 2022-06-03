<template>
  <div class="card">
    <nuxt-link :to="`/news/posts/${post.id}`" class="card__link">
      <p class="card__date">
        {{ post.date | dateFilter }}
      </p>
      <p class="card__title">
        {{ post.title.rendered }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NewsListCard',
  props: {
    post: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__link {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    column-gap: 16px;
    transition: all 0.3s;
    @media #{$sp} {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 8px;
    }
    &:hover {
      background-color: $colorCorporateMain;
      .card__date,
      .card__title {
        color: $colorWhite;
      }
    }
  }
  &__date {
  }
  &__title {
    font-weight: bold;
    font-size: 1.8rem;
  }
}
</style>
