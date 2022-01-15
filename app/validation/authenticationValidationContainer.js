
module.exports = {
    validateSignUpObject: (data) => {
        const c1 = data.hasOwnProperty("email")
        const c2 = data.hasOwnProperty("password")
        const c3 = data.hasOwnProperty("first_name")
        const c4 = data.hasOwnProperty("last_name")
        const c5 = data.hasOwnProperty("gender")
        const c6 = data.hasOwnProperty("age")
        const c7 = c1 && c2 && c3 && c4 && c5 && c6
        if (!c7) return false
        return true 
    },
    validateSignInObject: (data) => {
        const c1 = data.hasOwnProperty("password")
        const c2 = data.hasOwnProperty("email")
        if (!(c1 && c2)) return false
        return true
    }
}