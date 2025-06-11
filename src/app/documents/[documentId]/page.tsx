interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <>
      <div>
        <h2>Document ID : {documentId} </h2>
      </div>
    </>
  );
};
export default DocumentIdPage;
