<template>
  <!-- 外部リンクはaタグ、アイコンを表示 -->
  <a v-if="item.isExternal" :href="item.path" target="_blank" class="navLink">
    <span class="navLink__text">
      {{ item.label }}
    </span>
    <IconLaunch class="navLink__icon" />
  </a>
  <!-- 内部リンクはnuxt-linkタグ -->
  <nuxt-link v-else :to="item.path" class="navLink">
    {{ item.label }}
  </nuxt-link>
</template>

<script>
import IconLaunch from '~/assets/img/icon_launch.svg'
export default {
  name: 'HeaderNavLink',
  components: {
    IconLaunch
  },
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navLink {
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  column-gap: 8px;
  transition: color 0.3s ease-in-out;
  position: relative;
  line-height: 2;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    display: block;
    transform-origin: left;
    transform: scaleX(0);
    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  &__icon {
    width: 16px;
    height: 16px;
  }
  &:hover {
    color: $colorCorporateMain;
    @media #{$pc} {
      &::after {
        background-color: $colorCorporateMain;
        transform: scaleX(1);
        text-decoration: none;
      }
    }
    .navLink__icon {
      &::v-deep {
        path:nth-of-type(2) {
          fill: $colorCorporateMain;
        }
      }
    }
  }
  &.nuxt-link-exact-active {
    pointer-events: none;
    color: $colorCorporateMain;
    &::after {
      visibility: hidden;
    }
  }
}
</style>
