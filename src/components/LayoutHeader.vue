<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo headerLogo">
        <nuxt-link to="/" class="headerLogo__link">
          Sample-Corp
        </nuxt-link>
      </h1>
      <nav role="navigation" class="header__nav headerNav">
        <ul class="headerNav__links">
          <li
            v-for="(item, index) in links"
            :key="`nav-${index}`"
            class="headerNav__item"
          >
            <header-nav-link :item="item" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data () {
    return {
      links: [
        {
          label: 'About', // リンクのラベル
          path: '/about', // パス
          isExternal: false // 外部リンクかどうか
        },
        {
          label: 'News',
          path: '/news',
          isExternal: false
        },
        {
          label: 'Access',
          path: 'https://goo.gl/maps/8AhKyhk7tmnNY9oD8',
          isExternal: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 16px 40px;
  background-color: rgba($color: $colorWhite, $alpha: 0.8);
  @media #{$sp} {
    padding: 8px 4.3%;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;
    @media #{$sp} {
      row-gap: 8px;
      justify-content: center;
      flex-direction: column;
    }
  }
}
.headerLogo {
  &__link {
    transition: opacity 0.3s;
    font-size: 2.4rem;
    @media #{$pc} {
      font-size: 2.8rem;
    }
    &:hover {
      opacity: 0.7;
    }
  }
}
.headerNav {
  &__links {
    display: flex;
    column-gap: 32px;
  }
  &__item {
  }
  &__link {
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
      .headerNav__link__icon {
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
}
</style>
