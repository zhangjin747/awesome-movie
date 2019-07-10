export function getScrollTop() {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    // eslint-disable-next-line prefer-destructuring
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    // eslint-disable-next-line prefer-destructuring
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

export function aa() {}
