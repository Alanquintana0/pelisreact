export const guardarEnStorage = (itemKey, item) => {
    //Conseguir los elementos del localstorage
    let elementos = JSON.parse(localStorage.getItem(itemKey));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Agregar dentro del array un elemento nuevo
      elementos.push(item);
    }else{
      //Crear un array con la peli nueva
      elementos = [item];
    }

    //Guardar en el almacenamiento local
    localStorage.setItem(itemKey, JSON.stringify(elementos));

    //Devolvemos la peli que guardamos
    return item;
}