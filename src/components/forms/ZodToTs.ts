import { z } from 'zod'
import { createTypeAlias, printNode, zodToTs } from 'zod-to-ts'


// define your Zod schema
const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  inventory: z.object({
    name: z.string(),
    itemId: z.number(),
  }).array(),
})

// pass schema and name of type/identifier
const { node } = zodToTs(UserSchema, 'User')

export const ZodResult = printNode(node)
/*
"{
  username: string
  age: number
  inventory: {
    name: string
    itemId: number
  }[]
}"
*/

const identifier = 'specifyMePlz'
const typeAlias = createTypeAlias(node, identifier)

export const nodeString = printNode(typeAlias)
/*
"type User = {
  username: string
  age: number
  inventory: {
    name: string
    itemId: number
  }[]
}"
*/
