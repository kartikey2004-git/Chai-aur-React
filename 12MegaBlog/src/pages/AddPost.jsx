import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="w-full lg:w-3/4 xl:w-2/3">
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
