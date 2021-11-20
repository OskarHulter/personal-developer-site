import { Page } from '~/types'


export function usePageRouter() {
  const router = useRouter()

  const pages: Page[] = [
    {
      name: 'home',
      url: '/',
      isCurrent: false,
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
