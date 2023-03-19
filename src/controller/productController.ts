import { Request,  Response } from "express";
import productService from "../service/productService";


class productController{
    
    public async list(req: Request, res: Response){
        const productList = await productService.listProducts()
        return res.status(200).send(productList) 
    }

    public  async create(req: Request,res: Response){
        await productService.createProducts(req.body)
        
        return res.status(201).send()
    }

    public async stock(req: Request, res: Response){

        const produtos_valor_total = productService.stockProducts()
        return res.status(200).send(produtos_valor_total)
    }

}

export default new productController()
