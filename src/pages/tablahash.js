import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
}from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
export const tablahash = () => {
  return (
    <div >
      <h1><header align='center'>Tabla Hash</header></h1>
      <br/><b>Definición</b><br/>
      <br/>Una tabla Hash es un contenedor asociativo (tipo Diccionario) que permite un almacenamiento y 
      posterior recuperación eficientes de elementos (denominados valores) a partir de otros objetos, llamados claves.
      Tras esta explicación preliminar vamos a entrar en detalle.
      Una tabla hash se puede ver como un conjunto de entradas. Cada una de estas entradas tiene asociada una clave única,
      y por lo tanto, diferentes entradas de una misma tabla tendrán diferentes claves. Esto implica, que una clave 
      identifica univocamente a una entrada en una tabla hash.
      Por otro lado, las entradas de las tablas hash están compuestas por dos componentes, la propia clave y la 
      información que se almacena en dicha entrada.<br/>
      <br/><b>Operaciones básicas de las tablas hash</b><br/>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <b>Insertar</b>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p><img src="http://www.hci.uniovi.es/Products/DSTool/images/hash/insertar1.gif" align="right"
             width="140" height="140" />
            <br/><br/>El proceso de inserción en una tabla hash es muy simple y sencillo. 
            Sobre el elemento que se desea insertar se aplica la función de dispersión. 
            El valor obtenido tras la aplicación de esta función será el índice de la tabla 
            en el que se insertará el nuevo elemento.<br/><br/>
            </p>
          </AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                <b>Borrar</b>
                </AccordionItemButton>
              </AccordionItemHeading> <AccordionItemPanel>
                <p><img src="http://www.hci.uniovi.es/Products/DSTool/images/hash/eliminar.gif" align="right"
             width="150" height="170" />
                El borrado en una tabla hash es muy sencillo y se realiza de forma muy eficiente. 
                Una vez indicada la clave del objeto a borrar, se procederá a eliminar el valor asociado a dicha clave 
                de la tabla.
                <br/>Esta operación se realiza en tiempo constante, sin importar el tamaño de la tabla o el número de 
                elementos que almacene en ese momento la estructura de datos. Esto es así ya que al ser la tabla una
                estructura a la que se puede acceder directamente a través de las claves, no es necesario recorrer 
                toda la estructura para localizar un elemento determinado.<br/>
                <br/>Si sobre la tabla resultante de la inserción del elemento azul realizamos el borrado del elemento negro, 
                la tabla resultante sería la siguiente:<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>

          <AccordionItemPanel>

            <AccordionItemPanel>
              <AccordionItemHeading>
                <AccordionItemButton>
                <b>Otras operaciones</b>
                </AccordionItemButton>
              </AccordionItemHeading><AccordionItemPanel>
                <p>
                  Se puede realizar de la siguiente manera:
                  <br />Una de las principales operaciones que se pueden realizar en las tablas hash es la redispersión. 
                  La redispersión se suele realizar cuando el factor de carga(número de elementos / capacidad de la tabla) 
                  de la tabla supera cierto umbral.
                  La redispersión consiste en pasar todos los elementos de la tabla original a una nueva tabla de un 
                  tamaño mayor. De esta forma, se reduce el factor de carga de la tabla.<br/>
                </p>
              </AccordionItemPanel></AccordionItemPanel></AccordionItemPanel>
              </AccordionItem></Accordion>
              <p>
              <br/><b>Ejemplos</b><br/>
              <br/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hash_table-es.svg/350px-Hash_table-es.svg.png"align="left" width="240" height="170" /><br/>
              <img src="https://ccia.ugr.es/~jfv/ed1/tedi/cdrom/icons/hash6.gif"align="left" width="240" height="170" /><br/>
              <b>Hashing abierto</b>
              <br/>Este método se conoce normalmente con el nombre de encadenamiento separado y obviamente la cantidad 
              de tiempo requerido para una búsqueda dependerá de la longitud de las listas y de las posiciones 
              relativas de las claves en ellas.<br/>
              </p>
      
    </div>
  );
};


