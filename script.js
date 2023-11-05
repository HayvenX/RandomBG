
let div = document.getElementById("div")

function RandomColor(max)
{
    return Math.floor(Math.random() * max)
}

div.onclick = function()
{
    let R = RandomColor(255)
    let G = RandomColor(255)
    let B = RandomColor(255)
    document.body.style.backgroundColor = `rgb(${R},${G},${B})`
}
