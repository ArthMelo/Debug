let nivelAtual = 0;
const nivelTotal = 10; 

// Inicializa o progresso dos níveis
let progress = JSON.parse(localStorage.getItem('progresso')) || [
    {"nivel": 1, "completado": true},
    {"nivel": 2, "completado": false},
    {"nivel": 3, "completado": false},
    {"nivel": 4, "completado": false},
    {"nivel": 5, "completado": false},
    {"nivel": 6, "completado": false},
    {"nivel": 7, "completado": false},
    {"nivel": 8, "completado": false},
    {"nivel": 9, "completado": false},
    {"nivel": 10, "completado": false}
];

// Atualiza a imagem do mapa
function atualizarMapa() {
    const mapImage = document.getElementById('mapImage');
    mapImage.src = `imagens/mapa-moldura${nivelAtual}.png`;
}

// Navega para o nível anterior
function esquerda() {
    nivelAtual = (--nivelAtual + nivelTotal) % nivelTotal
    atualizarMapa();
    atualizarEstadoBotao();
}

// Navega para o próximo nível
function direita() {
    nivelAtual = (++nivelAtual) % nivelTotal;
    atualizarMapa();
    atualizarEstadoBotao();
}

// Atualiza o estado do botão "Selecionar"
function atualizarEstadoBotao() {
    const botaoSelecionar = document.getElementById('botaoSelecionar');
    if (progress[nivelAtual].completado) {
        botaoSelecionar.disabled = false;
        botaoSelecionar.style.backgroundColor = "#e0aa9b";
        botaoSelecionar.style.cursor = "pointer";
    } else {
        botaoSelecionar.disabled = true;
        botaoSelecionar.style.backgroundColor = "#cccccc";
        botaoSelecionar.style.cursor = "not-allowed";
    }
}

// Event listener para o botão "Selecionar"
document.getElementById('botaoSelecionar').addEventListener('click', () => {
    if (progress[nivelAtual].completado) {
        window.location.href = `nivel${nivelAtual + 1}.html`;
    }
});

// Inicializa o mapa e o estado do botão
atualizarMapa();
atualizarEstadoBotao();

// Função para completar um nível
function completarNivel(nivel) {
    if (nivel < nivelTotal) {
        progress[nivel].completado = true;
        localStorage.setItem('progresso', JSON.stringify(progress));
        atualizarEstadoBotao();
    }
}
