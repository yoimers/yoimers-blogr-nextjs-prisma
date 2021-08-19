import prisma from "../../../lib/prisma";
import Cors from "cors";

// CORS のミドルウェアを初期化
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

// DELETE /api/post/:id

export default async function handle(req, res) {
  await runMiddleware(req, res, cors);

  const postId = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
