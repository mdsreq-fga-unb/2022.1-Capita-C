import { PrismaClient } from "@prisma/client";

/**
 * ! The prisma client is usually used in the repositories folder to make CRUD operations
 * ? The client is configured to throw a 404 error when the findUnique operation couldn't find a registry
 */
export default new PrismaClient();
