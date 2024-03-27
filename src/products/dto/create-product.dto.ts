import { IsArray, IsDateString, IsDecimal, IsNumber, IsPositive, IsString, MaxLength, MinDate, MinLength } from "class-validator";
import { Cart } from "src/cart/entities/cart.entity";

export class CreateProductDto {
    @IsString()
    @MinLength(2)
    @MaxLength(150)
    readonly name: string;

    @IsString()
    @MinLength(10)
    @MaxLength(450)
    readonly description: string;

    @IsString()
    @IsDecimal()
    readonly price: string;

    @IsNumber()
    @IsPositive()
    readonly stock: number;

    @IsString()
    @IsDecimal()
    readonly mass: string;

    @IsString()
    @IsDateString()
    readonly date: string;

    readonly carts: Cart[];
}
