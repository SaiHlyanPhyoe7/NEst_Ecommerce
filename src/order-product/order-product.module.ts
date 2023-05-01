import { Module } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OrderProductController],
  providers: [OrderProductService],
  imports: [PrismaModule],
})
export class OrderProductModule {}
