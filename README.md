API para leer tuits.

En base de datos: 
    Collection: Tweets
    Collection: Users

Hay que hacer:
    Listado de tweets: (básicamente usando parámetros de mongo). Esto usa cache (básica).
        Cuidado con el tamaño: con .limit, luego .skip.
        Funcionalidad: búsqueda de texto.
        Funcionalidad: tweets por usuario (buscar por @username)
    Información de un usuario.
    Todos los usuarios que han rt un tweet.
        Cuidado con devolver todos los campos: devolver un name y un id.

