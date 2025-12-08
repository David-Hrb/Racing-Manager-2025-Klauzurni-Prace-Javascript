<template>
  <div v-if="authorNotes" class="author-notes-modal">
    <div class="author-notes-modal-cont">
      <button class="settings-btn settings-close-btn" @click="authorNotes = false">
        <svg width="2rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve">
          <path fill="currentcolor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
      </button>
      <nav>
          <h2>Obsah</h2>
          <ul>
              <li><a href="#uvod">Úvodní text</a></li>
              <li><a href="#uvodni-menu">Úvodní menu</a>
                  <ul>
                      <li class="sub-item"><a href="#nacist-hru">Načíst hru</a></li>
                      <li class="sub-item"><a href="#nova-hra">Nová hra</a></li>
                      <li class="sub-item"><a href="#nastaveni">Nastavení</a></li>
                  </ul>
              </li>
              <li><a href="#postava">Vytváření postavy</a></li>
              <li><a href="#tym">Vybrání týmu</a></li>
              <li><a href="#herni-menu">Herní menu</a>
                  <ul>
                      <li class="sub-item"><a href="#navigace">Navigace</a></li>
                      <li class="sub-item"><a href="#vylepseni">Vylepšení</a></li>
                      <li class="sub-item"><a href="#kalendar">Kalendář</a></li>
                      <li class="sub-item"><a href="#jezdci">Jezdci</a></li>
                      <li class="sub-item"><a href="#statistiky">Statistiky</a></li>
                      <li class="sub-item"><a href="#zebricek">Žebříček</a></li>
                  </ul>
              </li>
              <li><a href="#kvalifikace">Kvalifikace</a></li>
              <li><a href="#zavod">Závod</a></li>
          </ul>
        </nav>

        <main>
            <section id="uvod">
                <h2>1. Úvodní text</h2>
                <div class="intro-text">
                    <p>V této hře se ujmete náročné role manažera motoristického týmu. Jde o komplexní titul, který kombinuje prvky hloubkové strategie a realistické simulace.</p>
                    <p>Vaším cílem je bojovat o vítězství, pódia, body, a hlavně získat vašemu týmu titul v šampionátu. Musíte prokázat, že jste schopni vylepšovat svůj monopost, podepisovat jezdce, manažerovat závody a udržet svůj tým daleko od finančních problémů.</p>
                </div>
            </section>

            <section id="uvodni-menu">
                <h2>2. Úvodní menu</h2>
                <p>Hlavní menu nabízí čtyři základní možnosti:</p>

                <h3 id="nacist-hru">2.1 Načíst hru</h3>
                <p>Otevře Průzkumníka souborů, kde můžete vybrat uloženou hru, kterou chcete obnovit.</p>
                <div class="important">
                    <strong>Důležité:</strong> Uložená hra musí být ve formátu JSON a musí být vytvořena touto hrou.
                </div>

                <h3 id="nova-hra">2.2 Nová hra</h3>
                <p>Přesune vás do menu tvorby postavy, kde si můžete vytvořit a upravit svou herní postavu.</p>

                <h3 id="nastaveni">2.3 Nastavení</h3>
                <p>Otevře okno nastavení, kde si můžete přizpůsobit herní prostředí. Můžete zde upravit:</p>
                <ul>
                    <li>Hlasitost zvuku</li>
                    <li>Zapnout/vypnout hudbu na pozadí</li>
                </ul>

                <h3>2.4 Autorovy poznámky</h3>
                <p>Otevře okno, ve kterém si můžete přečíst text aktuální dokumentace.</p>
                
                <img src="/images/index/01.png" class="infoimg" alt="01">
            </section>

            <section id="postava">
                <h2>3. Vytváření postavy</h2>
                <p>Při volbě Nová hra se zobrazí obrazovka, kde provedete kompletní nastavení vašeho herního charakteru.</p>
                
                <h3>Povinné kroky:</h3>
                <ul>
                    <li><strong>Jméno:</strong> Zadejte jméno postavy. Povoleny jsou pouze písmena (velká i malá). Číslice a speciální znaky nejsou přípustné.</li>
                    <li><strong>Příjmení:</strong> Zadejte příjmení postavy. Stejně jako u jména, povoleny jsou pouze písmena.</li>
                    <li><strong>Národnost:</strong> Z rozbalovacího seznamu vyberte národnost vaší postavy.</li>
                    <li><strong>Datum narození:</strong> Vyberte datum narození postavy pomocí kalendářního nástroje.
                        <div class="note">
                            <strong>Omezení:</strong> Rok narození musí být v rozsahu od 1945 do 2007.
                        </div>
                    </li>
                    <li><strong>Bývalé zaměstnání:</strong> Vyberte jedno z nabízených bývalých zaměstnání, které určuje výchozí vlastnosti vašeho charakteru.</li>
                    <li><strong>Pohlaví:</strong> Vyberte pohlaví postavy (Muž / Žena).</li>
                    <li><strong>Vzhled (Avatar):</strong> Na závěr vyberte grafický vzhled (avatar) postavy z pěti dostupných možností.</li>
                </ul>
                <img src="/images/index/02.png" class="infoimg" alt="02">
            </section>

            <section id="tym">
                <h2>4. Vybrání týmu</h2>
                <p>V této části si vyberte váš tým, který budete manažerovat.</p>
                <ul>
                    <li>Týmy přepínáte šipkami vlevo (zpět) a vpravo (dopředu)</li>
                    <li>Dole máte další informace o vybraném týmu</li>
                    <li>Po výběru týmu klikněte na tlačítko <strong>Spustit aplikaci</strong> a hra se spustí</li>
                </ul>
                <img src="/images/index/03.png" class="infoimg" alt="03">
            </section>

            <section id="herni-menu">
                <h2>5. Herní menu</h2>
                <p>V tomto menu provádíte veškeré změny ohledně vašeho týmu.</p>
              
                <h3 id="navigace">5.1 Horní navigace</h3>
                <p>Horní navigace vás vrátí do úvodního menu, uloží vám hru, nebo vám otevře nastavení.</p>
                <img src="/images/index/04.png" class="infoimg" alt="04">
                <h3>5.2 Dolní navigace</h3>
                <p>V dolní navigaci se přepínáte na další stránky:</p>
                
                <ul>
                    <li>Stránka pro vylepšení</li>
                    <li>Kalendář</li>
                    <li>Jezdci</li>
                    <li>Vaši jezdci</li>
                    <li>Statistiky</li>
                    <li>Žebříček</li>
                </ul>
                <div class="note">
                    <strong>Tip:</strong> Tlačítko "další den" slouží pro přepnutí na další den. Pokud se nacházíte na datumu závodu, tlačítko vás přepne do kvalifikace.
                </div>
                <img src="/images/index/05.png" class="infoimg" alt="05">
                <h3>5.3 Úvodní menu</h3>
                <p>V tomto menu vidíte základní informace o vašich jezdcích, vašem týmu, vašem manažerovi a další trati.</p>
                <img src="/images/index/06.png" class="infoimg" alt="06">
                <h3 id="vylepseni">5.4 Stránka vylepšení</h3>
                <p>Na této stránce si můžete vylepšit svůj vůz. Máte možnost jednoho vylepšení mezi závody. Máte na výběr ze 6 různých vylepšení. Každé toto vylepšení je dobré na jiný typ okruhu.</p>
                <img src="/images/index/07.png" class="infoimg" alt="07">
                <h4>5.4.1 Okno pro vylepšení</h4>
                <p>V tomto okně můžete vybrat, jak velké vylepšení chcete. Máte 3 možnosti:</p>
                <ul>
                    <li><strong>Malý risk</strong></li>
                    <li><strong>Střední risk</strong></li>
                    <li><strong>Vysoký risk</strong></li>
                </ul>
                <p>Šance úspěchu udává, na kolik procent vám vylepšení vyjde. Pokud vám nevyjde, odečte se vám celková cena, ale vylepšení nedostanete. Při větším risku se i více posunete ve vylepšení.</p>
                <img src="/images/index/08.png" class="infoimg" alt="08">
                <h3 id="kalendar">5.5 Stránka kalendář</h3>
                <p>Na této stránce vidíte, jaké vás čekají závody v kalendáři. Pokud odjede závod, zjistíte zde i kdo skončil na pódiu.</p>
                <img src="/images/index/09.png" class="infoimg" alt="09">
                <h3 id="jezdci">5.6 Stránka jezdci</h3>
                <p>Na této stránce si můžete prohlédnout ostatní jezdce a následně je podepsat. Jezdce také můžete seřadit podle několika kategorií, nebo si jezdce vyhledat.</p>
                <img src="/images/index/10.png" class="infoimg" alt="10">
                <h4>5.6.1 Podepsání jezdce</h4>
                <p>Pokud jste si vybrali jezdce, sjeďte dolů a klikněte na tlačítko <strong>jednat s jezdcem</strong>. Po kliknutí na toto tlačítko se vám otevře okno, kde vyberete podmínky smlouvy:</p>
                <ul>
                    <li>Délka smlouvy</li>
                    <li>Plat</li>
                    <li>Cena za výkup (pokud je jezdec v jiném týmu)</li>
                </ul>
                <div class="note">
                    <strong>Poznámka:</strong> Pokud jezdec nechce do vašeho týmu, objeví se vám text o této informaci.
                </div>
                <img src="/images/index/11.png" class="infoimg" alt="11">
                <h4>5.6.2 Vyměnění podepsaného jezdce</h4>
                <p>Po kliknutí na tlačítko potvrdit se vám otevře okno s vašimi jezdci. Vyberte si, jakého jezdce chcete nahradit a klikněte na tlačítko. Pokud jste si to rozmysleli, klikněte na tlačítko zpět.</p>
                <img src="/images/index/12.png" class="infoimg" alt="12">
                <h3>5.7 Stránka vaši jezdci</h3>
                <p>Na této stránce můžete vyměnit pozice svých jezdců. Pro vyměnění pozic jezdců prosím přetáhněte kartičku jednoho jezdce na toho druhého a následně klikněte na tlačítko <strong>uložit změny</strong>.</p>
                <div class="important">
                    <strong>Upozornění:</strong> Testovací jezdec nepojede v dalším závodě.
                </div>
                <img src="/images/index/13.png" class="infoimg" alt="13">
                <h3 id="statistiky">5.8 Stránka statistiky</h3>
                <p>Na této stránce můžete vidět historické statistiky:</p>
                <ul>
                    <li>Kolik šampionátů</li>
                    <li>Kolik vítězství</li>
                    <li>Kolik pódií má každý tým nebo jezdec</li>
                </ul>
                <p>Na levé straně se nachází týmy, na pravé jezdci. Statistiky přepínáte pomocí tlačítek pod nadpisem.</p>
                <img src="/images/index/14.png" class="infoimg" alt="14">
                <h3 id="zebricek">5.9 Žebříček</h3>
                <p>Na této stránce se můžete podívat na aktuální žebříček jezdců. Tlačítky přepínáte mezi pořadím jezdců a týmů.</p>
                <img src="/images/index/15.png" class="infoimg" alt="15">
            </section>

            <section id="kvalifikace">
                <h2>6. Kvalifikace</h2>
                <p>V kvalifikaci se rozhodne, jaké pořadí budete mít na začátku závodu. Čím lepší umístění, tím lépe se vám může dařit i v závodu.</p>
                
                <h3>Ovládání:</h3>
                <ul>
                    <li><strong>Tlačítko "vyjet":</strong> Vyjedete a objevíte se mezi jezdci na trati</li>
                    <li>Pokud jste už vyjetí na trati, jezdec zajede zpátky (tato akce je nevratná)</li>
                    <li>Časomíru ovládáte tlačítkem se znakem vypnout a pokračovat</li>
                    <li>Můžete si měnit rychlosti</li>
                </ul>

                <h3>Displej:</h3>
                <ul>
                    <li><strong>Levý horní roh:</strong> Aktuální tabulka časů</li>
                    <li><strong>Pravý horní roh:</strong> Tabulka jezdců na trati</li>
                    <li><strong>Dole vlevo:</strong> Vaši jezdci, které ovládáte</li>
                    <li><strong>Uprostřed dole:</strong> Časomíra (když se dostane na konec, kvalifikace skončí)</li>
                </ul>
                <img src="/images/index/16.png" class="infoimg" alt="16">
            </section>

            <section id="zavod">
                <h2>7. Závod</h2>
                <p>Závod slouží jako hlavní simulační část hry. Vaším cílem je nedostat poškození pneumatik přes 100 % a zároveň využít co nejlepší strategii a skončit co nejlépe v cíli.</p>

                <h3>7.1 Okno s výběrem pneumatik</h3>
                <p>Po přepnutí na závod vyskočí okno, na kterém vybíráte pneumatiky. Vybíráte z 5 pneumatik:</p>
                <ul>
                    <li><strong>SOFT:</strong> Nejměkčí, nejrychlejší, ale vydrží nejkratší dobu</li>
                    <li><strong>MEDIUM:</strong> Střední tvrdost a výkon</li>
                    <li><strong>HARD:</strong> Nejtvrdší, pomalejší, ale vydrží nejdéle</li>
                    <li><strong>INTERMEDIATE:</strong> Do mokrého počasí (zatím není funkční)</li>
                    <li><strong>WET:</strong> Do mokrého počasí (zatím není funkční)</li>
                </ul>
                <p>Toto okno se vám objeví i poté, co kliknete tlačítko <strong>Box</strong>. Zde můžete znovu nasadit pneumatiky, ale ztratíte tím čas.</p>
                <img src="/images/index/17.png" class="infoimg" alt="17">
                <h3>7.2 Hlavní menu závodu</h3>
                
                <h4>Pravá horní strana - Aktuální pořadí:</h4>
                <p>V tabulce vidíte:</p>
                <ul>
                    <li>Pozici jezdce</li>
                    <li>Tým a jméno s číslem</li>
                    <li>Čas nebo ztrátu na jezdce před ním</li>
                    <li>Typ pneumatiky a její opotřebení</li>
                    <li>Startovní pozici</li>
                </ul>

                <h4>Levá horní strana - Informace o závodě:</h4>
                <p>Můžete si v ní přečíst:</p>
                <ul>
                    <li>Kteří jezdci předjížděli a koho</li>
                    <li>Kdo byl v boxech</li>
                    <li>Kteří jezdci odstoupili ze závodu</li>
                </ul>
                <p>Můžete přepínat kola tlačítky s plusem a mínusem, nebo si přímo vybrat kolo závodu.</p>

                <h4>Levá dolní strana - Vaši jezdci:</h4>
                <p>Po kliknutí na tlačítko <strong>Box</strong> je pošlete do boxů a vyberete jim pneumatiky.</p>

                <h4>Uprostřed dole - Časomíra:</h4>
                <p>S koly závodu a tlačítkem spustit/vypnout si můžete závod ovládat.</p>

                <h4>Dole vpravo - Informace o okruhu</h4>
                <img src="/images/index/18.png" class="infoimg" alt="18">
            </section>
        </main>
      </div>
    </div>
  <div class="menu-content">
    <div class="header">
      <h1>MOTORSPORT</h1>
      <h2>MANAGER</h2>
    </div>
    
    <div class="menu-options">
      <button @click="loaddata" class="menu-button primary">
        Načíst Hru
      </button>
      <button @click="newgame" class="menu-button primary">
        Nová hra
      </button>
      <button @click="toggle(); sound.play()" class="menu-button primary">
        Nastavení
      </button>
      <button @click="author" class="menu-button primary">
        Autorovi poznámky
      </button>
    </div>
    
  </div>

  
</template>

<script setup>

const sound = useClickSound(); 
const switchLayout = inject('switchLayout')
const { settingsval, toggle } = useSettingsValue();
const authorNotes = ref(false);
onMounted(() => {
  switchLayout('default')
})

const newgame = () => {
  sound.play()
  
  navigateTo('charcreate')
}
// Otevře stránku s autorovými poznámkami
const author = () => {
  sound.play()
  authorNotes.value = true;
}

// Funkce pro načtení dat do databáze z vybraného souboru uživatele
async function loaddata() {
  sound.play()
  try {
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      const text = await file.text();
      const data = JSON.parse(text);
      
      await $fetch('/api/port/import', {
        method: 'POST',
        body: data
      });
      
      alert('Data úspěšně načtena');
      navigateTo('menu/menu');
    };
    
    input.click();
  } catch (error) {
    console.error('Chyba při načítání:', error);
    alert('Nepodařilo se načíst data');
  }
}

/* 
Formula 1 = Velocity Series
Formula 2 = Circuit Pro Series
Formula 3 = Ignition Series
GT 1 = GT Masters
GT 2 = GT Elite
*/

</script>
