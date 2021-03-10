import type { APIRequest } from 'aleph/types.ts'

export default async function handler(req: APIRequest) {
  return req.status(200).json({ name: "Nancy" })
}