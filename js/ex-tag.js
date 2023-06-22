/**
 * 広告タグの例
 */
window.exTag = window.exTag || {
  init: () => {
    console.log('テストタグ埋め込み成功')

    const params = new URLSearchParams(window.location.search)
    if (params.get('utm_source') === 'exampleTag') {
      console.log('[実際には広告タグのサーバーへ送信]: example広告からの流入です！')
      Cookies.set("exampleTag", true);
    }
  },
  track: (name) => {
    if (Cookies.set("exampleTag")) {
      console.log('[実際には広告タグのサーバーへ送信]: example広告からの流入後、CVしました！: ', name)
    }
  },
}

window.exTag.init()