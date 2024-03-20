const buttonOblicz = document.querySelector('#oblicz')
buttonOblicz.addEventListener('click', (e) => {
    e.preventDefault()
    let bramki= document.querySelector('#bramki').value
    let asysty= document.querySelector('#asysty').value
    let wiek= document.querySelector('#wiek').value
    let kontuzje= document.querySelector('#kontuzje').value

    let wynik = (bramki + asysty) / (wiek + kontuzje)

    document.querySelector('#points').textContent = wynik
})

const soccers = [
                 ["Armando Broja", 22, 11, 2, 2],
                 ["Jasir Asani", 28, 6, 0, 6],
                 ["Armando Sadiku", 32, 2, 5, 8],
                 ["Nedim Bajrami", 41, 22, 2, 1]
                ]

const players = document.querySelectorAll('.player')

for(const player of players){
    player.addEventListener('click', (e) => {
        let info = soccers.find((element) => element[0] == e.currentTarget.children[1].textContent)
        document.querySelector('#namesoccer').textContent = info[0]
        document.querySelector('#yearssoccer').textContent = info[1]
        document.querySelector('#bramkisoccer').textContent = info[2]
        document.querySelector('#asystysoccer').textContent = info[3]
        document.querySelector('#kontuzjesoccer').textContent = info[4]
    })
}

