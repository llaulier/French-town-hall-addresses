import { PrismaClient, Prisma } from '@prisma/client'

export const city: Prisma.cityCreateInput[] =[
  {
    "name": "Crouy-en-Thelle",
    "postcode": "60530",
    "labelUppercase": "CROUY EN THELLE",
    "labelComplete": "",
    "codeRegion": 32,
    "region": "Haut-de-France",
    "department": "Oise",
    "codeDepartment": 60,
    "city_inseeCode": "60185"
},
{
  "name": "Querrieu",
  "postcode": "80650",
  "labelUppercase": "QUERRIEU",
  "labelComplete": "Querrieu",
  "codeRegion": 32,
  "region": "Haut-de-France",
  "department": "Somme",
  "codeDepartment": 80,
  "city_inseeCode": "80115"
},
{
  "name": "Mohon",
  "postcode": "56490",
  "labelUppercase": "MOHON",
  "labelComplete": "Mohon",
  "codeRegion": 53,
  "region": "Bretagne",
  "department": "Morbihan",
  "codeDepartment": 56,
  "city_inseeCode": "56134"
}
]

export const citySeed = async (prisma: PrismaClient) => {
    for (const data of city) {
      const count = await prisma.city.count({ where: { name: data.name } })
      if (count > 0) return
      const city = await prisma.city.create({ data })
      console.log(`Created orderType with id: ${city.id}`)
    }
}