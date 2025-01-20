import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 w-screen">
      <Container>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="w-full">
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
