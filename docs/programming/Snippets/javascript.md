---
title: 'JavaScript'
---

# JavaScript

## debounce
在「一定時間」內能夠促發這個函式「一次」

```js
export function debounce(callback, wait, immediate) {
  let timeout;
  function wrapper(...args) {
    const self = this;
    const later = () => {
      timeout = null;
      if (!immediate) callback.apply(self, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callback.apply(this, args);
  }

  return wrapper;
}
```

## throttle
在「一定時間」內最多只能促發某函式「多少次」

```js
export function throttle(callback, limit) {
  let wait = false;  
  function wrapper(...args) {
    if (!wait) {
      callback.apply(this, args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  }
  return wrapper;
}
```