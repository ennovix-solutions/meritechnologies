import { createClient } from "contentful";

const client = createClient({
  space: "fwv4fepwg0zw",
  environment: "master", // defaults to 'master' if not set
  accessToken: "LvKxferUjnUIrKqryWNH4qC8Ur9TZiDJwNxUmiE6bh8",
  //   space: process.env.CONTENTFUL_SPACE_ID,
  //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchContent() {
  try {
    const entries = await client.getEntries();
    return entries.items;
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
    return [];
  }
}
