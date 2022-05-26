module.exports = {
    name: "changemymind",
    alias: ["cmm"],
    use: "<query>",
    desc: "Change my mind Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(rimuru, m, { text }) => {
        rimuru.sendFile(m.from, global.api("zenz", "/creator/changemymind", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}