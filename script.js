const div = document.getElementById("div")

function RandomColor(max)
{
    return Math.floor(Math.random() * max)
}

div.onclick = function()
{
    const R = RandomColor(255)
    const G = RandomColor(255)
    const B = RandomColor(255)
    document.body.style.backgroundColor = `rgb(${R},${G},${B})`
}
