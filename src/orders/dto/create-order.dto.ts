import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @ApiProperty()
  orderDetails: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  paymentInformation: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  shippingInformation: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  customerId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  productId: string;
}
