import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@prisma/client';
import { CustomerEntity } from 'src/customers/entities/customer.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

export class ReviewEntity implements Review {
  @ApiProperty()
  id: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  customerId: string;

  @ApiProperty()
  productId: string;

  @ApiProperty({ required: false, type: CustomerEntity })
  customer: CustomerEntity;

  @ApiProperty({ required: false, type: ProductEntity })
  product: ProductEntity;
}
