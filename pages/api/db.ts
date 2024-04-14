import { ChromaClient, IncludeEnum } from "chromadb";

const client = new ChromaClient({ path: "http://localhost:8000" });
const collection = client.getCollection({ name: "cars" });

export default async function handler(req: any, res: any) {
  const { carDetails } = req.query;

  if (!carDetails) {
    return res.status(400).json({ error: "Missing car" });
  }

  const car = (await collection).query({
    queryTexts: [carDetails],
    nResults: 5,
    include: [IncludeEnum.Documents, IncludeEnum.Metadatas],
  });

  res.status(200).json({ car });
}
