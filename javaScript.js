class Artikal{
  constructor(naziv, cena, opis){
    this.naziv = naziv
    this.cena = cena
    this.opis = opis
  }
}

const artikli = [
  new Artikal("monitor", 165, "opisMonitora"),
  new Artikal("TV", 650, "opisTva"),
  new Artikal("Mis", 20, "opisMisa")
]

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

    tabela.appendChild(tr)
  }
}
document.addEventListener("DOMContentLoaded", ubaciArtikle)