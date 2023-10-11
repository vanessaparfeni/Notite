let arr = []
let name = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let phone = document.getElementById('phone')

let output = document.querySelector(".tablo")

function Save() {
    arr.push({ name: name.value, age: age.value, city: city.value, phonr: phone.value})
    alert("Saved !")
}

function showUserName() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++){


        output.innerHTML += arr[i].name + "<br>"
    }
}

function showUserAge() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++){


        output.innerHTML += arr[i].age + "<br>"
    }
}

function showUserCity() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++){


        output.innerHTML += arr[i].city + "<br>"
    }
}

function showUserNumber() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++){


        output.innerHTML += arr[i].phone + "<br>"
    }
}