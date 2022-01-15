// this is test updated

const test = (number, callback) => {
    if (number == 10) callback(true)
    else callback(false)
}

const handler = arg => console.log(arg)

test(10, handler)