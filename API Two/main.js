let inp=document.querySelector("input");
let form=document.querySelector("form");
let table=document.querySelector("table");
form.addEventListener("submit",(r)=>{
    r.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=e8bf938e92e740a05fac911823df81e4`)
    .then(response=>{
        response.json()
        .then(value=>{
            data=""
            data+=`<tr>
            <th scope="row">description</th>
            <td scope="row">${value.weather[0].description}<td>
            </tr>
            <tr>
            <th scope="row">temperature</th>
            <td>${value.main.temp}</td>
            </tr>
            <tr>
            <th scope="row">wind speed</th>
            <td>${value.wind.speed}</td>
            </tr>`
            
            table.innerHTML=data
            
        })
    })
})