module.exports = {
    name: "sfwgif",
    alias: ["gifsfw"],
    use: "<query>",
    desc: "Generate Random SFW GIF From Nekoslife",
    type: "nekoslife",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    start: async(rimuru, m, { text }) => {
        let fetch = await global.api("zenz", "/api/anime/sfw/" + text, {}, "apikey")
        rimuru.sendFile(m.from, fetch, "", m, { asSticker: true, author: config.exif.author, packname: config.exif.packname, categories: ['😄','😊'] })
    },
    isQuery: true
}

function type() {
    return ["cuddle","slap","baka","tickle","pat","kiss","hug","feed","smug","poke"]
}