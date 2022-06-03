<template>
  <div>
    <page-title label="ABOUT" />
    <div>
      <dl class="info">
        <div
          v-for="(item, index) in contents"
          :key="`infoItem-${index}`"
          class="info__wrap"
        >
          <dt>{{ item.name }}</dt>
          <dd>{{ item.value }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      contents: [
        {
          name: '会社名',
          value: 'Sample-Corp'
        },
        {
          name: '所在地',
          value: '日本'
        },
        {
          name: '設立',
          value: '2022年3月'
        },
        {
          name: '事業内容',
          value: '〇〇〇〇〇〇〇'
        },
        {
          name: '代表者名',
          value: '〇〇 〇〇'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  &__wrap {
    display: flex;
    @media #{$sp} {
      padding: 16px;
      flex-direction: column;
    }
    dt,
    dd {
      padding: 16px;
      @media #{$sp} {
        padding: 0;
      }
    }
    dt {
      width: 250px;
      @media #{$sp} {
        width: auto;
        padding-bottom: 4px;
      }
    }
    dd {
      width: calc(100% - 250px);
      @media #{$sp} {
        width: auto;
      }
    }
    & + & {
      border-top: 2px dashed $colorBorder;
    }
  }
}
</style>
