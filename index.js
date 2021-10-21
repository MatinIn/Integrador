
let calcular = () => {
   let cantidad = parseInt(document.querySelector('#cantidad').value);
   let categoria = document.querySelector('#categoria').value;
   let total = 0;
  
   if (categoria === "1"){
        total = cantidad * 40;
        document.querySelector('h3').innerHTML = `Total a Pagar: $ ${total}`;
   } else if (categoria === "2"){
        total = cantidad * 100;
        document.querySelector('h3').innerHTML = `Total a Pagar: $ ${total}`;
   } else if (categoria === "3"){
        total = cantidad * 170;
        document.querySelector('h3').innerHTML = `Total a Pagar: $ ${total}`;
   };

};

let restaurar = () => {
    document.querySelector('h3').innerHTML = "Total a Pagar: $";
};


