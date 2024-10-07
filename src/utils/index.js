export const getImagePath = (imageFileName) => {
  return new URL(`${imageFileName}`, import.meta.url).href;
};
