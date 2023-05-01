import { ApiProperty } from '@nestjs/swagger';
import { Order, Product } from '@prisma/client';

export class CreateOrderProductDto {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  orderId: string;

  @ApiProperty()
  productId: string;
}
