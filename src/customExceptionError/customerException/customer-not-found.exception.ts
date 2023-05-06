import { NotFoundException } from '@nestjs/common';

export class CustomerNotFoundException extends NotFoundException {
  constructor(customerId: string) {
    super(`Customer with ID ${customerId} not found`, 'NOT_FOUND');
  }
}
