import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerAlreadyExistsException } from '../customExceptionError/customerException/duplicate-customer.exception';
import { CustomerNotFoundException } from '../customExceptionError/customerException/customer-not-found.exception';
import * as bcrypt from 'bcrypt';

const roundsOfHashing = 10;

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const existingCustomer = await this.prisma.customer.findUnique({
      where: {
        email: createCustomerDto.email,
      },
    });
    if (existingCustomer) {
      throw new CustomerAlreadyExistsException();
    } else {
      const hashPassword = await bcrypt.hash(
        createCustomerDto.password,
        roundsOfHashing,
      );
      createCustomerDto.password = hashPassword;

      return this.prisma.customer.create({ data: createCustomerDto });
    }
  }

  findAll() {
    return this.prisma.customer.findMany({});
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    if (!customer) {
      throw new CustomerNotFoundException(id);
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    if (updateCustomerDto.password) {
      updateCustomerDto.password = await bcrypt.hash(
        updateCustomerDto.password,
        roundsOfHashing,
      );
    }

    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
