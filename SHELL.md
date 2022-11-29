# Comandos en el shell
$ **help**
``` bash
Algunos de los comandos disponibles son:

hint - Te da una pista de cómo empezar
ls - Lista el contenido del directorio
share - Comparte Codember en Twitter
version - Muestra la versión actual de Codember
rank - Muestra la lista de los mejores participantes
score - Muestra tu puntuación en los retos
cat <archivo> - Muestra contenido del archivo
cd <carpeta> - Entra en una carpeta
clear - Limpia la consola
```


$ **hint**
``` bash
¡Gracias por usar la Guía de Pistas de Codember™️!

Busca entre los archivos de la carpeta "src" y encuentra el archivo que contiene el primer reto...
```


$ **ls**
``` bash
FAQ.md
CHANGELOG.md
README.md
src
public
```


$ **cat README.md**
``` bash
Codember es un juego y reto de programación que se realiza en el mes de noviembre para la comunidad de midudev.

¿Cómo funciona?
Cada semana se publica un reto que se debe resolver usando ingenio y programación.

Cada reto tiene una explicación del problema, pistas e instrucciones de cómo solucionarlo.

¿Cómo participar?
Para participar, inicia sesión en codember.dev con tu cuenta de GitHub y usa la terminal para emprender el reto. Usa el comando help si no sabes por donde empezar.

¿Cómo se evalúa?
Consigues una puntuación dependiendo de cuánto tiempo tardas en solucionar el reto desde que se publicó.

¿Cómo se gana?
Todos los participantes que hayan terminado todos los retos antes del directo que haremos el 1 de diciembre, se llevarán un premio.
```


$ **cat CHANGELOG.md**
``` bash
v. 0.1.0
Primera versión. Se puede utilizar la terminal y el primer reto está en src/challenge01.md

v. 0.2.0
Se añaden los comandos: curl, countdown y cowsay.

v. 0.3.0
Un montón de nuevos secretos. Quieres jugar al Tetris? ¡Prueba! ¿Y qué hay del mítico truco de Google que rota la pantalla...?

v. 0.4.0
Nuevo reto y un secreto que es un homenaje a los jugadores de Contra, de Konami. También hay un nuevo comando mail.

v. 0.5.0
¡Otro reto más! Ayuda a tu amigo a recuperar su contraseña de su monedero digital.
```


$ **cat FAQ.md**
``` bash
¿Por qué no es de código abierto?

Actualmente el código no está disponible de forma abierta ya que daría demasiadas pistas sobre el juego. Quizás más adelante lo libere.

¿Qué tecnologías está usando el juego?

Usa Astro como framework. React para los componentes. Redis como base de datos. Está desplegado en Netlify.

¿Cómo puedo ayudar?

Compartiendo la página web en redes: Twitter, Instagram, Reddit, LinkedIn, Facebook... ¡Cualquier ayuda es bienvenida!

¿Cómo te comunico si encuentro un error?

Puedes acceder al Discord de la comunidad en https://discord.gg/midudev e informar del problema en el canal #codember

¿Cómo puedo saber si mi solución es correcta?

Te puedo asegurar que cuando envíes una solución correcta lo vas a notar

¿Cuál es el premio que consigo si termino todos los retos?

Los premios los desvelaremos más adelante...

¿Cuándo se publica el siguiente reto?

Usa el comando 'countdown' para ver el tiempo que falta. Cada martes a las 20:00 (hora española) lo anunciamos en mi canal de Twitch (@midudev)

¿Para qué sirve el ranking si todo el mundo va a tener premio?

Igual algo hacemos. Todavía tengo que pensarlo... :P
```


$ **countdown**
``` bash
¡El nuevo reto ya está disponible!
Entra a https://twitch.tv/midudev para no perderte ninguna pista.
```


$ **cowsay**
``` bash
Look! The cow has an idea!
______________________________
( execute this -> ping midu.dev )
------------------------------
   o   ^__^
    o  (oO)_______
       (__)       )//~
        U  ||----w |
           ||     ||
```

$ **ping midu.dev**
### Reto ¡Ping pong!
``` bash

PING midu.dev (76.76.21.123): 56 data bytes

64 bytes from 76.76.21.123: icmp_seq=0 ttl=122 time=52.618 ms
64 bytes from 76.76.21.123: icmp_seq=1 ttl=122 time=118.451 ms
64 bytes from 76.76.21.123: icmp_seq=2 ttl=122 time=154.880 ms
...

OMG!!!! YOU MADE IT!!!!! 😱😱😱
```


$ **share**

$ **version**
``` bash
Codember v0.5.0 - 19/11/2022
Ahora con juegos. Intenta jugar tetris.
```

