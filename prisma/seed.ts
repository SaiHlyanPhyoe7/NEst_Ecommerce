import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { create } from 'domain';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordJane = await bcrypt.hash('password-jane', roundsOfHashing);
  const passwordJohn = await bcrypt.hash('password-john', roundsOfHashing);

  const customer1 = await prisma.customer.upsert({
    where: { email: 'jane@example.com' },
    update: {
      password: passwordJane,
    },
    create: {
      email: 'jane@example.com',
      password: passwordJane,
    },
  });

  const customer2 = await prisma.customer.upsert({
    where: { email: 'john@example.com' },
    update: {
      password: passwordJohn,
    },
    create: {
      email: 'john@example.com',
      password: passwordJohn,
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      inventory: 10,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 200,
      inventory: 5,
    },
  });

  const order1 = await prisma.order.create({
    data: {
      orderDetails: 'Details of Order 1',
      paymentInformation: 'Payment Info of Order 1',
      shippingInformation: 'Shipping Info of Order 1',
      customerId: customer1.id,
      productId: product1.id,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      orderDetails: 'Details of Order 2',
      paymentInformation: 'Payment Info of Order 2',
      shippingInformation: 'Shipping Info of Order 2',
      customerId: customer2.id,
      productId: product2.id,
    },
  });

  const review1 = await prisma.review.create({
    data: {
      rating: 4,
      customerId: customer1.id,
      productId: product1.id,
    },
  });

  const review2 = await prisma.review.create({
    data: {
      rating: 5,
      customerId: customer2.id,
      productId: product2.id,
    },
  });
  console.log('Reviews:', review1, review2);
  console.log('Orders:', order1, order2);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
