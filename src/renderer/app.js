export { createApp }

import { createSSRApp, h, markRaw, reactive, ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { setPageContext } from './usePageContext'
import { setData } from './useData'
import { isObject } from './utils'
import setCustomDirectives from './setCustomDirectives'

function createApp(pageContext) {
  const { Page } = pageContext
  const pageRef = ref(markRaw(Page))

  const PageWithLayout = {
    render() {
      return h(DefaultLayout, {}, { default: () => h(pageRef.value) })
    }
  }

  const app = createSSRApp(PageWithLayout)

  // app.changePage() is called upon navigation, see +onRenderClient.ts
  Object.assign(app, {
    changePage: (pageContext) => {
      const data = pageContext.data ?? {}
      assertDataIsObject(data)
      Object.assign(dataReactive, data)
      Object.assign(pageContextReactive, pageContext)
      pageRef.value = markRaw(pageContext.Page)
    }
  })

  const data = pageContext.data ?? {}
  assertDataIsObject(data)
  const dataReactive = reactive(data)
  const pageContextReactive = reactive(pageContext)
  setPageContext(app, pageContextReactive)
  setData(app, dataReactive)
  setCustomDirectives(app)

  return app
}

function assertDataIsObject(data) {
  if (!isObject(data)) throw new Error('Return value of data() hook should be an object, undefined, or null')
}
