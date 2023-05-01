import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  orderDetails: string;

  @ApiProperty()
  paymentInformation: string;

  @ApiProperty()
  shippingInformation: string;

  @ApiProperty()
  customerId: string;

  @ApiProperty()
  productId: string;
}
