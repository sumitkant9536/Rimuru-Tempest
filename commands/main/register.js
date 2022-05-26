module.exports = {
    name: "register",
    alias: ["verify"],
    desc: "Add User To Database",
    type: "main",
    example: "%prefix%command",
    start: async(rimuru, m) => {
        const { pushName, sender } = m
        const namaUser = `${pushName === undefined ? sender.split("@")[0] : pushName}`
        user.addUser(m.sender, namaUser, _user)
        rimuru.sendText(m.from, "sukses", m)
    },
    noLimit: true,
}