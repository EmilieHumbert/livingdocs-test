import Link from "next/link";

import { getLatestPublications } from "../../lib/documents";

export default function DocumentsList({ documents }) {
  if (!documents) {
    return <div>loading...</div>;
  }

  if (documents.length === 0) {
    return <div>No documents</div>;
  }

  return (
    <div>
      {documents.map((document) => {
        const id = document.systemdata.documentId;

        return (
          <div key={id}>
            <h1>
              <Link href={`/documents/${id}`}>
                <a>{document.metadata.title}</a>
              </Link>
            </h1>
            <p>{document.metadata.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const documents = await getLatestPublications();

  return {
    props: {
      documents,
    },
  };
}
