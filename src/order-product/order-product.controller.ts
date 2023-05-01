import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderProductEntity } from './entities/order-product.entity';

@Controller('order-product')
@ApiTags('order-product')
export class OrderProductController {
  constructor(private readonly orderProductService: OrderProductService) {}

  @Post()
  @ApiOkResponse({ type: OrderProductEntity })
  create(@Body() createOrderProductDto: CreateOrderProductDto) {
    return this.orderProductService.create(createOrderProductDto);
  }

  @Get()
  @ApiOkResponse({ type: OrderProductEntity, isArray: true })
  findAll() {
    return this.orderProductService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrderProductEntity })
  findOne(@Param('id') id: string) {
    return this.orderProductService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: OrderProductEntity })
  update(
    @Param('id') id: string,
    @Body() updateOrderProductDto: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(id, updateOrderProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: OrderProductEntity })
  remove(@Param('id') id: string) {
    return this.orderProductService.remove(id);
  }
}
