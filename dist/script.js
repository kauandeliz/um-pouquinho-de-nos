const memories = [
  {memory:6,date:"13 de fev",text:"Um dos nossos primeiros encontros depois da noite do Galeria. Lembro de estarmos muito bêbados no final da noite. Meu drink favorito é Campari porque me lembra você."},
  {memory:1,date:"17 de fev",text:"Me lembro de ter ficado triste por ainda não ter a aliança nesse dia, kkkkk. Fiquei com vergonha de ter que dividir a conta contigo por causa do valor."},
  {memory:2,date:"17 de fev",text:"Ainda no KSA — a melhor pizza que comi na vida."},
  {memory:3,date:"7 de março",text:"Planejei essa surpresa por dias. Estava muito ansioso para pedir você em namoro, mesmo sabendo que você aceitaria. Acho que consegui manter a surpresa."},
  {memory:4,date:"7 de março",text:"Sempre disse que amo o seu cheiro, né?"},
  {memory:5,date:"7 de março",text:"Ficamos engraçados nessa foto. Tô com saudades."},
  {memory:11,date:"8 de março",text:"Nós bem fofos combinandinho."},
  {memory:7,date:"2 de abril",text:"Recém-namorados, uhull! Lembro que fiquei muito feliz em poder dizer pra todo mundo que estava namorando você. Precisamos terminar de ver Nana."},
  {memory:8,date:"2 de abril",text:"Você sempre acerta nos presentes. Ninguém nunca prestou tanta atenção em mim."},
  {memory:9,date:"4 de abril",text:"Os dois amores da minha vida."},
  {memory:10,date:"5 de abril",text:"Muito chocolate na Páscoa, quando você ainda não tinha intolerância à lactose. Droga, o destino não deixou eu te mimar com chocolates pra sempre :("},
  {memory:15,date:"8 de abril",text:"Você sabe mesmo os meus gostos."},
  {memory:12,date:"19 de abril",text:"Chaveirinhos de Pokémon combinando."},
  {memory:13,date:"10 de maio",text:"Lembro que você ficou superfeliz quando coloquei sua foto na minha carteira. Pena que você perderia esse relicário alguns dias depois, kkkkk."},
  {memory:14,date:"10 de maio",text:"Noites perfeitas."},
  {memory:20,date:"11 de maio",text:"Idas e vindas para poder te ver. A parte favorita da minha vida ligada a rodoviárias, kkkkk."},
  {memory:36,date:"11 de maio",text:"Você sempre foi o meu lar."},
  {memory:37,date:"11 de maio",text:"Durmo muito fácil quando estou com você."},
  {memory:17,date:"5 de junho",text:"Que saudadessssss!"},
  {memory:18,date:"5 de junho",text:"Melhor café de Lages, disparado. Pegamos muita chuva nesse dia."},
  {memory:21,date:"6 de junho",text:"Tivemos que comemorar o Dia dos Namorados uma semana antes, kkkkk. Fiquei muito feliz em ver sua reação depois do presente que te dei. A propósito, preciso colocar perfume no cavalo-marinho de novo."},
  {memory:19,date:"7 de junho",text:"Amei o presente de Dia dos Namorados. Inclusive, tenho o Lego do Homem-Aranha até hoje no meu guarda-roupa."},
  {memory:38,date:"12 de junho",text:"Fofos. Dizem que a gente combina muito."},
  {memory:16,date:"4 de julho",text:"Você me apresentando o seu mundinho. Amo ver coisas novas com você."},
  {memory:22,date:"7 de julho",text:"De pijaminhas combinando e assistindo anime juntinhos. Meu tipo favorito de noite com você."},
  {memory:27,date:"8 de julho",text:"Passeamos muito. Lembro que fugi do meu emprego e passei as férias de julho em Lages. Amei cada segundo."},
  {memory:23,date:"18 de julho",text:"O melhor presente de aniversário que já ganhei. Acho que foi a primeira vez que você me viu chorando; voltei a ser criança naquela noite."},
  {memory:24,date:"3 de agosto",text:"Saudades desse dia. Chegamos exaustos em casa."},
  {memory:25,date:"3 de agosto",text:"Amo você, gatinha."},
  {memory:26,date:"3 de agosto",text:"Quando o Serkan finalmente se acostumou comigo. Antes, eu tinha medo de ele me morder, kkkkk."},
  {memory:39,date:"3 de agosto",text:"Minha melhor companhia."},
  {memory:40,date:"4 de setembro",text:"Primeira vez que você veio para Curitiba. Fiquei tão feliz e fiz de tudo para que fosse a melhor experiência que você poderia ter. Uma pena ter chovido o tempo todo, kkkkk."},
  {memory:41,date:"4 de setembro",text:"A melhor vista que eu poderia ter é você. Sempre foi você."},
  {memory:42,date:"4 de setembro",text:"Nossa, como a gente se divertiu essa noite. Saudades de você, minha princesa."},
  {memory:28,date:"5 de setembro",text:"Lugar bonito. Pena que estávamos cansadinhos e voltamos muito cedo pra casa, kkkkk."},
  {memory:30,date:"5 de setembro",text:"Café da manhã pós-chuva, kkkkk. Nunca vi chover tanto em uma cidade."},
  {memory:29,date:"6 de setembro",text:"Nossa primeira vez no cinema. Até que demoramos muito, kkkkk."},
  {memory:32,date:"8 de setembro",text:"Amei os dias em que você esteve aqui comigo. Você me faz muito feliz."},
  {memory:31,date:"10 de setembro",text:"Mais café e chuva. Sem querer dizer nada, mas muito melhor que o Starbucks. Amei o seu bolo de amêndoas."},
  {memory:43,date:"10 de setembro",text:"Matando aula para tomar um cafezinho. Nossos melhores dates."},
  {memory:44,date:"12 de setembro",text:"Acho que nossas almas combinam também."},
  {memory:45,date:"12 de setembro",text:"Programas caseiros também são ótimos com você. E, modéstia à parte, eu cozinho bem, kkkkk."},
  {memory:46,date:"02 de novembro",text:"Bobocas."},
  {memory:33,date:"18 de outubro",text:"O tão sonhado piquenique virou realidade."},
  {memory:34,date:"18 de outubro",text:"O tão sonhado piquenique virou realidade."},
  {memory:35,date:"18 de outubro",text:"Te amo."},
  {memory:47,date:"18 de outubro",text:"O tão sonhado piquenique virou realidade."},
  {memory:48,date:"18 de outubro",text:"Lutando pela democracia. Você me fez tomar uma posição na marra, kkkkk."},
  {memory:49,date:"18 de outubro",text:"acho que esse nem precisa de legenda né?"}
];
const carousel = document.querySelector("#carousel");
const container = document.querySelector("#memorySlides");
const counter = document.querySelector("#counter");
const dotNav = document.querySelector("#dotNav");
const editorMode = new URLSearchParams(location.search).get("editar") === "1";
const storageKey = "nossa-historia-conteudo-v1";
let savedContent = {};
try { savedContent = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { savedContent = {}; }
let activeMemory = 0;

function memoryContent(index) {
  return {
    date: savedContent[index]?.date || memories[index].date,
    text: savedContent[index]?.text ?? memories[index].text
  };
}

function mediaPath(index) {
  const original = memories[index].memory;
  const extension = original >= 36 ? "mp4" : "jpg";
  return `media/momento-${String(original).padStart(2, "0")}.${extension}`;
}

memories.forEach((memory, index) => {
  const content = memoryContent(index);
  const mediaSlide = document.createElement("section");
  mediaSlide.className = "slide memory-slide photo-slide";
  mediaSlide.dataset.panel = index;
  mediaSlide.dataset.memory = index;
  mediaSlide.dataset.kind = memory.memory >= 36 ? "vídeo" : "foto";
  mediaSlide.innerHTML = `
    <div class="memory-shell">
      <div class="media-view">
        <div class="media-box">
        </div>
        <div class="caption-row">
          <div class="caption-copy">
            <time class="caption-date">uma data especial</time>
            <p class="caption caption-text"></p>
          </div>
        </div>
      </div>
    </div>`;
  container.append(mediaSlide);
  mediaSlide.querySelector(".caption-date").textContent = content.date || "uma data especial";
  mediaSlide.querySelector(".caption-text").textContent = content.text;

  const media = document.createElement(memory.memory >= 36 ? "video" : "img");
  media.src = mediaPath(index);
  if (media.tagName === "VIDEO") {
    media.controls = true;
    media.playsInline = true;
    media.preload = "metadata";
    media.setAttribute("aria-label", `Vídeo da lembrança ${index + 1}`);
  } else {
    media.alt = `Nossa lembrança ${index + 1}`;
    media.loading = "lazy";
  }
  mediaSlide.querySelector(".media-box").append(media);
});

function refreshMemory(index) {
  const slide = document.querySelector(`.photo-slide[data-memory="${index}"]`);
  const content = memoryContent(index);
  slide.querySelector(".caption-date").textContent = content.date || "uma data especial";
  slide.querySelector(".caption-text").textContent = content.text;
}

const editorTools = document.querySelector("#editorTools");
const memoryEditor = document.querySelector("#memoryEditor");
const dateInput = document.querySelector("#dateInput");
const textInput = document.querySelector("#textInput");
if (editorMode) editorTools.hidden = false;

document.querySelector("#editCurrent").addEventListener("click", () => {
  const content = memoryContent(activeMemory);
  document.querySelector("#editorKicker").textContent = `memória ${String(activeMemory + 1).padStart(2,"0")}`;
  dateInput.value = content.date;
  textInput.value = content.text;
  memoryEditor.showModal();
});

document.querySelector("#saveMemory").addEventListener("click", event => {
  event.preventDefault();
  savedContent[activeMemory] = { date: dateInput.value.trim(), text: textInput.value.trim() };
  localStorage.setItem(storageKey, JSON.stringify(savedContent));
  refreshMemory(activeMemory);
  memoryEditor.close();
});

document.querySelector("#exportContent").addEventListener("click", () => {
  const complete = memories.map((memory, index) => ({ memory: memory.memory, ...memoryContent(index) }));
  const blob = new Blob([JSON.stringify(complete, null, 2)], { type:"application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "nossas-memorias.json";
  link.click();
  URL.revokeObjectURL(link.href);
});

function updateDots(current) {
  const radius = 4;
  const panelCount = memories.length;
  const start = Math.max(0, Math.min(current - radius, panelCount - (radius * 2 + 1)));
  const end = Math.min(panelCount, start + radius * 2 + 1);
  dotNav.replaceChildren();
  for (let index = start; index < end; index += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    const memory = index + 1;
    dot.setAttribute("aria-label", `Ir para lembrança ${memory}`);
    if (index === current) {
      dot.classList.add("active");
      dot.setAttribute("aria-current", "true");
    } else if (Math.abs(index - current) <= 2) {
      dot.classList.add("near");
    }
    if ((index === start && start > 0) || (index === end - 1 && end < panelCount)) dot.classList.add("edge");
    dot.addEventListener("click", () => document.querySelector(`.memory-slide[data-panel="${index}"]`).scrollIntoView({ behavior:"smooth" }));
    dotNav.append(dot);
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.intersectionRatio < .7) return;
    document.querySelectorAll("video").forEach(video => {
      if (!entry.target.contains(video)) video.pause();
    });
    const panel = Number(entry.target.dataset.panel);
    const memory = Number(entry.target.dataset.memory);
    if (Number.isInteger(memory)) activeMemory = memory;
    counter.textContent = Number.isInteger(panel) ? `${String(memory + 1).padStart(2,"0")} / ${memories.length}` : entry.target.classList.contains("ending-slide") ? `♡ / ${memories.length}` : `00 / ${memories.length}`;
    if (Number.isInteger(panel)) {
      dotNav.hidden = false;
      updateDots(panel);
    } else {
      dotNav.hidden = true;
    }
  });
}, { root:carousel, threshold:[.7] });

