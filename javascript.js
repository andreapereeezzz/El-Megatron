
// declaro un par de arrays para guardar las frases en cada color.

var reto=["Lamele el codo a la persona más graciosa", "Manda un mensaje a alguien que empiece por la misma letra que tu nombre, que contenga las palabras: supositorio, amor y gato", "Llama a un contacto aleatorio, sin escuchar y que los demás te digan que contestar", "bebes tantos tragos como personas que cumplan a partir del día 20 de cada mes", "El más alto tiene que hacer 10 flexiones si no las hace en 30 segundos (2 tragos)", "los que no han fumado nunca beben 1 trago", "Darle like a una foto antigua de alguien (de fuera del grupo)", "Las personas que calzan más de un 43 reparten 8 tragos", "YO NUNCA: he ayudado a alguien que me gustaba a liarse con alguien", "Bebe 5 tragos la persona más falsa", "Los que no tienen pueblo beben 2 tragos", "Beben 2 tragos los nacidos de septiembre a diciembre", "Invita a un chupito al de tu izquierda", "Déjate maquillar por el de tu izquierda con los ojos vendados, si te da pereza bebe 5 tragos", "Da una vuelta alrededor de la casa/bar/discoteca", "Los que tengan la letra R en el nombre beben 3 tragos",  "Beben 2 tragos las personas cuyos nombres tengan la la letra L,S,V o J", "Habla con acento mejicano hasta que vuelva a salir este color", "Ponte la música a todo volumen e intenta adivinar la frase que te dicen si lo adivinas pones penitencia, sino subes a instagram una foto poniendo: busco persona que pase foto de sus pies", "La persona que creáis que sobreviviria a una guerra espacial bebe 2 sorbos", "Beben las personas que su nombre acaba en O", "Beben los que miden menos de 1,68", "Pon una palabra con tú lengua (si no eres tan atrevido, también vale con la mano) en la tripa del de tu derecha, sino la adivina bebéis los dos", "Intenta comer algo en vez de con tus manos , con las del de tu izquierda", "Todos miráis hacia abajo y a la vez, miráis a alguna persona si las miradas coinciden bebéis ambos", "Vuelve a tirar", "Si la hora acaba en minuto par beben las chicas y si acaba en impar los chicos, si acaban en 5 o 0 beben todos", "Ronda de chupitos o beben un trago todos", "Votad a un monarca (no vale votarse a uno mismo) durante 5 rondas decidirá si los tragos que tocan beber los beberá al que lo ha tocado u otra persona", "Yo nunca nunca: he robado en una tienda", "Di la fecha de los cumpleaños de los de tus lados si no los aciertas bebéis los 3, dos tragos", "La persona que peor se explique deberá beber 2 chupitos", "Las personas que lleven zapatillas blancas deben hacer un concurso de sentadillas, quien haga menos en 30 segundos deberá pasar toda la ronda sin hablar", "Tú decides quienes deben darse un pico (puedes incluirte)", "Ronda de chupitos o beben todos 3 tragos", "Beben todos los que tengan algun ex cuyo nombre empiecen por una letra consonante", "Si te ha gustado alguien de aquí, bebe", "Juego de las películas: haced dos grupos y uno de cada grupo debe representar con mímica una película conocida (que le haya dicho el otro equipo) el equipo que tarde más se lleva penitencia (que elija el equipo ganador)", "Tienes que moverte en cámara lenta hasta tu próximo turno", "Tomate dos chupitos, gira tres veces sobre ti e intenta aguantar sobre un pie 10 segundos", "Quien tenga descargado más de tres juegos en el móvil bebe", "Ponte de pie y recita un poema conocido si no te sabes ninguno bebes 2 si te sabes alguno repartes 6", "Ronda: todos debéis decir una canción de extremoduro, al que no se le ocurra o repita chupito", "Cambio de sentido", "El de tu derecha escoge con quien tienes que pasar cinco minutos en una habitación solos", "Reparte 4 tragos", "Debes hablar rapeando hasta que salga el color otra vez", "Te toca hacer equipos, tú escoges tu grupo y se deberá hacer mímica con la temática (Políticos ) el equipo que tarde más en adivinar bebe", "Cada vez que se diga la palabra beber, tienes que saltar dos veces hasta que vuelva a salir el color", "Debes hablar con acento Alemán hasta que salga otra vez el color (3 tragos cada vez que se te olvide)", "Di 3 canciones de Bad Bunny ( bebe o reparte 2 tragos)", "Bebé tantos tragos como prendas negras lleves”, “Beben 2 tragos los que hayan estado en una relación más larga de 3 meses", "Beben 3 tragos, las 3 personas más pequeñas", "Di el signo del zodiaco de todos los jugadores (reparte por el número que aciertes y bebe los que falles)", "Que el de tu derecha te haga una pregunta en secreto y los demas solo escucharan la respuesta", "FIRST DATES: Al azar contesta una historia", "Quién es más probable que acabe liándose con uno presente, a la de tres señalad a una persona del grupo, si acertáis todos bebe 4 tragos esa persona, sino bebéis 3 tragos el resto", "Te acabas el vaso", "Bebe 3 tragos porque si", "Debes contar dos verdades y una mentira, la persona más mayor tiene que adivinar la mentira (2 tragos si pierde, reparte 5 tragos si lo adivina)", "Alguien elige una canción, si sabes seguir la canción si equivocarte (repartes 4 sino los bebes )", "Todos dicen un motivo por el que te pueden despedir, el 1 que se quede sin ideas bebé 2 tragos", "Di un trabalenguas si te equivocas el de enfrente bebe 2 tragos", "Elige 3 personas de la sala con las que harías una orgia", "El de tu derecha te da un azote en el culo", "Todos dicen un nombre de chico con la letra M quien se quede sin ideas bebe 3 tragos", "Pasillito de collejas", "El más influencer bebé 5 tragos", "Besa a alguien de tú mismo sexo", "Cuenta un sueño erótico que hayas tenido", "Beben 1 trago todos los que cumplan en día impar", "Beben 3 tragos quienes su nombre empieza por vocal", "Beben 2 tragos las personas con más y menos seguidores en Instagram", "Dices quien crees que serían la peor pareja del grupo", "Beben 2 tragos solo los que tengan iPhone", "Los que cumplen en mes par beben 1 trago", "Mandale una publicación a una persona random que no sigas en instagram", "Todo aquel que practique un deporte bebe 2" ];


function lanzarColor(){

// necesito un par de números aleatorios que simulen el lanzamiento de 1 dado.

var colorAleatorio1=Math.round(Math.random()*(6-1)+1);

// genero los nombres de la imagen

var nombreImagen1="color"+colorAleatorio1+".png";

// genero las rutas completas para luego cambiar las fotos

var rutaImg1="imagenes/"+nombreImagen1;

// suatituimos las imagen en función de los que salió

document.querySelector("img").src=rutaImg1;

// modificamos el parrafo para sacar un reto

var mensaje=document.querySelector(".reto");

var numeroFrases=reto.length;
// numero de frases le tengo que quitar uno porque empieza a comtar desde 0
var posicionFrase=Math.round(Math.random()*(numeroFrases-1-0)+0);
var fraseSelecionada=reto[posicionFrase];

// le digo que saque la frase selecionada 
document.querySelector(".reto").textContent=fraseSelecionada;


}
