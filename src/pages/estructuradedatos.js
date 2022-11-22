import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export const estructuradedatos = () => {
  return (
    <div>
      <h1><header align='center'>Estructura de datos</header></h1>
      <br/> Las estructuras de datos son formas de organizar información para manipular, buscar e insertar datos
        de manera eficiente.
        Una estructura contiene múltiples variables, que pueden ser de tipos diferentes. La estructura es
        importante para la creación de programas potentes, tales como base de datos u otras aplicaciones que
        requieran grandes cantidades de datos.<br/>
      <br/><h2><b><header align='center'>Clasificación de las estructuras de datos</header><br /></b></h2>
      <body className='P'>Primitivas 
      <br/>
      <li ><b>Enteros. </b>Números completos y sus negativos, de tipo <i>int.</i></li>
          <br />
        <b>Variantes de enteros:</b> tipo <i>short, long y unsigned.</i>
        
          <li><b>Reales. </b>Números decimales, tipos <i>float, double o long double</i></li>
          <li><b>Caracteres. </b> Letras, dígitos, símbolos y signos de puntuación, <i>tipo char</i></li>
          <li><b>Booleanos. </b> Solo puede tener dos valores: <i>True (verdadero) y False (falso).</i></li>
      <br/>No Primitivas
      <br/>
          <li><b>Cadenas. </b> Tipo de dato compuesto, un arreglo de caracteres (char).</li>
          <li><b>Cadenas. </b>Tipo de dato compuesto, un arreglo de caracteres (char).</li>
          <li><b>Registros. </b>Es una colección de campos lógicamente relacionados, que pueden 
          ser tratados como una unidad por algún programa.</li>
      <br /><h2><b><header align='center'>Diferencia entre estructura de datos primitivas y no primitivas</header><br /></b></h2>
      <br/><b>Datos Primitivos</b><br/>
      <li>La estructura de datos primitivas está predefinida en el lenguaje.</li>
      <li>Las estructuras de datos primitivas tendrán un cierto valor.</li>
      <li>El tamaño depende del tipo de estructura de datos.</li>
      <li>La estructura de datos primitiva comienza con minúsculas.</li>
      <li>Se puede utilizar para llamar a métodos para realizar operaciones.</li>
      <br/><b> No Primitivos</b><br/>
      <li>La estructura de datos no primitivas no está definida en el lenguaje y es creada por el programador.</li>
      <li>La estructura de datos no primitivas puede tener un valor NULL.</li>
      <li>El tamaño de la estructura de datos no primitivas no es fijo.</li>
      <li>El tipo de datos no primitiva comienza con mayúscula.</li>
      <li>No puede ser usado.</li>

      </body>
    </div>
    
  );
};

