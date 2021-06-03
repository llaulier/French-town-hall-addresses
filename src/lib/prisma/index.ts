import { PrismaClient } from '@prisma/client';
import { NODE_ENV } from '../../config';

export const prisma = new PrismaClient({
  log: NODE_ENV === 'test' ? [] : ['query', 'info', 'warn', 'error'],
  errorFormat: NODE_ENV === 'test' ? 'minimal' : 'pretty'
});