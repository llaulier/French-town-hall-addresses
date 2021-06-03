import { Request, Response } from 'express'

export const sendWhoAmI = async (req: Request, res: Response) => {
  res.status(200).json('The connection is established')
}