export const apiDelay = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 600 + 200)
  );
};
