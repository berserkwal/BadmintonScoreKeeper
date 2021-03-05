const playerOneScore = document.querySelector('#player-one')
const playerTwoScore = document.querySelector('#player-two')
const maxSelect = document.querySelector('#max-select')
const status = document.querySelector('.status')
const playerOneBtn = document.querySelector('#player-uno')
const playerTwoBtn = document.querySelector('#player-dos')
const resetBtn = document.querySelector('#reset')

let maxValue = 0

maxSelect.addEventListener('input', function () {
	maxValue = maxSelect.value
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	} else {
		maxSelect.classList.remove("error")
	}
})

let firstValue = parseInt(playerOneScore.innerText)
let secondValue = parseInt(playerTwoScore.innerText)

playerOneBtn.addEventListener('click', function () {
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	}

	firstValue++
	playerOneScore.innerText = firstValue.toString()

	if (parseInt(maxValue) > 7) {
		if (parseInt(playerOneScore.innerText) === parseInt(maxValue) - 1 && parseInt(playerTwoScore.innerText) === parseInt(maxValue) - 1) {
			maxValue = (parseInt(maxValue) + 1).toString()
			status.style.display = "block"
			status.innerText = "(Deuce)"
		} else if (parseInt(playerOneScore.innerText) === parseInt(maxValue) - 1) {
			status.style.display = "block"
			if (status.innerText === "(Deuce)") {
				status.innerText = "(Adv. P1)"
			} else {
				status.innerText = "(Game Point P1)"
			}
		}
	} else {
		if (parseInt(playerOneScore.innerText) === parseInt(maxValue) - 1 && parseInt(playerTwoScore.innerText) === parseInt(maxValue) - 1) {
			status.style.display = "block"
			status.innerText = "(Next Point Wins)"
		}
	}

	if (parseInt(playerOneScore.innerText) === parseInt(maxValue)) {
		status.innerText = "(Winner P1)"
		status.style.display = 'block'
		playerOneScore.classList.toggle('winner')
		playerTwoScore.classList.toggle('loser')
		playerOneBtn.disabled = true
		playerTwoBtn.disabled = true
		playerOneBtn.classList.toggle('disabled')
		playerTwoBtn.classList.toggle('disabled')
	}
})

playerTwoBtn.addEventListener('click', function () {
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	}

	secondValue++
	playerTwoScore.innerText = secondValue.toString()

	if (parseInt(maxValue) > 7) {
		if (parseInt(playerOneScore.innerText) === parseInt(maxValue) - 1 && parseInt(playerTwoScore.innerText) === parseInt(maxValue) - 1) {
			maxValue = (parseInt(maxValue) + 1).toString()
			status.style.display = "block"
			status.innerText = "(Deuce)"
		} else if (parseInt(playerTwoScore.innerText) === parseInt(maxValue) - 1) {
			status.style.display = "block"
			if (status.innerText === "(Deuce)") {
				status.innerText = "(Adv. P2)"
			} else {
				status.innerText = "(Game Point P2)"
			}
		}
	} else {
		if (parseInt(playerOneScore.innerText) === parseInt(maxValue) - 1 && parseInt(playerTwoScore.innerText) === parseInt(maxValue) - 1) {
			status.style.display = "block"
			status.innerText = "(Next Point Wins)"
		}
	}

	if (parseInt(playerTwoScore.innerText) === parseInt(maxValue) && playerTwoScore.innerText !== playerOneScore.innerText) {
		status.innerText = "(Winner P2)"
		status.style.display = 'block'
		playerTwoScore.classList.toggle('winner')
		playerOneScore.classList.toggle('loser')
		playerTwoBtn.disabled = true
		playerOneBtn.disabled = true
		playerTwoBtn.classList.toggle('disabled')
		playerOneBtn.classList.toggle('disabled')
	}
})


resetBtn.addEventListener('click', function () {
	status.style.display = "none"
	maxSelect.selectedIndex = 0
	maxValue = 0
	maxSelect.classList.remove("error")
	firstValue = 0
	secondValue = 0
	playerTwoBtn.disabled = false
	playerOneBtn.disabled = false
	playerOneScore.innerText = "0"
	playerTwoScore.innerText = "0"
	playerOneScore.classList.remove('winner')
	playerOneScore.classList.remove('loser')
	playerTwoScore.classList.remove('winner')
	playerTwoScore.classList.remove('loser')
	if (playerOneBtn.classList.contains('disabled')) {
		playerTwoBtn.classList.toggle('disabled')
		playerOneBtn.classList.toggle('disabled')
	}
})