- Copyright e diritto d'autore

Il copyright è un titolo che consente a chi lo detiene di distribuire, modificare e sfruttare a scopo di lucro un prodotto, nel nostro caso software.
Quando si acquista un software di solito si ottiene la licenza d'uso, un contratto che specifica i termini di utilizzo del prodotto. Questi possono variare da
software freeware a software proprietario.
Il diritto d'autore si divide in diritto morale, di paternità dell'opera, che non decade mai, e diritto patrimoniale, ossia diritto all'uso dell'opera, 
che decade a 70 anni dopo la morte.

Lista dei software:
SOFTWARE LIBERO - libertà totale, quindi di modifica, distribuzione, e guadagno, ma non sempre gratuitamente.
COPYLEFT (con permesso d'autore) - stesse libertà del freeware ma deve essere sempre distribuito come freeware, senza la possibilità di porre restrizioni all'uso.
DOMINIO PUBBLICO (senza permesso d'autore) - alcune riproduzioni del software possono avere restrizioni
SEMILIBERO - non posso ridistribuirlo a scopo di lucro ma posso modificarlo
FREEWARE - posso utilizzarlo e ridistribuirlo, ma non ho accesso al codice sorgente
SHAREWARE - di solito non è disponibile il codice sorgente, e per ridistribuirlo devo pagare una licenza
PROPRIETARIO - utilizzo, copia, modifica e distribuzione sono vietati o richiedono permessi.
COMMERCIALE - creato da aziende a scopo di lucro, può rientrare nelle altre categorie

- open source che cos'è

Software del quale ho accesso al codice sorgente

- software semilibero

non posso ridistribuirlo a scopo di lucro ma posso modificarlo

- associazioni ricorsive
- che cos'è la normalizzazione

processo per far aderire un modello relazionale allo standard delle forme normali

- i problemi di una base dati

ridondanza, incongruenza, inconsistenza
- ridondanza: i dati sono ripetuti
- incongruenza: quando modifico uno dei dati ripetuti, l'altro non si modifica, e quindi lo stesso dato logico a 2 valori diversi.
- inconsistenza: quando faccio una query, il risultato non sarà attendibile.

- le regole di normalizzazione

dipendenza funzionale:
quando attributi di un insieme B appartengono anche ad un insieme A

le forme normali:

1. le tabelle hanno una chiave primaria e non campi multivalore
2. tutte le tabelle sono in prima forma normale e tutti i campi devono dipendere da tutta la chiave primaria e non solo in parte (elimina la dipendenza funzionale parziale)
3. tutte le tabelle sono in seconda forma normale e non ci sono campi che dipendono da altri campi (elimina la dipendenza funzionale transitiva)

BCNF (Boyce cod normal form) - La chiave non deve dipendere da attributi non chiave

- che cos'è l'algebra relazionale

è un linguaggio che permette di descrivere le interrogazioni fatte a un database

- con operatori insiemistici 

unione, intersezione, differenza

operatori algebrici
proiezione e selezione

- come si implementa la differenza in sql

EXCEPT

- come si implementa l'intersezione in sql

INTERSECT 

- web service RESTful cosa sono
- cosa sono REST e SOAP

REST: standard, basato su HTTP, flessibile
SOAP ( standard communication protocol system ): si basa su un modello a classi, quindi molto più speciifco, ma possono essere codificati solo in XML

- verbi usati in HTTP dai REST

POST: nell'header
GET: nell'url
PUT: per gli update o per rimpiazzare
PATCH: solo per modificare
DELETE: per cancellare

- variabile di sessione che cos'è

contiene dati relativi alla sessione di utilizzo del software che vengono scartati quando quest'ultimo viene chiuso.
In ASP, è una classe a cui noi possiamo dare delle coppie chiave valore

- variabile di applicazione che cos'è

Sempre coppia chiave valore, ma vive per l'intera durata del funzionamento dell'applicazione (per diego: da quando premi il tasto verde a quando premi il tasto rosso su visual studio)

- come si imposta una variabile di sessione in un linguaggio qualsiasi, come viene definita e dove

Boh, in JS con window.sessionStorage, a livello client. In asp dal code behind. 👍

- cosa viene allocato nella memoria di massa sul dispositivo (cookie)

Contenitore di dati di un'applicazione client-server relativi a un client speifico che risiedono su quest'ultimo, usato per esempio per salvare un token JWT.
