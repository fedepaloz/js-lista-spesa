//INIZIO CON IL CICLO FOR PER RIPASSARE COME SI FA
//Uova,Pane,Latte,Biscotti,Pasta,Affettati,Formaggio,Verdura,Frutta

//voglio metterli dentro la ul quindi la prendo dal dom
const Spesa = document.getElementById("lista-spesa");

//creo l'array con gli elementi della lista della spesa
const listaProdotti = ['Uova','Pane','Latte','Biscotti','Pasta','Affettati','Formaggio','Verdura','Frutta'];

//creo il ciclo for con gli elementi della lista della spesa

/* let listaSpesa = '';

for (let i = 0; i < listaProdotti.length; i++)
{listaSpesa += `<li> ${listaProdotti[i]} </li>`}



Spesa.innerHTML = listaSpesa */


//ciclo while

let listaSpesa = '';

let i = 0

while (i < listaProdotti.length) {{listaSpesa += `<li> ${listaProdotti[i]} </li>`}
    
    i++
    



    
}

Spesa.innerHTML = listaSpesa
