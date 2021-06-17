import { getHome } from "../lib/documents";
import Document from "../components/document"

export default Document

export async function getStaticProps() {
  const document = await getHome();

  return {
    props: {
      document,
    },
  };
}
