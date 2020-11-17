const Users = {
    username: "bukanebi",
    email: "bukanebi@email.com",
    dob: 282020,
    pass: "abcd1234",
}

// Syncronouse example

function example1() {
    console.log("Prosess 1")
    console.log("Prosess 2")
    console.log("Prosess 3")
    console.log("Prosess 4")
}

// example1()

// Ansyncronouse exampple

function example2() {
    console.log("Prosess 1")
    console.log("Prosess 2")
    setTimeout(() => {
        console.log("Prosess 3")
    }, 2000)
    console.log("Prosess 4")
}

// example2()

// Handle Async

function getPassword(cb) {
    setTimeout(() => {
        return cb(Users.pass)
    }, 3000)
}

function getDob(cb) {
    setTimeout(() => {
        return cb(Users.dob)
    }, 3000)
}

function getEmail() {
    setTimeout(() => {
        return cb(Users.email)
    }, 3000)
}

function getUsername() {
    setTimeout(() => {
        return cb(Users.username)
    }, 3000)
}

function converDob() {
    getDob((dob) => {
        console.log(dob.toString())
    })
}

function callbackHell() {
    getPassword(() => {
        true
        getEmail(() => {
            true
            getUsername(() => {
                true
                getDob(() => {})
            })
        })
    })
}

function login(password) {
    const passFromDB = getPassword()
    console.log(passFromDB)
    if (password == passFromDB) {
        console.log("Anda berhasil login")
    } else {
        console.log("Gagal login")
    }
}

function login2(password) {
    getPassword((passFromDB) => {
        if (password == passFromDB) {
            console.log("Anda berhasil login")
        } else {
            console.log("Gagal login")
        }
    })
}

// login("abcd1234")
// converDob()
// login2("abcd1234")

// handle with Promise

function janji() {
    return new Promise((resolve, reject) => {
        let err = false
        if (err) {
            reject("Terjadi error")
        }

        setTimeout(() => {
            resolve("From resolve")
        }, 2000)
    })
}

function getPass() {
    return new Promise((resolve, reject) => {
        let err = false
        if (err) {
            reject(new Error("password"))
        }

        setTimeout(() => {
            resolve(Users.pass)
        }, 2000)
    })
}

function getEmil() {
    return new Promise((resolve, reject) => {
        let err = true
        if (err) {
            reject(new Error("email"))
        }
        getDob("asqsqwqwqwqw")
    })
}

janji()
    .catch((err) => {
        console.log(err)
    })
    .then((result) => {
        console.log(result)
    })

async function login3(email, password) {
    try {
        const emailFromdb = await getEmil()
        const passFromdb = await getPass()

        if (email != emailFromdb) {
            console.log("Email belum terdaftar")
            return
        }

        if (password != passFromdb) {
            console.log("Password salah")
        } else {
            console.log("Anda login")
        }

    } catch (error) {

        if (error.message = "password") {
            console.log()
        }
    }
}

fetch()

login3("bukanebi@email.com", "abcd1234")
