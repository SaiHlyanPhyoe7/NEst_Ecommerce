import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CustomerEntity, isArray: true })
  async findAll() {
    const customers = await this.customersService.findAll();
    return customers.map((customer) => new CustomerEntity(customer));
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CustomerEntity })
  async findOne(@Param('id') id: string) {
    return new CustomerEntity(await this.customersService.findOne(id));
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CustomerEntity })
  async remove(@Param('id') id: string) {
    return new CustomerEntity(await this.customersService.remove(id));
  }
}
