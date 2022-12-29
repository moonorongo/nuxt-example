const fs = process.server ? require("fs-extra") : null;
const path = process.server ? require("path") : null;

const MEMBERS_CACHE_PATH = process.server
  ? path.join(process.cwd(), "dist", "globalData.json")
  : null;

export default {
  modifyData(context, data) {
    context.commit("setData", data);
  },

  async fetchData(context) {
    let cachedData;

    if (process.env.NODE_ENV === "production") {
      console.log("PRODUCTION API");
      try {
        cachedData = JSON.parse(fs.readFileSync(MEMBERS_CACHE_PATH, "utf8"));
      } catch (error) {
        console.log("💾 CACHE NOT INITIALIZED");
      }

      if (!cachedData) {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=0"
        );
        const data = await response.json();

        try {
          await fs.writeFileSync(
            MEMBERS_CACHE_PATH,
            JSON.stringify(data),
            (err) => {
              if (err) throw err;
            }
          );
          console.log("💾 CACHE FILE WRITTEN SUCCESSFULLY");
        } catch (error) {
          console.log("💾 ERROR WRITING MEMBERS CACHE TO FILE\n", error);
        }

        cachedData = data;
      }
    } else {
      console.log("DEVELOPMENT API");

      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=0"
      );
      const data = await response.json();
      cachedData = data;
    }

    context.commit("setData", cachedData.results);
  },
};
