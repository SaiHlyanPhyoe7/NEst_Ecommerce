import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateOrderProductDto {
  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  orderId: string;

  @ApiProperty()
  productId: string;
}
