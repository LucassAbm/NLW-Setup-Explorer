const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // Adiciona um 'ouvidor de eventos'. Nesse caso no atributo 'button'.
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // Formato de data
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) { // Se o dia já existir...
    alert("Dia já incluso 🔴")
    return // Para a execução quando chegar aqui
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // Transforma object em texto
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // Transforma texto em object
nlwSetup.setData(data)
nlwSetup.load()
