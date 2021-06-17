export default function Document({ document }) {
  const { content } =
    document?.renditions?.find((rendition) => rendition.handle === "web") || {};

  if (!content) {
    return <div>loading...</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
