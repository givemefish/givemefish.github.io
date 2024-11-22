---
title: 'JavaScript'
tags: ['JavaScript']
---
# JavaScript Snippet

## Debounce
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

## Throttle
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

## Deep Clone
深層複製所有屬性，新版瀏覽器中可以用``structuredClone``取代
```js
export function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) clone[key] = deepClone(obj[key]);
    }
    return clone;
}
```

## Shallow Clone
淺層複製第一層屬性
```js
const shallowCopy1 = [...originalArray];
const shallowCopy2 = Array.from(originalArray);
```