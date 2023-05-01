import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty()
  rating: number;

  @ApiProperty()
  customerId: string;

  @ApiProperty()
  productId: string;
}
