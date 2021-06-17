import { getDocument } from "../../lib/documents";
import Document from "../../components/document"

export default Document

export async function getStaticProps(context) {
  const document = await getDocument(context.params.id);

  return {
    props: {
      document,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
