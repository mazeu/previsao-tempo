//fazer requisição para HG Brasil

const proxyUrl = 'https://cors-anywhere.krokuapp.com/'

var cidade = "";
function pesquisaCidade(cidade){
    cidade = document.getElementById("cidade").value;
    
    document.getElementById('city').innerHTML = cidade;

    
    console.log(cidade);
    cidade = encodeURIComponent(cidade);
    
    let url = 'https://api.hgbrasil.com/weather?format=json-cors&key=c6c51bec&city_name='+cidade;
    
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)

    xmlHttp.onreadystatechange = () =>{
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            //a resposta ja é um json
           
            let dadosJSONText = xmlHttp.responseText
            let  dadosJSONObj = JSON.parse(dadosJSONText)

            console.log(dadosJSONObj);

            document.getElementById('city').innerHTML = dadosJSONObj.results.city
            document.getElementById('date').innerHTML = dadosJSONObj.results.date
            document.getElementById('time').innerHTML = dadosJSONObj.results.time
            document.getElementById('temp').innerHTML = `${dadosJSONObj.results.temp} °C`
            document.getElementById('humidity').innerHTML = `${dadosJSONObj.results.humidity} %`
            
            document.getElementById('wind_speedy').innerHTML = dadosJSONObj.results.wind_speedy
            
            console.log(dadosJSONObj.results.city, dadosJSONObj.results.wind_speedy);
            
        }
    }
    xmlHttp.send()
}

function Salvar() {

    var cidade = document.getElementById('city');
    
    if(cidade == null){
        localStorage.setItem("cidades", "[]");
        cidade = [];
    }

    var registro = {
        Cidade: dadosJSONObj.results.city,
        Data: dadosJSONObj.results.date,
        Temperatura: dadosJSONObj.results.temp,
        Umidade: dadosJSONObj.results.humidity,
        Vento: dadosJSONObj.results.wind_speedy
    }

    cidade.push(registro);

    localStorage.setItem("cidades", JSON.stringify(cidade));
     
}
/*
function Salvar(){
 
    const sampleJSON = JSON.stringify({
  weather: "good",
  hour: "2h",
  city: "new york",
  state: "new york"
});
 
// É assim que se adiciona um JSON ao localStorage
// No lugar de "sampleJSON" adicione o resultado de sua requisição
// Se a requisição já for um objeto, então remove o JSON.parse
Object.entries(JSON.parse(sampleJSON)).forEach((dataFromWeather) => {
  const [key, value] = dataFromWeather;
 
  // Define o localStorage
  localStorage.setItem(key, value);
});
 
// Obter dado do JSON pelo locaStorage
localStorage.getItem("city"); // new york

/*
//encodeURIComponent() codificar difitação


const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

navigator.geolocation.getCurrentPosition(position =>{
	climaTempo(position.coords.latitude, position.coords.longitude)
	})

    function inserInHtml(json){
        $('#name-city').html(json.results.city)
        $('#graus').html(json.results.temp)
        $('#description').html(json.results.description)
        $('#humidity').html()
        $('#wind').html()
       
    }

/*
function climaTempo(Latitude, Longitude) {
	const baseUrl = `https://api.hgbrasil.com/weather?key=a41a8818&lat=$(Latitude)&lon=$(Longitude)&user_ip=remote`

	fetch(proxyUrl + baseUrl)
    .then(res => res.json())
    .then(json =>{
        console.log(json.results)
    })
    .catch(err=> console.log('Problemas ao buscar dados: ', err))
}

function pesquisaCidade (name, state) {
    fetch(proxyUrl) + `https://api.hgbrasil.com/weather?key=a41a8818&city_name=$(name),$(state)`)
    .then(res => res.json())
    .catch(err=> console.log('Problemas ao buscar dados: ', err))
}

const submit = document.querySelector('[wm-submit]')
submit.onclick = function(e) {
    e.preventDefault()

    const form = e.target.parentNode
    console.log(form)
    const city = form.city.value.replace(/ /g,"-")
    const state = form.estado.value

    pesquisaCidade(city.toLoweCase(), state.toLowerCase())
}*/