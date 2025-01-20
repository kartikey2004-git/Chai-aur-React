import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }).catch((error) => {
      console.error("Error fetching posts:", error);
    });
  }, []);
  return (
    <div className="w-screen h-screen  py-8">
      <Container>
        <div id="postcard" className="flex overflow-x-scroll">
          {posts.map((post) => (
            <div key={post.$id} className="mr-5 p-2 w-96  items-center justify-center">
              <PostCard  {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
