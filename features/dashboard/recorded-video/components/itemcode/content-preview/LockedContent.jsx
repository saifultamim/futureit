const LockedContent = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 h-52">
      <p className="text-center text-[18px] font-semibold">
        This section is locked
      </p>
      <p className="text-center text-[16px] font-normal mt-2">
        {message ||
          "You will be able to access this section once you have completed the previous section."}
      </p>
    </div>
  );
};

export default LockedContent;
