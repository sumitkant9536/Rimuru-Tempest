const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "soundcloud",
    alias: ["scdl"],
    use: "<url>",
    desc: "Download Media From https://soundcloud.com",
    type: "downloader",
    example: "%prefix%command <url>",
    start: async(rimuru, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/downloader/soundcloud", { url: isUrl(text)[0] }, "apikey"))
        rimuru.sendFile(m.from, fetch.result.url, "", m)
    },
    isQuery: true
}