export const estaticas = () => {
  return (
    <div >
      <h1><header align='center'>Estructura de datos estática</header></h1>
      <br/>Son aquellas en las que el tamaño ocupado en memoria se define antes de que el programa se ejecute y no puede modificarse dicho tamaño durante la ejecución del programa.
      Su principal característica es que ocupan solo una casilla de memoria, por lo tanto una variable simple hace referencia a un único valor a la vez, dentro de este grupo de datos se encuentra:
      <li>Enteros</li>
      <li>Reales</li>
      <li>Caracteres</li>
      <li>Booleanos</li>
      <li>Enumerados</li>
      <li>Subrangos</li>
      <br/>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              ¿Qué es un arreglo?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Un vector o arreglo unidimensional es un tipo de dato que almacena una secuencia de datos del mismo
              tipo. Los elementos de un vector se almacenan en zonas antiguas de memoria y se puede acceder a ellos
              de manera directa mediante un índice o posición.
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplo:
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p><img src="https://darkbyteblog.files.wordpress.com/2011/03/arrayscheme.jpg" align="right"
                  width="240" height="170" />
                  <br /><li>Definir un vector de tipo entero con un tamaño de 10</li>
                  int numero [10]<br />
                  <br /><li>Definir un vector de tipo carácter con un tamaño de 5.</li>
                  char letras [10]<br />
                  <br /><li>Definir un vector de tipo flotante con un tamaño de 15.</li>
                  float reales [15]<br />
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Inicialización de un vector
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p>
                  Se puede realizar de la siguiente manera:
                  <br /><i>//Inicializar el array</i><br />
                  <br /><b>int</b> notas &#91; 10 &#93; = &#123; 1 &#44; 2 &#44; 3 &#44; 4 &#44; 5 &#44; 6 &#44; 7 &#44; 8 &#44; 9 &#125;<br />
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>



        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Clasificación de los arreglos
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Bidimensional
            </p>
          </AccordionItemPanel>
          <AccordionItemPanel>
            <p>
              Es una matriz de datos de tamaño m x n que contiene información almacenada del mismo tipo de datos (int, float, char, etc). Este tipo de arreglos necesita dos subíndices para ser declarado o para acceder a la
              información de un elemento en específico, a diferencia de una matriz unidimensional que solo necesita un
              subíndice. Un arreglo bidimensional es utilizado cuando queremos guardar mucha información sobre un
              tipo de dato en específico en distintas filas.
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Inicialización de un matriz
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p><br />Se puede realizar de la siguiente manera:<br />
                  <br />int numeros[2][3]=&#123; 1 &#44; 2 &#44; 3 &#44; 4 &#44; 5 &#44; 6 &#125;<br />
                  <br />O también se puede realizar de la siguiente forma:<br />
                  <br />int numeros[2][3]=&#123;&#123; 1 &#44; 2 &#44; 3&#125; &#123;&#44; 4 &#44; 5 &#44; 6 &#125;&#125;<br />
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><img src="http://1.bp.blogspot.com/-Ud7An_KXs7g/VY1t0cyninI/AAAAAAAADRo/n6X9abKJ2Ac/s1600/arregloBidimencional.PNG" align="right"
                  width="240" height="170" />
                  <br /><li>Definir una matriz de tipo entero con un tamaño de 2 fila y 3 columna.</li>
                  int numero [2][3]<br />
                  <br /><li>Definir una matriz de tipo carácter con un tamaño de 5 fila y 2 columna.</li>
                  char letras [5][2]<br />
                  <br /><li>Definir una matriz de tipo flotante con un tamaño de 1fila y 2 columna.</li>
                  float reales [1][2]<br />
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Tridimensional
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              El arreglo tridimensional o de tres dimensiones, está formado por un conjunto de elementos de un mismo tipo de datos
              que se almacenan bajo un mismo nombre y que, al igual que en los unidimensionales y bidimensionales, se diferencian
              por la posición que tiene cada elemento dentro del arreglo de datos, con la aclaración de que la disposición de los
              elementos es una combinación del arreglo unidimensional y bidimensional.
            </p>
          </AccordionItemPanel>
          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Crear matriz tridimensional
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p><br />Para crear una matriz tridimensional hay que añadir un eje más (eje Z) a la síntexis de la tabla o matriz:<br />
                  int [ ] [ ] [ ] cubo = new int [ 3 ] [3 ] [ 3 ] ;
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  La tabla podría representarse con el siguiente dibujo, donde podemos ver los índices que tendrían cada elemento de la misma:
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_592/https://codesitio.com/wp-content/uploads/2017/12/tablatridb.png" align="right"
                  width="240" height="170" />
                  <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_592/https://codesitio.com/wp-content/uploads/2017/12/tablatrid.png" align="right"
                    width="240" height="170" />

                  <br />Para asignar valores a este tipo de matriz, por ejemplo pondriamos:<br />
                  <br />cubo [ 0 ][ 0 ][ 0 ] = 10;<br />
                  <br />cubo [ 2 ][ 2 ][ 0 ] = 20;<br />
                  <br />cubo [ 1 ][ 2 ][ 2 ] = 5 ;<br />
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
            Multidimensional
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Es un arreglo donde los elementos se encuentran organizados en varias dimensiones. 
            Se utilizan cuando se necesita almacenar múltiples valores del mismo tipo, también permite agrupar 
            muchos datos usando un mismo identificador y la memoria utilizada por los arreglos se conoce como memoria estática.
            </p>
          </AccordionItemPanel>
          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Declarar y asignar el tamaño a una matriz multidimensional.
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p><img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_592/https://codesitio.com/wp-content/uploads/2017/12/matrizmultidib.png" align="right"
                    width="240" height="170" />
                <br/>Para crear una Matriz multidimensional se hace por ejemplo de la siguiente manera:<br/>
                <br/>int [ ] [ ] notas = new int [ 2 ] [ 3 ] ;<br/>
                <br/>Con esta sentencia hemos creado una matriz multidimensional de dos dimensiones. El primer corchete [ 2 ], 
                indica el número de matrices de una sola dimensión o unidimensionales que hay, por tanto su tipo de dato es int [ ] . 
                En este caso hay 2 matrices unidimensionales.<br/>
                <br/>El segundo corchete [ 3 ], indica el número de elementos que tiene cada una de las dos matrices unidimensionales 
                anteriores y su tipo de dato es int . Los índices de esta matriz creada quedarían de la siguiente manera:<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Asignar valores a los elementos de una matriz multidimensional.
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><br/>Para asignar valores a una matriz multidimensional se actúa de la misma manera que en las matrices unidimensionales,
                   salvo que ahora serán varios los índices que intervengan. Una vez que tenemos la matriz creada, por ejemplo la matriz 
                   «notas», actuaremos de la siguiente manera para acceder a los elementos:<br/>
                   <br/>notas [ 0 ] [ 0 ] = 10 ;<br/>
                   <br/>notas [ 1 ] [ 2 ] = 9 ;<br/>
                   <br/>La primera sentencia asigna el valor «10» al elemento de la matriz unidimensional (col0) con índice «0», que esta
                   referenciado por la matriz (fila-0).<br/>
                   La segunda sentencia hace lo propio asignando el valor «9» al elemento situado en la matriz unidimensional (col2), 
                   referenciado por la matriz (fila-1).
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>
      </Accordion>
        </div>
  );
}
      
