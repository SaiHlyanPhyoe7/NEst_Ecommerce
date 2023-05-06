import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomerAlreadyExistsException extends HttpException {
  constructor() {
    super('A customer with this email already exists', HttpStatus.CONFLICT);
  }
}
