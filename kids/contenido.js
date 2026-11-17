// =====================================================================
//  ALTAR KIDS · CONTENIDO
//  Acá se cargan las historias de cada semana. Para sumar una semana
//  nueva, copiá un bloque { ... } de SEMANAS, cambiá los textos y las
//  imágenes, y subí las imágenes nuevas a la carpeta img/.
// =====================================================================

window.ALTAR_KIDS = {

  // Lunes en que arrancó la semana 1. Cada lunes se habilita la semana siguiente.
  // Formato: "AAAA-MM-DD"
  INICIO: "2026-11-09",

  // Total de figuritas del álbum (una por semana durante un año).
  TOTAL_FIGURITAS: 52,

  // Altares necesarios para que Chispita crezca: [Fueguito, Fogata]
  CRECER: [4, 10],

  SEMANAS: [
    {
      n: 1,
      id: "jacob",
      titulo: "Jacob y la escalera al cielo",
      ref: "Génesis 28",
      frase: "Dios me cuida",
      portada: "img/jacob.webp",
      minutos: 8,

      oramos: {
        nino: "Cerramos los ojitos, juntamos las manos y decimos: «Gracias, Dios, porque estás acá con nosotros».",
        padres: "Tómense de las manos. Digan la oración frase por frase y que los chicos la repitan."
      },

      cantamos: {
        titulo: "Dios me cuida",
        letra: [
          "Dios me cuida de noche,",
          "Dios me cuida de día,",
          "cuando duermo y cuando juego,",
          "¡Dios está en mi vida!",
          "",
          "Sube, sube la escalera,",
          "bajan ángeles del cielo.",
          "Dios me cuida, Dios me cuida,",
          "¡yo no tengo miedo!"
        ],
        padres: "Cántenla con la melodía que les salga, con palmas. En «sube, sube» suban las manos como una escalera. También pueden elegir una canción de la iglesia que les guste."
      },

      historia: [
        {
          img: "img/jacob-1-camina.webp",
          nino: "Jacob tuvo que irse lejos de su casa. Caminó y caminó, hasta que se hizo de noche.",
          padres: "Pregúntenles: «¿Cómo se habrá sentido Jacob, solito y lejos de su familia?»"
        },
        {
          img: "img/jacob-2-piedra.webp",
          nino: "Estaba muy cansado. Puso una piedra de almohada y se quedó dormido bajo las estrellas.",
          padres: "Busquen las ovejitas y la piedra. Pregunten: «¿Vos podrías dormir con una piedra de almohada?»"
        },
        {
          img: "img/jacob-3-sueno.webp",
          nino: "Jacob soñó con una escalera que llegaba hasta el cielo, y los ángeles subían y bajaban.",
          padres: "Señalen la escalera y los ángeles. Pregúntenles: «¿Quién cuida a Jacob mientras duerme?»"
        },
        {
          img: "img/jacob-4-piedra-dedicada.webp",
          nino: "Dios le dijo: «Yo estoy con vos y te voy a cuidar». Jacob despertó, paró la piedra y dijo: «¡Dios está acá!». Esa piedra fue su altar.",
          padres: "Cuéntenles que un altar es un lugar para encontrarnos con Dios, como el que están haciendo ahora en familia."
        }
      ],

      versiculo: {
        texto: "He aquí, yo estoy contigo, y te guardaré por dondequiera que fueres.",
        cita: "Génesis 28:15",
        corto: "¡Dios me cuida!",
        padres: "Díganlo tres veces: bajito, normal y bien fuerte. Cuando digan «¡Dios me cuida!», dense un abrazo."
      },

      hablamos: {
        nino: "¿Te acordás? Charlemos un ratito.",
        preguntas: [
          "¿Dónde durmió Jacob?",
          "¿Qué vio Jacob en su sueño?",
          "¿Qué le prometió Dios?",
          "¿Cuándo tenés miedo vos? ¡Dios también te cuida ahí!"
        ],
        padres: "No hay respuestas incorrectas. Si los chicos cuentan un miedo, escúchenlo y recuérdenles que Dios los cuida."
      },

      gracias: {
        nino: "Gracias, Dios, porque me cuidás de día y de noche, en casa y en todo lugar. Amén.",
        padres: "Antes de terminar, cada uno dice una cosa por la que está agradecido esta semana."
      }
    },

    {
      n: 2,
      id: "mar",
      titulo: "Dios abrió el mar",
      ref: "Éxodo 14",
      frase: "¡Dios pelea por mí!",
      portada: "img/mar.webp",
      minutos: 8,

      oramos: {
        nino: "Cerramos los ojitos, juntamos las manos y decimos: «Dios, sos más fuerte que cualquier problema. Gracias por estar con nosotros».",
        padres: "Tómense de las manos. Digan la oración frase por frase y que los chicos la repitan."
      },

      cantamos: {
        titulo: "El mar se abrió",
        letra: [
          "El mar se abrió, el mar se abrió,",
          "¡Dios hizo un camino y su pueblo pasó!",
          "",
          "Con miedo no, con miedo no,",
          "¡Dios pelea por mí y tranquilo estoy yo!"
        ],
        padres: "En «el mar se abrió» abran los brazos bien grande, como las olas. En «tranquilo estoy yo» crucen los brazos sobre el pecho."
      },

      historia: [
        {
          img: "img/mar-1-miedo.webp",
          nino: "El pueblo de Dios llegó hasta el mar. ¡Y atrás venía el ejército del faraón! Todos tenían mucho miedo.",
          padres: "Señalen el ejército a lo lejos. Pregunten: «¿Qué harías vos si no hay por dónde escapar?»"
        },
        {
          img: "img/mar-2-vara.webp",
          nino: "Moisés les dijo: «No tengan miedo, Dios va a pelear por ustedes». Levantó su vara sobre el mar.",
          padres: "Levanten el brazo como Moisés levanta la vara."
        },
        {
          img: "img/mar-3-camino.webp",
          nino: "Dios abrió el mar, y la familia pasó caminando por en medio, tomados de la mano.",
          padres: "Señalen el camino entre las olas. Pregúntenles: «¿Quién abrió el mar?» y digan juntos: «¡Dios pelea por mí!»"
        },
        {
          img: "img/mar-4-a-salvo.webp",
          nino: "¡Llegaron al otro lado sanos y salvos! Todos saltaron, cantaron y le dieron gracias a Dios.",
          padres: "¡Festejen como ellos! Salten y aplaudan juntos."
        }
      ],

      versiculo: {
        texto: "Jehová peleará por vosotros, y vosotros estaréis tranquilos.",
        cita: "Éxodo 14:14",
        corto: "¡Dios pelea por mí!",
        padres: "Díganlo tres veces: bajito, normal y bien fuerte. En «¡Dios pelea por mí!», levanten el puño como campeones."
      },

      hablamos: {
        nino: "¿Te acordás? Charlemos un ratito.",
        preguntas: [
          "¿Por qué tenía miedo el pueblo?",
          "¿Qué hizo Dios con el mar?",
          "¿Cómo cruzó la familia?",
          "¿Qué cosa te da miedo a vos? Digamos juntos: «¡Dios pelea por mí!»"
        ],
        padres: "Si los chicos cuentan un miedo, oren juntos por eso al final."
      },

      gracias: {
        nino: "Gracias, Dios, porque abrís caminos donde no hay, y porque peleás por mí. Amén.",
        padres: "Antes de terminar, cada uno dice una cosa por la que está agradecido esta semana."
      }
    }
  ]
};
