import {Prisma, PrismaClient} from '@prisma/client'
import {Request, Response} from 'express'
import { NewCityPayload } from '../../types/index'
import { handleError } from '../../utils'

const prisma = new PrismaClient()

export const addCity = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: NewCityPayload = req.body
        const { 
            name,
            postcode,
            labelUppercase,
            labelComplete,
            codeRegion,
            region,
            department,
            codeDepartment,
            inseeCode
        } = body

        const city: Prisma.cityCreateInput = {
            name,
            postcode,
            labelUppercase,
            labelComplete,
            codeRegion,
            region,
            department,
            codeDepartment,
            city_inseeCode: inseeCode
          }
        const newCity = await prisma.city.create({ data: city })
    }   catch (error) {
        handleError(error, res)
    }
    
}
