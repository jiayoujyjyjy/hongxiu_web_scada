/**
 * Created by 杜坤 on 2019/7/12.
*/

/**
 * 浏览器存储 1-local 2-session
 */

// 存储localStorage
let localStore = {
  setStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },
  getStore (name) {
    if (!name) return
    return window.localStorage.getItem(name)
  },
  removeStore (name) {
    if (!name) return
    window.localStorage.removeItem(name)
  }
}

// 存储seeionStorage
let sessionStore = {
  setStore (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  },
  getStore (name) {
    if (!name) return
    return window.sessionStorage.getItem(name)
  },
  removeStore (name) {
    if (!name) return
    window.sessionStorage.removeItem(name)
  },
  emptyStore () {
    window.sessionStorage.clear()
  }
}

export const webStore = {
  localStore,
  sessionStore
}

// const webStore = {
//   localStore,
//   sessionStore
// }

// export default webStore
