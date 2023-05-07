import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiCreatedResponse({ type: CustomerEntity })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return new CustomerEntity(
      await this.customersService.create(createCustomerDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: CustomerEntity, isArray: true })
  async findAll() {
    const customers = await this.customersService.findAll();
    return customers.map((customer) => new CustomerEntity(customer));
  }

  @Get(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async findOne(@Param('id') id: string) {
    return new CustomerEntity(await this.customersService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return new CustomerEntity(
      await this.customersService.update(id, updateCustomerDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async remove(@Param('id') id: string) {
    return new CustomerEntity(await this.customersService.remove(id));
  }
}
