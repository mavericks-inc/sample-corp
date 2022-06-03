<template>
  <div>
    <page-title label="HOME" />
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
        <news-list :list="posts" />
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
  // データをWPから取得し、ページコンポーネントへ直接セットする
  async asyncData (context) {
    // WP REST APIのベースURL
    const baseUrl = context.$config.wpBaseUrl
    // お知らせの記事を3件取得するためのエンドポイント作成
    const newsUrl = baseUrl + 'posts?_embed&per_page=3&categories=2'

    // 記事を取得
    const posts = await context.$axios.$get(newsUrl)
    // <template></template>で使えるようにする
    // posts: posts
    return {
      posts
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
}
.-item {
  & + & {
    margin-top: 64px;
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
</style>
