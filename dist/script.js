const phrases = [
  "Foi assim, aos pouquinhos, que a vida começou a ficar mais bonita.", "Com você, até olhar a cidade vira um momento que eu quero guardar.", "Tem carinho que cabe num beijo — e diz tudo sem precisar falar.", "Os nossos encontros sempre tiveram um sabor só nosso.", "Entre luzes baixas e conversas longas, eu fui escolhendo você.",
  "Até a tela fica mais bonita quando a gente assiste juntinho.", "A nossa história também mora nesses programas simples que viraram especiais.", "Café da manhã, passeio e você: uma combinação que nunca erra.", "Em cada lugar novo, meu lugar favorito continuou sendo do seu lado.", "Tem amor até no jeito que a gente divide o mesmo cantinho.",
  "A gente sabe transformar qualquer plano numa memória boa.", "E sabe também que felicidade, às vezes, é só ficar pertinho.", "Você faz até os dias comuns parecerem cena de filme.", "Nosso amor cabe num pôr do sol, num brinde e em infinitos detalhes.", "Eu guardo com carinho cada tarde que o tempo deixou só pra nós.",
  "Porque dividir o lanche sempre foi uma das nossas linguagens do amor.", "As melhores risadas sempre aparecem quando você está por perto.", "Se eu pudesse escolher de novo, ainda escolheria esse sorriso.", "Um brinde a tudo que já fomos — e a tudo que ainda vamos ser.", "A gente colecionou lugares, sabores e um montão de histórias.",
  "E, claro, nenhuma história nossa estaria completa sem comida boa.", "Tem gestos pequenos que fazem o coração inteiro se sentir cuidado.", "Até nos momentos mais quietinhos, eu sinto o quanto a gente é nós.", "Seu jeitinho sempre encontra um jeito de me fazer sorrir.", "Amar você também é amar as nossas preguiças compartilhadas.",
  "E entrar um pouquinho nos mundos que você ama.", "Cada presente carrega um pedacinho da atenção que existe entre nós.", "Você e os bichinhos: uma das minhas cenas favoritas.", "Tem declaração que chega baixinho e fica ecoando pra sempre.", "Até o jantar mais simples vira lembrança quando é nosso.",
  "Gosto de como a gente se conhece nos mínimos detalhes.", "E de como você sempre dá um jeito de estar comigo.", "Nossas rotinas ganharam um tipo de aconchego que eu não sabia que precisava.", "O amor mora muito nesses instantes sem pose e sem pressa.", "No seu colo, o mundo parece desacelerar.",
  "Mesmo no frio, estar com você sempre deixa tudo mais quentinho.", "A gente foi criando tradições sem nem perceber.", "E juntando momentos que hoje parecem pequenos tesouros.", "Um beijo seu ainda consegue fazer o resto do mundo desaparecer.", "Você conhece as coisinhas que fazem meus olhos brilharem.",
  "E faz até um dia de descanso virar uma memória cheia de afeto.", "Há tantos pedacinhos nossos que eu queria poder guardar num potinho.", "Essa foto diz baixinho aquilo que meu coração sempre soube.", "Nossos brindes sempre celebraram muito mais do que estava na mesa.", "O cuidado também aparece nos presentes mais inesperados.",
  "Com você, cada caminho novo parece uma pequena aventura.", "Seja onde for, é ao seu lado que eu me sinto em casa.", "Até quem faz parte da nossa vida deixa tudo mais fofo.", "E no fim de cada lembrança, ainda somos nós — escolhendo ficar juntinhos."
];

