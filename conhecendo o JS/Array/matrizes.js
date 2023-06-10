const arr = [
    "1° Nível",
    ["2° Nível", 42, true],
    [
        ["3° Nível", "1° Item", "Olá, mundo!"],
        ["3° Nível", "2° Item", "Oi, mundo!"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])

