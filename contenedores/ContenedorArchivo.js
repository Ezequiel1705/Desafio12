const { promises: fs } = require('fs')

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async listar(id) {
        const producto = await this.listarAll();
        const productoById = producto.find(p => p.id == id);
        return productoById;
    }

    async listarAll() {
        try {
            const productos = await fs.promises.readFile(this.ruta, 'utf8');
            return JSON.parse(productos);
        } catch (error) {
            return[];
        }
    }
    listarAll();  

    async guardar(obj) {
        //crear ese archivo, writeFile 
    }

    async actualizar(elem, id) {
        
    }

    async borrar(id) {
        
    }

    async borrarAll() {
        
    }
}

module.exports = ContenedorArchivo 