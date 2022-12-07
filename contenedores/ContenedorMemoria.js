class ContenedorMemoria {
    constructor() {
        this.elementos = []
        this.id = 0
    }

    listar(id) {
        return this.elementos(id);
    }

    listarAll() {
        return this.elementos;
    }

    guardar() {
        const id = this.getId()
  
        this.elementos.push({
            ...elemento, ...{id : id +1}
        })
    }

    /* actualizar(elem, id) {
        
    }

    borrar(id) {
        
    } */

    borrarAll() {
        const removed = this.elementos.slice(this.elementos.length - 1)
        return removed
    }
}

module.exports = ContenedorMemoria