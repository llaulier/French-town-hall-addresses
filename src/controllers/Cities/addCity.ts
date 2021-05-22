import {Prisma} from '@prisma/client'
import {Request, Response} from 'express'
import {prisma} from '../../lib/prisma'
import { NewCityPayload } from '../../types/index'
import { handleError } from '../../utils'


const addCity = async (req: Request, res: Response) : promise<void> => {
    try {
        const body: NewCityPayload = req.body
        const { 
            name,
            postCode,
            labelUpercase,
            labelComplete,
            codeRegion,
            region,
            department,
            codeDepartment,
            inseeCode
        } = body

        const city: Prisma.CityCreateInput = {
            name,
            postCode,
            labelUpercase,
            labelComplete,
            codeRegion,
            region,
            department,
            codeDepartment,
            inseeCode
          }
        const newCity = await prisma.city.create({ data: city })
    }   
}