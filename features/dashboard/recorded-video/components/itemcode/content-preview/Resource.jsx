const ResourceContent = ({ fileName }) => {
  return (
    <div className="w-full h-0 pb-[56.25%] relative px-8">
      {fileName ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`${process.env.NEXT_PUBLIC_COURSE_RESOURCE}/${fileName}`}
          title="PDF Viewer"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <div className="text-red-600 text-2xl">Resource not found.</div>
      )}
    </div>
  );
};

export default ResourceContent;
