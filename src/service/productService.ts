import { readFile,  writeFile } from "fs/promises"

class productService{
    public async createProducts(data){
        try {
            await writeFile('products.json', JSON.stringify(data, null, 2))
        }
        catch(err) {
            throw new Error(err)
        }
    }

    public async listProducts(){
       
       const productList= await readFile('products.json', "utf-8")

       return JSON.parse(productList)
    }

    public async stockProducts(){
        const products = await this.listProducts()
        const arr = products.map(item => {
            let temp = {
                nome: item.nome,
                qtde: item.qtde,
                proc: item.preco,
                valor_stock: item.qtde * item.preco
            }
            return temp
        }) 

        return arr
    }



}


export default new productService()