<template>
  <article class="article">
    <header class="article__head">
      <p class="article__head__date">
        {{ post.date }}
      </p>
      <h1 class="article__head__title">
        {{ post.title }}
      </h1>
    </header>
    <main class="article__main">
      <figure class="article__main__thumbnail">
        <img :src="post.thumbnailImgSrc" :alt="post.title">
      </figure>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="article__main__content" v-html="post.content" />
    </main>
  </article>
</template>

<script>
export default {
  name: 'NewsDetailPage',
  data () {
    return {
      post: {
        date: '2022年03月10日',
        title: '記事タイトル記事タイトル',
        thumbnailImgSrc: 'https://ma-vericks.com/wp/wp-content/uploads/2021/12/philippe-montes-lZw3Gb3Okvo-unsplash-1.jpeg',
        content: '<p>誠に勝手ながら、株式会社マーベリックスは下記の日程を年末年始休業とさせていただきます。</p><p><strong>休業期間：2021年12月29日(水)～2022年1月4日(火)</strong></p><p>休業期間中にいただきましたお仕事、採用に関するお問い合わせに関しましては、1月5日(水)以降に順次対応をさせていただきます。</p><p>期間中皆さまにはご不便おかけしますが、何卒ご了承のほどよろしくお願いいたします。</p>'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  padding-top: 40px;
  &__head {
    &__date {
    }
    &__title {
      margin-top: 8px;
      font-size: 2.4rem;
    }
  }
  &__main {
    &__thumbnail {
      margin: 32px 0;
    }
    &__content {
      &::v-deep {
      > * {
        word-break: break-all;
        margin: 16px 0;
      }
      p {
        line-height: 1.8;
      }
    }
    }
  }
}
</style>
