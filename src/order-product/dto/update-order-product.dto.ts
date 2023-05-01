import { PartialType } from '@nestjs/swagger';
import { CreateOrderProductDto } from './create-order-product.dto';

export class UpdateOrderProductDto extends PartialType(CreateOrderProductDto) {}
