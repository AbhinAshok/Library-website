// src/utils/asset.js
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;