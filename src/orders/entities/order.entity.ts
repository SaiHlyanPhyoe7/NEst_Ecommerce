import { ApiProperty } from '@nestjs/swagger';
import { Order } from '@prisma/client';
import { CustomerEntity } from 'src/customers/entities/customer.entity';
import { ProductEntity } from 'src/products/entities/product.entity';

export class OrderEntity implements Order {
  @ApiProperty()
  id: string;

  @ApiProperty()
  orderDetails: string;

  @ApiProperty()
  paymentInformation: string;

  @ApiProperty()
  shippingInformation: string;

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

  constructor({ customer, ...data }: Partial<OrderEntity>) {
    Object.assign(this, data);
    if (customer) {
      this.customer = new CustomerEntity(customer);
    }
  }
}
