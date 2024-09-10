let Datos;
let Usuarios; 
let Acciones;

// Obtener datos de la hoja 'Datos'
async function getDatos() {
    let respuestadatos;    
    try {
    
        respuestadatos = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1ngLhAc-I30ZjpkDqNtQrYC0dghsL3fXKkMpzfbgTIKI',
            range: 'Datos!A:G',
        });
      
    } catch (err) {
        document.getElementById("content").innerText = err.message;
        return;
    }
    const range = respuestadatos.result;
  if (!range || !range.values || range.values.length == 0) {
    document.getElementById("content").innerText = "No values found.";
    return;
}
Datos =[];
range.values.forEach((fila) => {
    if (isNaN(parseInt(fila[0])) || fila[5] !== undefined) return;

    const nuevoDato = {
        codigo: fila[0],
        articulo: fila[1],
        almacen_tienda: fila[2],
        almacen_central: fila[3],
        almacen_envios: fila[4],
        almacen_lives: fila[5],
        observaciones: fila[6],
    };
    Datos.push(nuevoDato);

});
}

async function editDato(id, contenido) {
  const update = [
    contenido.codigo,
    contenido.articulo,
    contenido.almacen_tienda,
    contenido.almacen_central,
    contenido.almacen_envios,
    contenido.almacen_lives,
    contenido.observaciones,
    
  ]
  const filaAEditar = parseInt(id)+1;
  response = await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId:'1ngLhAc-I30ZjpkDqNtQrYC0dghsL3fXKkMpzfbgTIKI',
    range: `${hoja}!A${filaAEditar}:G${filaAEditar}`,
    values: [update],
    valueInputOption:"USER_ENTERED"
  });
  return response;
}

// Obtener datos de la hoja 'Usuarios'

async function getUsuarios() {
    let respuestausuarios;    
    try {
    
        respuestausuarios = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1s_83WjILOqx94fYDTRTSdhjQbbGueGxtLFREvcpn2JE',
            range: 'Usuarios!A:B',
        });
      
    } catch (err) {
        document.getElementById("content").innerText = err.message;
        return;
    }
    const range = respuestausuarios.result;
  if (!range || !range.values || range.values.length == 0) {
    document.getElementById("content").innerText = "No values found.";
    return;
}
Usuarios =[];
range.values.forEach((fila) => {
    if (isNaN(parseInt(fila[0])) || fila[1] !== undefined) return;

    const nuevoUsuario = {
        usuario: fila[0],
        claveusuario: fila[1],
    };
    Usuarios.push(nuevoUsuario);

});
}

async function editUsuario(id, contenido) {
  const update = [
    contenido.usuario,
    contenido.claveusuario,
  ]
  const filaAEditar = parseInt(id)+1;
  response = await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId:'1s_83WjILOqx94fYDTRTSdhjQbbGueGxtLFREvcpn2JE',
    range: `${hoja}!A${filaAEditar}:B${filaAEditar}`,
    values: [update],
    valueInputOption:"USER_ENTERED"
  });
  return response;
}

// Obtener datos de la hoja 'Historial'
async function getAcciones() {
    let respuestaAcciones;    
    try {
    
        respuestaAcciones = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1RQIXoop7HmPJfH7zOQtBWBv5066NmEMinkVsjnQtcYY',
            range: 'Acciones!A:D',
        });
      
    } catch (err) {
        document.getElementById("content").innerText = err.message;
        return;
    }
    const range = respuestaAcciones.result;
  if (!range || !range.values || range.values.length == 0) {
    document.getElementById("content").innerText = "No values found.";
    return;
}
Acciones =[];
range.values.forEach((fila) => {
    if (isNaN(parseInt(fila[0])) || fila[5] !== undefined) return;

    const nuevoAcciones = {
        usuarioacc: fila[0],
        fechahora: fila[1],
        interaccion: fila[2],
        observacionesacc: fila[3],
    };
    Acciones.push(nuevoAcciones);

});
}

async function editDato(id, contenido) {
  const update = [
    contenido.usuarioacc,
    contenido.fechahora,
    contenido.interaccion,
    contenido.observacionesacc,
  ]
  const filaAEditar = parseInt(id)+1;
  response = await gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId:'1RQIXoop7HmPJfH7zOQtBWBv5066NmEMinkVsjnQtcYY',
    range: `${hoja}!A${filaAEditar}:D${filaAEditar}`,
    values: [update],
    valueInputOption:"USER_ENTERED"
  });
  return response;
}

