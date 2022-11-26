// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPosts } from '../../utils/getPost';

export default function handler(req, res) {
  const posts = getPosts(2); // argument will change

  res.status(200).json(posts);
}
