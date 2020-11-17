
var variableVar = "ini var" // not recomend
let variableLet = "ini let"
const varConst = "contoh const"

const nama = "sasa"
// const tahunLahir = 199
let nameBuah = ["apel", "jambu"]
const myBio = {
    nama: "ebi",
    username: "ebiebi",
    email: "ebiebi@email.com",
}
let bigINt = 112891212891n
const simpleNull = null
const simpleUndif = undefined

// if else

const userName = "ebiebi"
const password = "12345"

const userInput = "ebi"
const userPassInput = "123"

// and && case sensitif
// or || not sensi

if (userName != userInput && userPassInput == password) {
    console.log("Username Salah")
} else if (userName == userInput && userPassInput != password) {
    console.log("Password salah")
} else {
    console.log("Anda berhasil login")
}

const umur = "19"

if (umur > 20) {
    console.log("anda sudah tua")
} else if (umur < 20) {
    console.log("Anda masih remaja")
}

switch (umur) {
    case 1:
        console.log("anda masih muda")
        break
    case 2:
        console.log("anda sudah deawa")
        break
    default:
        console.log("umur tidak diketahui")
}

const checkUmur =
    umur >= 20 ? "Anda sudah dewasa" : umur < 20 ? "anda masih remaja" : "anda masih anak anak"

console.log(checkUmur)

if (umur > 19) {
    console.log(true)
} else {
    console.log(false)
}

// for loop

const listKendaraan = ["mobil", "motor", "pesawat"]
const array2D = [
    ["mobil", "motor", "pesawat"],
    ["Apel", "anggur", "jambu"],
]

// for (let i = 0; i < listKendaraan.length; i++) {
//     console.log(listKendaraan[i])
// }

// for (let i = 0; i < array2D.length; i++) {

//     for (let x=0; x < array2D[i].length; x++) {

//         console.log(array2D[i][x])
//     }
// }

let angka = 0

while (angka > listKendaraan.length) {
    if (listKendaraan[angka] == "pesawat") {
        break
    }
    angka++
}

do {
    console.log(listKendaraan[angka])
    angka++
} while (angka > listKendaraan.length)

const dataUSer = {
    name: "atia",
    username: "atia",
}


const tahunLahir = 1998
const tahunSekarang = 2020
const umurs = tahunSekarang - tahunLahir

const test = "saya lahir tahun " + tahunLahir + " sekarang umur saya " + umur.toString()

const test2 = `saya lahir tahun ${tahunLahir} sekarang umur saya ${tahunSekarang - tahunLahir}`

console.log(test2)


const arr1 = ["zyan", "tomy"]
const arr2 = ["abi", "inyils"]
const obj2 = {...dataUSer}
const devops = [...arr1, ...arr2]


const {username, name} = obj2
const [r,b,c,d] = devops

console.log(nama)

const obj5 = {
    name: false,
    skill : [
        {
            namaSkill: "nyanyi",
            level: "expert"
        }
    ]
}

const {name} = obj5.hoby