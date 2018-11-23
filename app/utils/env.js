module.exports = (key, def) => {
    if(process.env[key]) {
        return process.env[key]
    }

    return def
}
