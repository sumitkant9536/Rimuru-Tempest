const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jagokata",
    alias: ["jkata"],
    use: "<query>",
    desc: "Search Kata from jagokata",
    type: "randomtext",
    example: `%prefix%command <query>`,
    start: async(rimuru, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/api/jagokata", { query: text }, "apikey"))
        let caption = `GoodWords Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `⭔ Message : ${i.message}\n\n`
        caption += `⭔ By : ${i.by}\n`
        rimuru.sendText(m.from, caption, m)
    },
    isQuery: true
}