<template>
  <div>
    <h1 class="-title">
      HOME
    </h1>
    <section class="-item section">
      <div class="section__head">
        <h2 class="section__title">
          About
        </h2>
      </div>
      <div class="section__main">
        <p class="section__description">
          説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        </p>
        <div class="section__link">
          <nuxt-link to="/about" class="-link">
            会社情報へ
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- about -->

    <section class="-item section">
      <div class="section__head">
        <h2 class="section__title">
          News
        </h2>
      </div>
      <div class="section__main">
        <div class="section__newsList">
          <div
            v-for="(post, index) in posts"
            :key="`post-${index}`"
            class="section__newsList__item card"
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
        <div class="section__link">
          <nuxt-link to="/news" class="-link">
            お知らせ一覧へ
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- news -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__head {
    display: flex;
    column-gap: 16px;
    align-items: center;
  }
  &__title {
    font-size: 3.2rem;
    font-weight: bold;
  }
  &__link {
    margin-top: 32px;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
  &__main {
    margin-top: 16px;
  }
  &__description {
  }
  &__newsList {
    &__item {
      margin: 8px 0;
      padding-top: 8px;
      & + & {
        border-top: 2px dashed $colorBorder;
      }
    }
  }
}
.-item {
  & + & {
    margin-top: 64px;
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
.-link {
  display: inline-block;
  padding: 8px 16px;
  border: 2px solid $colorCorporateMain;
  background-color: $colorWhite;
  color: $colorCorporateMain;
  transition: background-color 0.3s, color 0.5s;
  &:hover {
    background-color: $colorCorporateMain;
    color: $colorWhite;
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
