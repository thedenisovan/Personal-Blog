declare global {
  namespace Express {
    interface Request {
      token?: { role: string };
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
