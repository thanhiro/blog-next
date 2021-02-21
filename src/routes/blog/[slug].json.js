import posts from "./_posts.js";

const lookup = new Map();
posts.forEach((post) => {
  lookup.set(post.slug, post);
});

export async function get({ params }) {
  const { slug } = params;

  if (lookup.has(slug)) {
    return {
      body: lookup.get(slug),
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    return {
      body: "{}",
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}
