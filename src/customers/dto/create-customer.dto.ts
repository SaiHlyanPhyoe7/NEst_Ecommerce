import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
