import { ViteSSGContext } from 'vite-ssg'


export type UserModule = (ctx: ViteSSGContext) => void

export type Page = {
  name: string
  url: string
  isCurrent: boolean
}