const captions = [
  "o começo de tantos momentos", "a vista e a melhor companhia", "um carinho guardado", "um dos nossos sabores", "noite nossa", "nosso cinema", "programinha perfeito", "manhã com você", "sempre lado a lado", "aconchego", "do nosso jeitinho", "pertinho é melhor", "nós em movimento", "pôr do sol nosso", "tarde boa", "dividindo tudo", "risadas que ficam", "meu sorriso favorito", "a nós", "colecionando momentos", "mais uma mesa, mais uma memória", "cuidado em detalhes", "só nós dois", "seu jeitinho", "preguiça boa", "um pouquinho do seu mundo", "carinho que vira presente", "fofura em dobro", "te amo", "jantar nosso", "detalhes que dizem muito", "você sempre comigo", "rotina com afeto", "sem pose, só amor", "meu lugar de paz", "quentinho por dentro", "uma tradição nossa", "tesouros nossos", "um beijo e nada mais", "você me conhece", "descansar com você", "tantos pedacinhos", "uma certeza bonita", "celebrando a gente", "feito com carinho", "aventuras com você", "meu lugar é aqui", "parte da nossa história", "sempre nós"
];

const videoIndexes = new Set([0,1,2,8,9,10,11,12,13,16,33,34,42,48]);
const carousel = document.querySelector("#carousel");
const container = document.querySelector("#memorySlides");
const counter = document.querySelector("#counter");

function mediaPath(index) {
  const extension = videoIndexes.has(index) ? "mp4" : "jpg";
  return `media/momento-${String(index + 1).padStart(2, "0")}.${extension}`;
}

phrases.forEach((text, index) => {
  const slide = document.createElement("section");
  slide.className = "slide memory-slide";
  slide.dataset.index = index;
  slide.innerHTML = `
    <div class="memory-shell">
      <div class="prompt">
        <span class="number">lembrança ${String(index + 1).padStart(2, "0")}</span>
        <p class="phrase">${text}</p>
        <button class="reveal" type="button">toca aqui pra ver <span>✦</span></button>
      </div>
      <div class="media-view" hidden>
        <div class="media-box">
          <button class="tap-again" type="button" aria-label="Voltar para a frase">↶</button>
        </div>
        <div class="caption-row">
          <p class="caption">${captions[index]}</p>
          <button class="next-arrow" type="button" aria-label="Próxima lembrança">→</button>
        </div>
      </div>
    </div>`;
  container.append(slide);

  const prompt = slide.querySelector(".prompt");
  const view = slide.querySelector(".media-view");
  const mediaBox = slide.querySelector(".media-box");

  slide.querySelector(".reveal").addEventListener("click", () => {
    if (!mediaBox.querySelector("img, video")) {
      const media = document.createElement(videoIndexes.has(index) ? "video" : "img");
      media.src = mediaPath(index);
      if (media.tagName === "VIDEO") {
        media.controls = true;
        media.playsInline = true;
        media.preload = "metadata";
        media.setAttribute("aria-label", `Vídeo da lembrança ${index + 1}`);
      } else {
        media.alt = `Nossa lembrança ${index + 1}`;
      }
      mediaBox.append(media);
    }
    prompt.hidden = true;
    view.hidden = false;
  });

  slide.querySelector(".tap-again").addEventListener("click", () => {
    mediaBox.querySelector("video")?.pause();
    view.hidden = true;
    prompt.hidden = false;
  });

  slide.querySelector(".next-arrow").addEventListener("click", () => {
    mediaBox.querySelector("video")?.pause();
    (slide.nextElementSibling || document.querySelector("#ending")).scrollIntoView({ behavior:"smooth" });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.intersectionRatio < .7) return;
    document.querySelectorAll("video").forEach(video => {
      if (!entry.target.contains(video)) video.pause();
    });
    const index = Number(entry.target.dataset.index);
    counter.textContent = Number.isInteger(index) ? `${String(index + 1).padStart(2,"0")} / ${phrases.length}` : entry.target.classList.contains("ending-slide") ? `♡ / ${phrases.length}` : `00 / ${phrases.length}`;
  });
}, { root:carousel, threshold:[.7] });

document.querySelectorAll(".slide").forEach(slide => observer.observe(slide));
document.querySelector("#startButton").addEventListener("click", () => document.querySelector(".memory-slide").scrollIntoView({ behavior:"smooth" }));
document.querySelector("#restartButton").addEventListener("click", () => carousel.firstElementChild.scrollIntoView({ behavior:"smooth" }));
