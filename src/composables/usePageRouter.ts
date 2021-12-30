/*
export function usePageRouter() {
  const router = useRouter()

  const pages: Page[] = [
    {
      name: 'home',
      url: '/',
      isCurrent: true,
    },
    {
      name: 'about',
      url: '',
      isCurrent: false,
    },
  ]

  const currentPage = computed(() => {
    const currentPages = pages.filter(page => page.isCurrent)
    return currentPages[0]
  })

  const nextPage = computed(() => {
    const currentPages = pages.filter(page => page.isCurrent)
    return currentPages[0]
  })

  const goToNextPage = () => {
    router.push(`/${nextPage.value.name}/${encodeURIComponent(nextPage.value.url)}`)
  }

  return {
    currentPage,
    nextPage,
    goToNextPage,
  }
}
*/
import { acceptHMRUpdate, defineStore } from 'pinia'


import type { Page } from '~/types'


export const usePageRouter = defineStore('pageRouter', () => {
  const router = useRouter()
  // const route = useRoute()

  const defaultPages: Page[] = [
    {
      name: 'home',
      next: 'about',
      isCurrent: true,
    },
    {
      name: 'about',
      next: 'contact',
      isCurrent: false,
    }, {
      name: 'contact',
      next: 'home',
      isCurrent: false,
    },
  ]

  /**
   * All of the pages in the app.
   */
  const pages = ref<Page[]>(defaultPages)

  /**
   * Current route of the app.
   * const currentPage = computed(() => { const currentPages = pages.filter(page => page.isCurrent) return currentPages[0]})
   */
  const currentPage = computed(() => {
    const [current] = pages.value.filter(({ isCurrent }) => isCurrent)
    return current
  })
  const currPage = computed(() =>
    pages.value.reduce(getCurrent))

  /**
   * Next route of the app.
   * const nextPage = computed(() => { const currentPages = pages.filter(page => page.isCurrent) return currentPages[0]})
   const nextPage = computed(() => {
     const [next] = pages.value.filter(({ name }) => name === currentPage.value.next)
     return next
    })
    */


  /**
   * Navigates to next page.
   */
  const goToNextPage = () => {
    const nextName = currentPage.value.next

    nextName === 'home'
      ? router.push('/')
      : router.push(`/${nextName}`)
  }
  /**
   * Navigates to next page.
   */
  function getCurrent(currentPage: Page = currPage.value, item: Page) {
    if (item.isCurrent)
      currentPage = item

    return currentPage
  }
  /* sync currentPage
    if (route.path.includes('about'))

      console.log('on about')

    if (route.path.includes('home')) console.log('on home')
  }
  */

  const setPages = (newPages: Page[]): void => {
    pages.value = [...pages.value, ...newPages]
  }

  const resetState = () => setPages(defaultPages)

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   * @return {currentPage} - The current route of the app.
   * @param name - new name to set
   */
  return {
    currentPage,
    currPage,
    goToNextPage,
    resetState,

  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePageRouter, import.meta.hot))
