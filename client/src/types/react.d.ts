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

  interface Post {
    id: number;
    createdAt: string;
    title: string;
    description: string;
    content: string;
    published: boolean;
    authorId: number;
    categoryId: number;
    categoryName: {
      name: string;
    };
    dateString: string;
    likedBy: string[];
    comments: {
      id: number;
      content: string;
      createdAt: string;
      authorName: string;
      postId: number;
    }[];
  }
}

export {};
