const phrases = [
  "Foi assim, aos pouquinhos, que a vida começou a ficar mais bonita.",
  "Com você, até olhar a cidade vira um momento que eu quero guardar.",
  "Tem carinho que cabe num beijo — e diz tudo sem precisar falar.",
  "Os nossos encontros sempre tiveram um sabor só nosso.",
  "Entre luzes baixas e conversas longas, eu fui escolhendo você.",
  "Até a tela fica mais bonita quando a gente assiste juntinho.",
  "A nossa história também mora nesses programas simples que viraram especiais.",
  "Café da manhã, passeio e você: uma combinação que nunca erra.",
  "Em cada lugar novo, meu lugar favorito continuou sendo do seu lado.",
  "Tem amor até no jeito que a gente divide o mesmo cantinho.",
  "A gente sabe transformar qualquer plano numa memória boa.",
  "E sabe também que felicidade, às vezes, é só ficar pertinho.",
  "Você faz até os dias comuns parecerem cena de filme.",
  "Nosso amor cabe num pôr do sol, num brinde e em infinitos detalhes.",
  "Eu guardo com carinho cada tarde que o tempo deixou só pra nós.",
  "Porque dividir o lanche sempre foi uma das nossas linguagens do amor.",
  "As melhores risadas sempre aparecem quando você está por perto.",
  "Se eu pudesse escolher de novo, ainda escolheria esse sorriso.",
  "Um brinde a tudo que já fomos — e a tudo que ainda vamos ser.",
  "A gente colecionou lugares, sabores e um montão de histórias.",
  "E, claro, nenhuma história nossa estaria completa sem comida boa.",
  "Tem gestos pequenos que fazem o coração inteiro se sentir cuidado.",
  "Até nos momentos mais quietinhos, eu sinto o quanto a gente é nós.",
  "Seu jeitinho sempre encontra um jeito de me fazer sorrir.",
  "Amar você também é amar as nossas preguiças compartilhadas.",
  "E entrar um pouquinho nos mundos que você ama.",
  "Cada presente carrega um pedacinho da atenção que existe entre nós.",
  "Você e os bichinhos: uma das minhas cenas favoritas.",
  "Tem declaração que chega baixinho e fica ecoando pra sempre.",
  "Até o jantar mais simples vira lembrança quando é nosso.",
  "Gosto de como a gente se conhece nos mínimos detalhes.",
  "E de como você sempre dá um jeito de estar comigo.",
  "Nossas rotinas ganharam um tipo de aconchego que eu não sabia que precisava.",
  "O amor mora muito nesses instantes sem pose e sem pressa.",
  "No seu colo, o mundo parece desacelerar.",
  "Mesmo no frio, estar com você sempre deixa tudo mais quentinho.",
  "A gente foi criando tradições sem nem perceber.",
  "E juntando momentos que hoje parecem pequenos tesouros.",
  "Um beijo seu ainda consegue fazer o resto do mundo desaparecer.",
  "Você conhece as coisinhas que fazem meus olhos brilharem.",
  "E faz até um dia de descanso virar uma memória cheia de afeto.",
  "Há tantos pedacinhos nossos que eu queria poder guardar num potinho.",
  "Essa foto diz baixinho aquilo que meu coração sempre soube.",
  "Nossos brindes sempre celebraram muito mais do que estava na mesa.",
  "O cuidado também aparece nos presentes mais inesperados.",
  "Com você, cada caminho novo parece uma pequena aventura.",
  "Seja onde for, é ao seu lado que eu me sinto em casa.",
  "Até quem faz parte da nossa vida deixa tudo mais fofo.",
  "E no fim de cada lembrança, ainda somos nós — escolhendo ficar juntinhos."
];

