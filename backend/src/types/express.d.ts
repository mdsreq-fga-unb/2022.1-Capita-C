declare namespace Express {
  export interface Request {
    user: {
      cpf: string;
      name: string;
      isAdmin: boolean;
      isConsultor: boolean;
      isTelemarketing: boolean;
    } | null;
  }
}
