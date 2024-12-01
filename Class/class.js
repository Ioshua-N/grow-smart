document.getElementById('modulo1').addEventListener('click', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDesc = document.getElementById('videoDesc');
    // Altere o link abaixo para o URL do novo vídeo que você deseja carregar
    videoPlayer.src = "https://www.youtube.com/embed/PNGa76Ih7TY";
    videoTitle.textContent = "1 - Introdução";
    videoDesc.textContent = "Descrição genérica para o Módulo 1 do cruso de Agroecologia de teste."
});

document.getElementById('modulo2').addEventListener('click', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDesc = document.getElementById('videoDesc');
    // Altere o link abaixo para o URL do novo vídeo que você deseja carregar
    videoPlayer.src = "https://www.youtube.com/embed/8GhDMjGPhyE?si=YTGg9LyeiPeMT2Su";
    videoTitle.textContent = "2 - Produção de Composto Líquido";
    videoDesc.textContent = "Agora, uma descrição breve para exemplo do módulo 2."
});