const captions = [
  "o começo de tantos momentos", "a vista e a melhor companhia", "um carinho guardado", "um dos nossos sabores", "noite nossa",
  "nosso cinema", "programinha perfeito", "manhã com você", "sempre lado a lado", "aconchego",
  "do nosso jeitinho", "pertinho é melhor", "nós em movimento", "pôr do sol nosso", "tarde boa",
  "dividindo tudo", "risadas que ficam", "meu sorriso favorito", "a nós", "colecionando momentos",
  "mais uma mesa, mais uma memória", "cuidado em detalhes", "só nós dois", "seu jeitinho", "preguiça boa",
  "um pouquinho do seu mundo", "carinho que vira presente", "fofura em dobro", "te amo", "jantar nosso",
  "detalhes que dizem muito", "você sempre comigo", "rotina com afeto", "sem pose, só amor", "meu lugar de paz",
  "quentinho por dentro", "uma tradição nossa", "tesouros nossos", "um beijo e nada mais", "você me conhece",
  "descansar com você", "tantos pedacinhos", "uma certeza bonita", "celebrando a gente", "feito com carinho",
  "aventuras com você", "meu lugar é aqui", "parte da nossa história", "sempre nós"
];

const memories = phrases.map((phrase, index) => ({
  phrase,
  caption: captions[index],
  type: [0,1,2,8,9,10,11,12,13,16,33,34,42,48].includes(index) ? "video" : "image",
  src: `media/momento-${String(index + 1).padStart(2, "0")}.${[0,1,2,8,9,10,11,12,13,16,33,34,42,48].includes(index) ? "mp4" : "jpg"}`
}));

const cover = document.querySelector("#cover");
const story = document.querySelector("#story");
const ending = document.querySelector("#ending");
const phraseCard = document.querySelector("#phraseCard");
const memoryCard = document.querySelector("#memoryCard");
const phrase = document.querySelector("#phrase");
const chapter = document.querySelector("#chapter");
const currentNumber = document.querySelector("#currentNumber");
const totalNumber = document.querySelector("#totalNumber");
const progressFill = document.querySelector("#progressFill");
const mediaFrame = document.querySelector("#mediaFrame");
const mediaCaption = document.querySelector("#mediaCaption");
const previousMoment = document.querySelector("#previousMoment");
const nextMoment = document.querySelector("#nextMoment");
let current = 0;

totalNumber.textContent = String(memories.length).padStart(2, "0");

function stopVideo() {
  const video = mediaFrame.querySelector("video");
  if (video) video.pause();
}

function renderPhrase() {
  stopVideo();
  phraseCard.hidden = false;
  memoryCard.hidden = true;
  phrase.textContent = memories[current].phrase;
  chapter.textContent = `lembrança ${String(current + 1).padStart(2, "0")}`;
  currentNumber.textContent = String(current + 1).padStart(2, "0");
  progressFill.style.width = `${((current + 1) / memories.length) * 100}%`;
  previousMoment.disabled = current === 0;
  nextMoment.disabled = false;
}

function revealMemory() {
  const item = memories[current];
  mediaFrame.replaceChildren();
  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.src = item.src;
  media.alt = item.type === "image" ? `Nossa lembrança ${current + 1}` : "";
  if (item.type === "video") {
    media.controls = true;
    media.playsInline = true;
    media.preload = "metadata";
    media.setAttribute("aria-label", `Vídeo da nossa lembrança ${current + 1}`);
  } else {
    media.loading = "eager";
  }
  mediaFrame.append(media);
  mediaCaption.textContent = item.caption;
  phraseCard.hidden = true;
  memoryCard.hidden = false;
}

function goTo(index) {
  if (index >= memories.length) {
    stopVideo();
    story.hidden = true;
    ending.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  current = Math.max(0, index);
  renderPhrase();
}

function start() {
  cover.hidden = true;
  ending.hidden = true;
  story.hidden = false;
  current = 0;
  renderPhrase();
}

document.querySelector("#startButton").addEventListener("click", start);
document.querySelector("#restartButton").addEventListener("click", start);
document.querySelector("#revealButton").addEventListener("click", revealMemory);
document.querySelector("#backButton").addEventListener("click", renderPhrase);
document.querySelector("#nextButton").addEventListener("click", () => goTo(current + 1));
previousMoment.addEventListener("click", () => goTo(current - 1));
nextMoment.addEventListener("click", () => goTo(current + 1));
document.querySelector("#homeButton").addEventListener("click", () => {
  stopVideo();
  story.hidden = true;
  cover.hidden = false;
});

document.addEventListener("keydown", (event) => {
  if (story.hidden) return;
  if (event.key === "ArrowRight") goTo(current + 1);
  if (event.key === "ArrowLeft" && current > 0) goTo(current - 1);
  if ((event.key === "Enter" || event.key === " ") && !phraseCard.hidden) revealMemory();
});
