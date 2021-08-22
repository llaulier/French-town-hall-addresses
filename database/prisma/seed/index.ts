import { PrismaClient } from '@prisma/client'
import { citySeed } from './citySeed'


const prisma = new PrismaClient()

const main = async () => {
  console.log(`Start seeding ...`)
  await citySeed(prisma)
  console.log(`Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })