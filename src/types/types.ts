import type { ViteSSGContext } from 'vite-ssg'


export type UserModule = (ctx: ViteSSGContext) => void

export type PageName = 'about' |'home' | 'contact' | '404'

export type Url = PageName


export type Page = {
  name: PageName
  next: PageName
  isCurrent: boolean
}
