declare global {
  namespace Express {
    interface Request {
      token?: string | null;
      user?: {
        id: number;
        username: string;
        password: string;
        role: boolean;
      };
    }
  }
}

export {};
