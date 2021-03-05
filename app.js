const p1Display = document.querySelector('#player-one')
const p2Display = document.querySelector('#player-two')
const maxSelect = document.querySelector('#max-select')
const stat = document.querySelector('.status')
const p1Btn = document.querySelector('#player-uno')
const p2Btn = document.querySelector('#player-dos')
const resetBtn = document.querySelector('#reset')

let maxValue = 0
p1Score = 0
p2Score = 0

maxSelect.addEventListener('input', function () {
	maxValue = parseInt(maxSelect.value)
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	} else {
		maxSelect.classList.remove("error")
	}
	reset()
})

p1Btn.addEventListener('click', function () {
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	}

	p1Score++
	p1Display.innerText = p1Score.toString()

	if (maxValue > 7) {
		checkDeuce()
	} else {
		lowerCheck()
	}

	if (p1Score === maxValue) {
		stat.style.color = "white"
		stat.innerText = "(Game Over)"
		stat.style.display = 'block'
		p1Display.classList.toggle('winner')
		p2Display.classList.toggle('loser')
		gameOver()
	}
})

p2Btn.addEventListener('click', function () {
	if (maxValue == 0) {
		maxSelect.classList.add("error")
		return
	}

	p2Score++
	p2Display.innerText = p2Score.toString()

	if (maxValue > 7) {
		checkDeuce()
	} else {
		lowerCheck()
	}

	if (p2Score === maxValue && p2Score !== p1Score) {
		stat.style.color = "white"
		stat.innerText = "(Game Over)"
		stat.style.display = 'block'
		p2Display.classList.add('winner')
		p1Display.classList.add('loser')
		gameOver()
	}
})

resetBtn.addEventListener('click', function () {
	reset()
	maxValue = parseInt(maxSelect.value)
})



function lowerCheck() {
	if (p1Score === maxValue - 1 && p2Score === maxValue - 1) {
		stat.style.color = "white"
		stat.innerText = "(Next Point Wins)"
	}
	return
}

function checkDeuce() {
	if (p1Score === maxValue - 1 && p2Score === maxValue - 1) {
		maxValue++
		stat.style.color = "white"
		stat.style.display = "block"
		stat.innerText = "(Deuce)"
	} else if (p1Score === maxValue - 1 || p2Score === maxValue - 1) {
		stat.style.color = "white"
		if (stat.innerText === "(Deuce)") {
			stat.innerText = "(Adv.)"
		} else {
			stat.style.color = "white"
			stat.innerText = "(Game Point)"
		}
	}
	return
}

function reset() {
	stat.style.color = "#111"
	stat.innerText = "Status"
	maxSelect.classList.remove("error")
	p1Score = 0
	p2Score = 0
	p2Btn.disabled = false
	p1Btn.disabled = false
	p1Display.innerText = "0"
	p2Display.innerText = "0"
	p1Display.classList.remove('winner')
	p1Display.classList.remove('loser')
	p2Display.classList.remove('winner')
	p2Display.classList.remove('loser')
	p2Btn.classList.remove('disabled')
	p1Btn.classList.remove('disabled')
}

function gameOver() {
	p2Btn.disabled = true
	p1Btn.disabled = true
	p2Btn.classList.toggle('disabled')
	p1Btn.classList.toggle('disabled')
}