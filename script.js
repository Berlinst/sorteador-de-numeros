const sort = document.getElementById("sort")
const sortD4 = document.getElementById("sortD4")
const sortD6 = document.getElementById("sortD6")
const sortD8 = document.getElementById("sortD8")
const sortD10 = document.getElementById("sortD10")
const sortD20 = document.getElementById("sortD20")
const sortD100 = document.getElementById("sortD100")


sort.addEventListener("click", function(e){
    const min = document.getElementById("min")
    const max = document.getElementById("max")

    const resultado = document.querySelector("#resultado")

    const minValue = parseInt(min.value);
    const maxValue = parseInt(max.value);

    minValueCeil = Math.ceil(minValue);
    maxValueCeil = Math.ceil(maxValue);

    console.log(maxValueCeil)
    console.log(minValueCeil)
        

    const resultFunction = (Math.floor(Math.random() * (maxValueCeil - minValueCeil) + minValueCeil))
    resultado.innerHTML = resultFunction
})

sortD4.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD4")

    const resultFunction = (Math.floor(Math.random() * (5 - 1) + 1))
    resultado.innerHTML = resultFunction
})

sortD6.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD6")

    const resultFunction = (Math.floor(Math.random() * (7 - 1) + 1))
    resultado.innerHTML = resultFunction
})

sortD8.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD8")

    const resultFunction = (Math.floor(Math.random() * (9 - 1) + 1))
    resultado.innerHTML = resultFunction
})

sortD10.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD10")

    const resultFunction = (Math.floor(Math.random() * (11 - 1) + 1))
    resultado.innerHTML = resultFunction
})

sortD20.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD20")

    const resultFunction = (Math.floor(Math.random() * (21 - 1) + 1))
    resultado.innerHTML = resultFunction
})

sortD100.addEventListener("click", function(e){
    const resultado = document.querySelector(".resultD100")

    const resultFunction = (Math.floor(Math.random() * (101 - 1) + 1))
    resultado.innerHTML = resultFunction
})