document.querySelectorAll(".slide").forEach(slide => observer.observe(slide));
const soundtrack = document.querySelector("#soundtrack");
const musicToggle = document.querySelector("#musicToggle");
soundtrack.addEventListener("error", () => {
  musicToggle.hidden = false;
  musicToggle.textContent = "!";
  musicToggle.setAttribute("aria-label", "Não foi possível carregar a música");
});
async function startMusic() {
  soundtrack.volume = .28;
  try {
    await soundtrack.play();
    musicToggle.hidden = false;
    musicToggle.textContent = "♫";
    musicToggle.setAttribute("aria-label", "Pausar música");
    musicToggle.setAttribute("aria-pressed", "true");
  } catch {
    musicToggle.hidden = false;
    musicToggle.textContent = "♪";
    musicToggle.setAttribute("aria-label", "Toque aqui para iniciar a música");
    musicToggle.setAttribute("aria-pressed", "false");
  }
}
musicToggle.addEventListener("click", () => {
  if (soundtrack.paused) startMusic();
  else {
    soundtrack.pause();
    musicToggle.textContent = "♪";
    musicToggle.setAttribute("aria-label", "Tocar música");
    musicToggle.setAttribute("aria-pressed", "false");
  }
});
document.querySelector("#startButton").addEventListener("click", async () => {
  await startMusic();
  document.querySelector(".memory-slide").scrollIntoView({ behavior:"smooth" });
});
