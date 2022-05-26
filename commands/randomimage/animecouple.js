let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animecouple",
    alias: ["animecouples"],
    desc: "Generate Random Image Anime Couples",
    type: "randomimage",
    example: `%prefix%command`,
    start: async(rimuru, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/random/couples", {}, "apikey"))
        rimuru.sendFile(m.from, fetch.result.male, "", m, { caption: "Random Anime Couples Male" })
        rimuru.sendFile(m.from, fetch.result.female, "", m, { caption: "Random Anime Couples Female" })
    }
}