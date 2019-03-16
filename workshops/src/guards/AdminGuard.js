import router from './index'

const AuthServiceMock = {
  loggedIn () {
    return true
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (AuthServiceMock.loggedIn()) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
