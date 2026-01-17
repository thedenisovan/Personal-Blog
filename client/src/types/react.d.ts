declare global {
  namespace React {
    interface ClassName {
      className?: string;
    }
    interface AppContextType {
      isSignedIn: boolean;
      toggleSignIn: (value: boolean) => void;
      theme: boolean;
      toggleTheme: () => void;
    }
  }
}

export {};
