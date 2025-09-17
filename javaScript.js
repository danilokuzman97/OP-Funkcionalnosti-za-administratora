class Artikal{
  constructor(naziv, cena, opis){
    this.naziv = naziv
    this.cena = cena
    this.opis = opis
  }
}

let artikli = ucitajArtikleIzLocalStorage()

if(artikli.lenght === 0){
  artikli = [
    { naziv: "monitor", cena: 165, opis: "opisMonitora" },
    { naziv: "TV", cena: 650, opis: "opisTelevizora" },
    { naziv: "Mis", cena: 20, opis: "opisMisa" }
  ]
  sacuvajArtikleULocalStorage(artikli)
}

function ubaciArtikle(){
  let tabela = document.querySelector('#telo')
  tabela.innerHTML = ''

  for(let i = 0; i < artikli.length; i++){
    let tr = document.createElement("tr")

    let tdBr = document.createElement("td")
    tdBr.textContent = i + 1

    let tdNaziv = document.createElement("td")
    tdNaziv.textContent = artikli[i].naziv

    let tdCena = document.createElement("td")
    tdCena.textContent = artikli[i].cena

    tr.appendChild(tdBr)
    tr.appendChild(tdNaziv)
    tr.appendChild(tdCena)

    tr.addEventListener('click', function(){
      prikaziDetaljeArtikla(artikli[i])
    })

    tabela.appendChild(tr)
  }
}

function prikaziDetaljeArtikla(artikal){
  let p = document.createElement("p")

  p.innerHTML = "Naziv: " + artikal.naziv + "<br>" + "Cena: " + artikal.cena + "<br>" + "Opis: " + artikal.opis

  let detaljiArtikla = document.querySelector("#detaljiArtikla")

  detaljiArtikla.innerHTML = ''

  detaljiArtikla.appendChild(p)
}

function dodajArtikalUTabelu(artikli){

  let btn = document.querySelector("#dugme")
  btn.addEventListener('click', function(reload){
    reload.preventDefault();

    const forma = document.querySelector("#forma")

  const formData = new FormData(forma)

  const naziv = formData.get("naziv")
  const cena = formData.get("cena")
  const opis = formData.get("opis")

  const noviArtikal = new Artikal(naziv, cena, opis)

  artikli.push(noviArtikal)
  ubaciArtikle()
  sacuvajArtikleULocalStorage(artikli)

  })
}

function sacuvajArtikleULocalStorage(artikli) {
    localStorage.setItem("artikli", JSON.stringify(artikli))
}

function ucitajArtikleIzLocalStorage() {
    let podaci = localStorage.getItem("artikli")
    if (podaci) {
        return JSON.parse(podaci)
    }
    return []
}


document.addEventListener("DOMContentLoaded", function(){
  ubaciArtikle()
  dodajArtikalUTabelu(artikli)
})