import Vue from 'vue'

const dateFilter = (value) => {
  // 文字列 -> Date型に変換
  const date = new Date(value)
  // 年 取得
  const year = date.getFullYear()
  // 月 取得 ※ 0-11 を返すので+1する
  const month = date.getMonth() + 1
  // 日 取得
  const day = date.getDate()
  return `${year}/${month}/${day}`
}

// 上記関数をフィルターとして登録
Vue.filter('dateFilter', dateFilter)
