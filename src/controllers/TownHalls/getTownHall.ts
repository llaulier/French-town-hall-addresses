import { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { handleError } from '../../utils';

const getTownHall = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.params.townHallId) {
      handleError({ message: `Town hall Id is required` } as any, res);
      return;
    }

    const townHall = await prisma.townHall.findUnique({ where: { id: Number(req.params.townHallId) } });

    res.status(200).json({ townHall });
  } catch (error) {
    handleError(error, res);
  }
};

export default getTownHall;