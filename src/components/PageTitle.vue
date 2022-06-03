<template>
  <h1 class="title">
    {{ label }}
  </h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding: 80px 0;
  font-size: 4rem;
  color: $colorCorporateMain;
  @media #{$sp} {
    padding: 80px 0 40px;
  }
}
</style>
