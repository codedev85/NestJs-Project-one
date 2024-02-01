import { Controller , Post ,Get, Body} from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('v1')

export class ProductsController{

   constructor(private readonly productService : ProductsService){}

   @Post('products')

   addProduct(@Body('title') prodTitle : string ,@Body('description') prodDesc : string , @Body('price') prodPrice : number){
     
     const generatedId = this.productService.createProduct(prodTitle,prodDesc,prodPrice)

     return {id : generatedId }

   }

   @Get('products')
   getProduct(){
      return this.productService.getProduct();
   }

}