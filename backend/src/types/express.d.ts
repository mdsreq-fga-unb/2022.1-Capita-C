declare namespace Express {
  export interface Request {
    user: {
      cpf: string;
      name: string;
      isAdmin: boolean;
      isManager: boolean;
      isTelemarketing: boolean;
    } | null;
  }
}
