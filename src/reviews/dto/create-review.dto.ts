import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  rating: number;

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
