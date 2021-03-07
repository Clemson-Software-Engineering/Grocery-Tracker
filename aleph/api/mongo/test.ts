import type { APIRequest } from 'aleph/types.ts'
import { MongoClient, Bson } from "mongo";


interface UserSchema {
  _id: { $oid: string };
  item: string;
}


const client = new MongoClient();
await client.connect("mongodb://user:pass@127.0.0.1:27017/test");
const db = client.database("test");
const item = db.collection<UserSchema>("items");

export default async function handler(req: APIRequest) {
  return req.status(200).json({ name: "Nancy" })
}