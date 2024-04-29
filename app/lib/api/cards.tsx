import { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  id: number;
  title: string;
  content: string;
};

let posts: Post[] = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return getPosts(req, res);
    case 'POST':
      return createPost(req, res);
    case 'PUT':
      return updatePost(req, res);
    case 'DELETE':
      return deletePost(req, res);
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getPosts(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}

function createPost(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;
  const newPost: Post = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
}

function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { title, content } = req.body;
  const postId = parseInt(id as string);
  const postIndex = posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: `Post with ID ${id} not found` });
  }

  posts[postIndex] = { id: postId, title, content };
  res.status(200).json(posts[postIndex]);
}

function deletePost(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const postId = parseInt(id as string);
  const postIndex = posts.findIndex((post) => post.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ message: `Post with ID ${id} not found` });
  }

  const deletedPost = posts.splice(postIndex, 1);
  res.status(200).json(deletedPost[0]);
}
