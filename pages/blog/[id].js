import fire from "../../config/fire-config";
import Link from "next/link";

const Blog = (props) => {
  return (
    <div>
      <h2>{props.blogHeader}</h2>
      <p>{props.blogBody}</p>
      <p dangerouslySetInnerHTML={{ __html: props.blogBody }} />
      {/* <p>dangerouslySetInnerHTML={{ __html: props.blogBody }}</p> */}
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("posts")
    .doc(query.id)
    .get()
    .then((result) => {
      content["blogHeader"] = result.data().blogHeader;
      content["blogBody"] = result.data().blogBody;
    });

  return {
    props: {
      blogHeader: content.blogHeader,
      blogBody: content.blogBody,
    },
  };
};

export default Blog;
