<template>
  <section class="error">
    <h1 class="error_title">
      404
    </h1>
    <h2 class="error_subtitle">
      Not Found
    </h2>
    <p class="error_description">
      お探しのページは見つかりませんでした。
    </p>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style lang="scss" scoped>
.error {
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &_title {
    font-size: 40px;
  }
  &_subtitle {
    margin-top: 8px;
  }
  &_description {
    margin-top: 24px;
  }
}
</style>