export const dinamicas = () => {
  return (
    <div >
      <h1><header align='center'>Estructura de datos dinámica</header></h1>
      <br/>Son aquellas en la que el tamaño ocupado en memoria se define antes de que el 
      programa se ejecute y no pueda modifcarse dicho tamaño durante la ejecucion del programa entre las estructuras 
      de datos estaticas se encuentran en los array (vectores y matrices), registros, archivos y cadenas.
      <br/>Las estructuras dinamicas de datos se pueden dividir en dos grandes grupos:<br/>
      <br/>Lineales:<br/>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Pilas
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Es una estructura de datos lineal que solamente tiene una puerta de acceso por la que se insertan y
            eliminan los datos. Los datos se insertan uno detrás de otro.
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Operaciones básicas con pilas
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p>
                  <br/><img src="https://miro.medium.com/max/473/0*ddU99ugmu6qcH-8p.jpg"align="left" width="240" height="170" /><br/>
                  <br/>Método Push<br/>
                  El método Push() recibe como parámetro el dato que se desea insertar en la pila.<br/>
                  <br/>Método Pop<br/>
                  El método Pop() no recibe parámetros; simplemente elimina el dato ubicado en el top de la pila.
                  </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><br/><img src="https://parzibyte.me/blog/wp-content/uploads/2018/11/Pila-din%C3%A1mica-en-C_marcada.png"
                align="right" width="380" height="270"/><br/>
                <br/><br/>Veremos las operaciones básicas de una pila o stack en C; además de otras que hice para exponer aquí. Son:
                <br/>Tamaño: devolver el tamaño de la pila<br/>
                <br/>Apilar: también conocido como push: agregar un elemento<br/>
                <br/>Desapilar: o la operación pop: quitar el último elemento; es decir, el elemento superior<br/>
                <br/>Leer último: leer el elemento superior de la pila<br/>
                <br/>Vacía: indica si la pila está vacía<br/>
                <br/>Imprimir: recorrer la pila e imprimir sus valores<br/><br/><br/>
                

                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>



        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Colas
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Una cola es un grupo ordenado de elementos del mismo tipo, en la cual dichos <b>elementos se añaden por un
            extremo (Final) y se quitan por el otro extremo (Frente).</b> Esto significa que los elementos se sacan en el
            mismo orden en el que fueron insertados o introducidos en
            la cola, siendo por ello considerada como una estructura de datos <b>FIFO</b>(First In First Out), es decir,
            que el primer elemento en entrar es el primer elemento en salir.
            </p>
          </AccordionItemPanel>
        
          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Operaciones básicas con colas
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p>
                <br/>➢ <b>Inicializar Cola:<b/></b> nos permite dejar inicialmente vacía la cola una vez creada.<br/>
                <br/>➢ <b>Encolar:</b> permite añadir un elemento al final de la cola.<br/>
                <br/>➢ <b>Desencolar:</b> se usará para sacar un elemento de la cola.<br/>
                <br/>➢ <b>Cola vacía:</b> devolverá cierto si la cola está vacía antes de sacar un elemento de esta.<br/>
                <br/>➢ <b>Cola Llena: </b>sólo en aquellos casos en los que sea necesario determinar si la 
                cola se encuentra llena antes de añadir un nuevo elemento debido a la
                implementación utilizada (sólo en el caso de implementación con tablas),
                emplearemos esta operación de tipo lógico.<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><br/><img src="https://tutorias.co/wp-content/uploads/2015/08/InsertarDatoEnColaC-.jpg"
                align="left" width="580" height="530"/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>El problema planteado se trata en insertar un dato después de un valor existente en la cola. 
                Se debe crear dos estructuras de datos cola (Queue) de tal forma que la segunda contenga los datos de 
                la primera cola incluyendo el nuevo dato en la ubicación correcta y luego retornar esta segunda cola a la
                 primera cola original quedando la cola tal cual con el nuevo dato<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Listas Enlazadas
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Una lista está conformado por nodos, estos nodos contiene un puntero asignado y variables
            de cualquier tipo de datos. El puntero sirve para enlazar cada nodo con el resto de nodos que
            conforman la lista. El primer nodo de la lista se denomina cabeza de la lista y el último nodo
            cola de la lista. Este último nodo suele tener su puntero igualado a NULL para indicar que es
            el fin de la lista.
            </p>
          </AccordionItemPanel>
          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Operaciones Básicas.
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p>
                <br/>• Insertar elementos en una lista enlazada<br/>
                <br/>• Mostrar los elementos de una lista enlazada<br/>
                <br/>• Buscar un elemento en una lista enlazada<br/>
                <br/>• Eliminar un elemento en una lista enlazada<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p><br/><img src="https://sites.google.com/site/programacionuvmcoyoacan/_/rsrc/1472871580280/listas/1.png"
                align="left" width="580" height="530"/><br/>
                <br/>La estructura va a almacenar el nombre y teléfono dentro de la estructura agenda, también se va a utilizar la función malloc (Memory Allocation), el cual es una subrutina para la asignación dinámica de memoria dinámica utilizada en los lenguajes de programación C y C++ y forma parte de la libreria stdlib.h
                Lo primero que hace el programa al ejecutarse es apuntar a NULL, ¿quién es NULL?, es aquel nodo vacío es decir, al primer nodo ya que está vacío al iniciar el programa.
                Al continuar el programa el apuntador vuelve a apuntar a NULL entonces, ¿Quién es NULL en ese momento?, en este caso es el siguiente nodo ya que el primero ya contiene la primera información que ingresaste, por lo tanto el apuntador avanza al siguiente nodo vacío para almacenar el siguiente valor, así sucesivamente.
                Al imprimir la información contenida en la lista entonces lo haría en el orden en el que ingresaste la información ya que es en ese orden en los que están los nodos para esto funciona el apuntador y se va a detener hasta que apunte a NULL, que en este caso va a ser el último elemento de la lista en este caso es un nodo vacío.
                Para iniciar la lista siempre desde el primer elemento necesitamos un apuntador al primer elemento de la lista, en nuestro caso va a ser:
              <br/>structagenda primero;<br/>
              <br/>Para administrar el funcionamiento de una lista se deben de implementar diversas funciones con distintas aciones cada una de ellas como por ejemplo:
              añadir_elemento()
              mostrar_lista()
              mostrar_menu()<br/>
              y el respectivo main para que se ejecute el programa<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

      
      </Accordion>
      
      <br/>No Lineales:<br/>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Arboles
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            <br/>Estructura jerárquica de forma no lineal y dinámica, aplicada sobre una colección de
            elementos llamados nodos.<br/>
            <br/>Se les llama estructuras dinámicas, porque pueden cambiar tanto de forma como de tamaño
            durante la ejecucíon del programa. Se le llama estructuras no lineales porque cada elemento
            puede tener más de un sucesor.<br/>
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                Operaciones con árboles binarios
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p>
                <br/><b>insert()</b> Insertar un elemento en un árbol<br/>
                <br/><b>delete()</b> Eliminar un elemento de un árbol<br/>
                <br/><b>isEmpty()</b>Comprobar si un árbol está vacío<br/>
                <br/><b>depth()</b>  Calcular la altura (o profundidad) del árbol<br/>
                <br/><b>leaves()</b>Determinar el número de nodos hoja<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p>
                
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>



        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Grafos
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
            Un grafo está formado por un conjunto de vértices o nodos V, que representan a
            los objetos, y un conjunto de arcos que representan las relaciones entre vértices.
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>
            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Inicialización de un matriz
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p>
                  <br/><b>Insertar vértice</b><br/>
                  <br/>La operación de inserción de un nuevo vértice es una operación muy sencilla, únicamente consiste en
                  añadir una nueva entrada en la tabla de vértices (estructura de datos que almacena los vértices) para el nuevo nodo. 
                  A partir de ese momento el grafo tendrá un vértice más, inicialmente aislado, ya que ningúna arista llegará a él.<br/>
                  <br/><b>Insertar arista</b><br/>
                  <br/>Esta operación es también muy sencilla. 
                  Cuando se inserte una nueva arista en el grafo, habrá que añadir un nuevo nodo a la lista de adyacencia 
                  (lista que almacena los nodos a los que un vértice puede acceder mediante una arista) del nodo origen, así 
                  si se añade la arista (A,C), se deberá incluir en la lista de adyacencia de A el vértice C como nuevo destino.<br/>
                  <br/><b>Eliminar vértice</b><br/>
                  <br/>Esta operación es inversa a la inserción de vértice. En este caso el procedimiento a realizar es la eliminación 
                  de la tabla de vértices del vértice en sí. A continuación habrá que eliminar las aristas que tuviesen al vértice 
                  borrado como origen o destino.<br/>
                  <br/><b>Eliminar arista</b><br/>
                  <br/>Mediante esta operación se borra un arco del grafo. Para llevar a cabo esta acción es necesario eliminar de la 
                  lista de adyacencia del nodo origen el nodo correspondiente al nodo destino.<br/>
                  <br/><b>Otras operaciones</b><br/>
                  <br/>Las operaciones adicionales que puede incluir un grafo son muy variadas. Además de las clásicas de búsqueda de un
                  elemento o recorrido del grafo, también podemos encontrarnos con ejecución de algoritmos que busquen caminos más 
                  cortos entre dos vértices, o recorridos del grafo que ejecuten alguna operación sobre todos los vértices visitados, 
                  por citar algunas operaciones de las más usuales.<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Ejemplos
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p>
                  
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>

      
      </Accordion>
      
    </div>
  );
};
