import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const customer1 = await prisma.customer.create({
    data: {
      email: 'jane@example.com',
      password: 'password-jane',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      email: 'john@example.com',
      password: 'password-john',
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
