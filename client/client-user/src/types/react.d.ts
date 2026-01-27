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
    count: number;
    categoryName: {
      name: string;
    };
    dateString: string;
    likes: number[Likes];
    comments: {
      id: number;
      content: string;
      createdAt: string;
      authorName: string;
      postId: number;
    }[];
  }
}

export interface Likes {
  id: number;
  likedById: number;
  postId: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  authorName: string;
  postId: number;
}

export interface UserToken {
  exp: number;
  iat: number;
  id: number;
  password: string;
  role: string;
  username: string;
}

export {};
