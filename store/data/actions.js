const fs = process.server ? require("fs-extra") : null;
const path = process.server ? require("path") : null;

const MEMBERS_CACHE_PATH = path.join(process.cwd(), "dist", "globalData.json");

export default {
  modifyData(context, data) {
    context.commit("setData", data);
  },

  async fetchData(context) {
    let cachedData;
    try {
      cachedData = JSON.parse(fs.readFileSync(MEMBERS_CACHE_PATH, "utf8"));
    } catch (error) {
      console.log("💾 CACHE NOT INITIALIZED");
    }

    if (!cachedData) {
      const response = await fetch("http://localhost:81");
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

    context.commit("setData", cachedData.results);
  },
};