$ **play tetris**
#### secreto ¡Gamer! 

$ **rank**
``` bash
Ranking de participantes

#	Nombre de usuario	Puntos
1	...                     ...
...     ...                     ...
101	...                     ...
```

$ **score**
``` bash
Tu puntuación total es de ... puntos.

Estás en el puesto ... de la lista de participantes.

Has resuelto .../4 retos.

Has descubierto .../7 secretos...
```

$ **clear**

$ **cd src**
``` bash
changed path to src
```

$ **ls** ( en el directorio *src*)
``` bash
challenge01.md
challenge02.md
challenge03.md
challenge04.md
encrypted.txt
users.txt
corrupted.jpg
```


$ **cat challenge01.md**
``` bash
Reto 1: ¡Arregla Twitter!

Problema

Twitter ha sido comprado y quieren eliminar los bots. Te han pedido ayuda para detectar el número de usuarios en su base de datos que tienen datos corruptos.

La base de datos es muy antigua y está en un formato extraño. Los perfiles requieren tener los siguientes datos:

usr: nombre de usuario
eme: email
psw: contraseña
age: edad
loc: ubicación
fll: número de seguidores
Todo está en un fichero donde los datos de usuario son una secuencia de pares `key:value`, que pueden estar en la misma línea o separado por líneas, y cada usuario está separado por un salto de línea. ¡Ojo porque puede estar todo desordenado!

Ejemplo de input:

usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com

El primer usuario SÍ es válido. Tiene todos los campos.
El segundo usuario SÍ es válido. Tiene todos los campos.
El tercer usuario NO es válido. Le falta el campo `age`.
El cuarto usuario SÍ es válido. Tiene todos los campos..

Ahora que ya sabes esto, usa este input para detectar los usuarios incorrectos: https://codember.dev/users.txt

Pistas
Los datos pueden estar en cualquier orden.
Los datos pueden estar en la misma línea o separados por líneas.
Los usuarios se separan por un salto de línea en blanco.
Los usuarios pueden estar repetidos, pero no importa, siguen siendo válidos.
Pueden venir datos que no son necesarios para el usuario pero eso no lo hacen inválidos.
Cómo enviar la solución
Usa el comando "submit" para enviar tu solución con el número de usuarios correctos + el nombre del último usuario válido. Por ejemplo:

$ submit 482@midudev
```

$ **submit 156@giroz**

$ **cat challenge02.md**
``` bash
Reto 2: ¡Atrapa a esos ciber criminales!

Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101

Ahora que ya sabes esto, https://codember.dev/encrypted.txt

Pistas
Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...
Cómo enviar la solución
Usa el comando "submit" para enviar tu solución con la frase descifrada, en minúsculas y respetando los espacios en blanco. Por ejemplo:

$ submit this is fine
```

$ **submit thanks for playing codember please share**

$ **cat challenge03.md**
```bash
Reto 3: La zebra de colores

Problema

TMChein ya se está preparando para las fiestas y quiere empezar a decorar la casa con las luces de navidad.

Quiere comprar una pero sus favoritas son las que tienen dos colores que se van alternando. Como una zebra de dos colores.

Ha hecho que las luces sean Arrays y cada posición un color. Y quiere saber qué luces tienen las zebras más largas y cuál es el último color de esa sucesión de colores. Por ejemplo:

['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green

Fíjate que sólo quiere saber la longitud de cuando dos colores se van alternando. Una vez que se rompe la alternancia de los dos colores, deja de contar.

Ahora que ya sabes esto, https://codember.dev/colors.txt

Recuerda que una zebra de colores es cuando dos colores se alternan una y otra vez. Si se repite un color en la posición siguiente o es un tercer color, entonces se deja de contar.
Lo que queremos calcular es la tira de colores más larga en forma de zebra y el último color de esa tira de colores.
Cómo enviar la solución
Usa el comando "submit" para enviar tu solución. Por ejemplo:

$ submit 62@red
```
$ **submit 30@red**

$ **cat challenge04.md**
``` bash
Challenge 4: Encuentra la contraseña de tu amigo

Problema

Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!

Nos ha pedido ayuda. Y nos ha dado algunas pistas:

- Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido como mínimo dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

Nos ha puesto algunas ejemplos:
55678 es correcto lo cumple todo
12555 es correcto, lo cumple todo
55555 es correcto, lo cumple todo
12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente

Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?

Cómo enviar la solución
Envía la solución con el comando submit, y el número de passwords que cumplen el criterio junto con el password que está en el índice 55 de la lista de passwords válidos, separado por un guión.

Por ejemplo, para 87 resultados y el password 35522 en la posición 55 sería:

$ submit 87-35522
``` 
$ **submit 165-23555**

