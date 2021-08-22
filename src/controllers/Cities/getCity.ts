import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { handleError } from '../../utils';

const getCity = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.cityId) {
      handleError({ message: `City Id is required` } as any, res);
      return;
    }

    const getOneCity = await prisma.city.findUnique({ where: { id: Number(req.params.cityId) } });

    res.status(200).json({ getOneCity });
  } catch (error) {
    handleError(error, res);
  }
};

export default getCity;
