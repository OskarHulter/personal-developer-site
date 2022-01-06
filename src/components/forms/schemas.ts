import { z } from 'zod'


// define your z schema
export const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
  inventory: z.object({
    name: z.string(),
    itemId: z.number(),
  }).array(),
})

export const testSchemas = [
  z.object({
    name: z.string(),
    email: z.string().email(),
  }),
  z.object({
    password: z.string().min(6),
    confirmPassword: z
      .string()
      .min(6)
      .oneOf([z.ref("password")], "Passwords must match"),
  }),
  z.object({
    address: z.string(),
    postalCode: z
      .string()
      .regex(/^[0-9]+$/, "Must be numeric"),
  }),
  z.object({
    terms: z.boolean().equals([true]),
  }),
]

// Dog.shape.name; // => string schema
// Dog.shape.age; // => number schema