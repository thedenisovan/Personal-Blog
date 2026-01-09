declare global {
  namespace Express {
    interface Request {
      token?: string | null;
    }
  }
}

export {};
