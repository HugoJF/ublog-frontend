import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-demo',
  templateUrl: './post-demo.component.html'
})
export class PostDemoComponent implements OnInit {
  content = `# In somni referat solent opus *nuper* oraque

## Una ipse

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print(s)
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\`

$f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$

Lorem markdownum, voto quamvis, Graiorum unde fortes **viri** subito rogant.
Sentit est amo est inficit, ille, etiam pleno; iura. Cinyphius tangentia et
adsiduis cruentas docendam gaudet dolentibus cadunt, leve tineae: candida tamen
properatis rediit.

1. Viscera hominum subitam furtum exilio imminet relatus
2. Est pennis epulas inter Tyrrhenia ad
3. Delapsus auras lacertis
4. Matrem fugientem molles ceu umbrosa componit

## Similisque erat deterior nactus praerupta possum accipe

Medusa meum amnis et cepit excutiuntque simul ora incurvae in debebit. Lateri et
capillis, tela alter iuvere, [figuram](http://molior.net/) cum Titania praebere.
Pariterque faucibus tundit intrare in **quid**, Achilles nulli reponit fortis
Boreas sum quota, Creteque me et texerat invictos. Laborum utque amatis coluntur
se illic lacus partim fulget, **et** caeli ne visa nomenque quam.

Nostri **arcem ab maestus** petit. Evicere nec victa odisse, et uni nomine
invenies pellitis ut sibi Alexiroe, repleam.

## Suos Iris tardis captivis silva deprensa Bacchi

Induruit dominum bracchia dis caelum. Mortalia et tergum muneris adpositis non
te saxa.

- Fecere omnis
- Litus pomis iusta non soporiferam cruentat
- Sociorum queri domos victor caesorum quoque murmure

Exhortor Sparten qualis semianimem [ille](http://capillos-pavonibus.net/) alieni
corpore petentem auras. Iuvenes venti iter qui pererrato urbes Arcas sic sacrata
calidis *oblivia lingua dare*. Putes **fuerunt amplexus**; heu toto novo aequora
bibit plus tali divum acu generum. Sanguine ipsum, hunc mensas et **cum dum
damno** inceptos [monere](http://etbreve.net/secundisiuventam.html) vati. Arbor
postes fide vidit tua ad implevit lacerat leonum?

Virgo admissum imbres, fixerat sidera atris arcanis causam luctus, horrore
tenuisse posset Romuleos cervice. Deus simul [de canisve
arboreis](http://www.vultu.org/), carmine si alas ducere spernit exstinctum
dicimus magne; cvrrvs cuncta, et aede! Polumque docuisse fracta, umero, hic, o
fatemur ab adducto.`

  constructor() {
  }

  ngOnInit(): void {
  }

}
