<template>
  <div>
    <h1 class="-title">
      NEWS
    </h1>
    <div class="list">
      <div
        v-for="(post, index) in posts"
        :key="`post-${index}`"
        class="list__item card"
      >
        <nuxt-link :to="`/news/posts/${post.id}`" class="card__link">
          <p class="card__date">
            {{ post.date }}
          </p>
          <p class="card__title">
            {{ post.title }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsIndexPage',
  data () {
    return {
      posts: [
        {
          id: 100,
          date: '2022年03月10日',
          title: '記事タイトル100'
        },
        {
          id: 101,
          date: '2022年03月10日',
          title: '記事タイトル101'
        },
        {
          id: 102,
          date: '2022年03月10日',
          title: '記事タイトル102'
        },
        {
          id: 103,
          date: '2022年03月10日',
          title: '記事タイトル103'
        },
        {
          id: 104,
          date: '2022年03月10日',
          title: '記事タイトル104'
        },
        {
          id: 105,
          date: '2022年03月10日',
          title: '記事タイトル105'
        },
        {
          id: 106,
          date: '2022年03月10日',
          title: '記事タイトル106'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__item {
    margin: 8px 0;
    padding-top: 8px;
    & + & {
      border-top: 2px dashed $colorBorder;
    }
  }
}
// ページタイトル
.-title {
  padding: 80px 0;
  font-size: 4rem;
  color: $colorCorporateMain;
  @media #{$sp} {
    padding: 80px 0 40px;
  }
}
// お知らせカード
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
