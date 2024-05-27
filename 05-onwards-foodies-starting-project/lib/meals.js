import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((reslove) => setTimeout(reslove, 2000));
  //   throw new Error("Failed to load meals");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  // await new Promise((reslove) => setTimeout(reslove, 2000));
  //   throw new Error("Failed to load meals");
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};
