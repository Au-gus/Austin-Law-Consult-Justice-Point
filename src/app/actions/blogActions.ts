"use server";

import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "posts.json");

export async function addBlogPost(formData: any, password: string) {
  // 1. Verify Password
  if (password !== "Austin@Law2026") {
    throw new Error("Unauthorized: Incorrect password.");
  }

  // 2. Read existing posts
  let posts = [];
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    posts = JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, start with empty array
    posts = [];
  }

  // 3. Create new post object
  const newPost = {
    ...formData,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    readTime: "5 min read",
  };

  // 4. Append and Save
  const updatedPosts = [newPost, ...posts];
  await fs.writeFile(DATA_FILE, JSON.stringify(updatedPosts, null, 2));

  return newPost;
}

export async function getBlogPosts() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}
