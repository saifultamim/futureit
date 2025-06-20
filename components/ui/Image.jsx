import Image from "next/image";

const ImageComponent = ({ imgUrl, itemId }) => {
  return (
    <div>
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={`${itemId}.jpg`}
          width="3000"
          height="300"
          className="w-full h-56 rounded-t-3xl"
        />
      ) : (
        <Image
          src="/images/future-course.png"
          alt=""
          width={300}
          height={300}
          className="w-full h-56 rounded-t-3xl"
        />
      )}
    </div>
  );
};

export default ImageComponent;
