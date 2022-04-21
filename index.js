//botões jogador 1
const $rockButton1 = document.querySelector('.rock-button-player-1')
const $paperButton1 = document.querySelector('.paper-button-player-1')
const $scissorButton1 = document.querySelector('.scissor-button-player-1')

//botões jogador 2
const $rockButton2 = document.querySelector('.rock-button-player-2')
const $paperButton2 = document.querySelector('.paper-button-player-2')
const $scissorButton2 = document.querySelector('.scissor-button-player-2')

//campos do jogador 1 e 2
const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

//movimentos do jogador 1
$rockButton1.addEventListener('click', function() {$fieldPlayer1.innerHTML = '<img class="move-image" src="rock.png">'})   // quando o evento do primeiro parâmetro acontecer, a função passada no segundo parâmetro será executada
$paperButton1.addEventListener('click', function() {$fieldPlayer1.innerHTML = '<img class="move-image" src="paper.png">'})
$scissorButton1.addEventListener('click', function() {$fieldPlayer1.innerHTML = '<img class="move-image" src="scissor.png">'})

//movimentos do jogador 2
$rockButton2.addEventListener('click', function() {$fieldPlayer2.innerHTML = '<img class="move-image" src="rock.png">'})   // quando o evento do primeiro parâmetro acontecer, a função passada no segundo parâmetro será executada
$paperButton2.addEventListener('click', function() {$fieldPlayer2.innerHTML = '<img class="move-image" src="paper.png">'})
$scissorButton2.addEventListener('click', function() {$fieldPlayer2.innerHTML = '<img class="move-image" src="scissor.png">'})


// Sempre usar const para variáveis, se não usar const, usar let, evitar var
// querySelector seleciona o elemento que tem a classe passada como atributo
// sempre que uma variável representar um elemento no html, deve iniciar com $ (por convenção)