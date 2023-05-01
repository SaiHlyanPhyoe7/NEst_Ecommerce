import { ApiProperty } from '@nestjs/swagger';
import { OrderProduct } from '@prisma/client';
import { OrderEntity } from 'src/orders/entities/order.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

export class OrderProductEntity implements OrderProduct {
  @ApiProperty()
  id: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  productId: string;

  @ApiProperty()
  orderId: string;

  @ApiProperty({ required: false, type: ProductEntity })
  product: ProductEntity;

  @ApiProperty({ required: false, type: OrderEntity })
  order: OrderEntity;
}
