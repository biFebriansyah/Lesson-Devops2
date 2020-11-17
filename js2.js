// Function Declaration
function sayHello() {
    console.log("Hello")
}

// sayHello()

// Function pramas

function sayName(name) {
    console.log(`hello ${name}`)
}

// sayName("zyan")

// function with multiple params

function sayMayName(name, region) {
    if (region == "id") {
        console.log(`Hallo ${name}`)
    } else if (region == "en") {
        console.log(`Hello ${name}`)
    } else {
        console.log("Region tak diketahui")
    }
}

// sayMayName("zaki", "en")

// function with return

function perkalian(angka1, angka2) {
    const result = angka1 * angka2
    return result
}

const hasil = perkalian(20, 20)
// console.log(hasil)

function checkPassword(password) {
    const secret = "abcd1234"

    if (password != secret) {
        console.log("Password salah")
        return
    } else {
        console.log("Password benar")
    }

    console.log("Anda berhasil login")
}

// checkPassword("abcd1234")

// Function rest Params

function penJumlahan(...angka) {
    let result = 0
    for (const number of angka) {
        if (typeof number == "string") {
            console.log(`Namakamu ${number}`)
        } else if (typeof number == "number") {
            result = result + number
        } else {
            continue
        }
    }

    console.log(angka)
}

// Function Express

const Fullname = function (firstName, LastName) {
    console.log(firstName + LastName)
}

const HelloWorld = function () {
    console.log("hllo world")
}

// HelloWorld()

// Arrow Function

// const sayHello2 = ()=> console.log(name)

// sayHello2("ebiebi")

// method
// sebuah function yang berada didalam object

const person = {
    Firstname: "Rizki",
    Lastname: "Permana",
    getFullname: function () {
        return this.Firstname + " " + this.Lastname
    },
}

const nameRizki = person.getFullname()
// console.log(nameRizki)

// Buildin method

const nomorKu = "085241387179"
nomorKu.toString()

// console.log(arr)

// Callback

// adalah function yang memangil function lain dari parametes

function showName(value) {
    console.log(value)
}

const simpleCb = function (name, callbackFn) {
    return callbackFn(name)
}

// simpleCb("Yoan", showName)

// menghandle ansycrnous function
// async await

// const arr = ["mobil", "motor"]
// arr.forEach((value, index) => {
//     console.log(index)
// })

function simplseAsync(cb) {
    setTimeout(() => {
        console.log("Prosess selesai") // http://www.api.user.com/getUSersasasasasasass
        cb()
    }, 3000)
}

simplseAsync()
console.log("Prosess 2")
console.log("Prosess 2")
console.log("prsoess 2")
console.log("prsoess 2")
console.log("prsoess 2")
console.log("prsoess 2")
console.log("prsoess selesai")
