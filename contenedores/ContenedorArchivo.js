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

    async guardar() {
        //crear ese archivo, writeFile 
        const id = this.getId()
  
        this.productos.push({
            ...producto, ...{id : id +1}
        })

        try {
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(this.productos, null, 2));
        }
        catch (error) {
            console.log("Error en save" + error)      
            
        }
    }

    async actualizar(elem, id) {
        
    }

    async borrar(id) {
        let archivoCompleto = await this.leoAll()
        let nuevoArchivo = archivoCompleto.filter(ele => ele.id !== id)
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(nuevoArchivo, null, 2))
        try{
            console.log(`"Registro ${id} borrado correctamente"`)
        }
        catch(error){
            console.log("Error en deleteById" + error)
        }
    }

    async borrarAll() {
        await fs.promises.unlink("./productos.txt")
            try {
               
                console.log ("Archivo eliminado correctamente")
            }
            catch(error) {
                console.log("Error en borrar el archivo" + error)
            }
    }
}

const registro = new ContenedorArchivo("../productos.txt")

registro.save({"title" : "title 1", "price" : 100, "thumbnail" : 'https://picsum.photos/id/237/200'})
registro.save({"title" : "title 2", "price" : 200, "thumbnail" : 'https://picsum.photos/id/237/200'})
registro.save({"title" : "title 3", "price" : 300, "thumbnail" : 'https://picsum.photos/id/237/200'})
registro.save({"title" : "title 4", "price" : 400, "thumbnail" : 'https://picsum.photos/id/237/200'})
registro.save({"title" : "title 5", "price" : 500, "thumbnail" : 'https://picsum.photos/id/237/200'})

module.exports = ContenedorArchivo 