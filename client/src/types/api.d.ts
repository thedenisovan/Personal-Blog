declare global {
  namespace BlogPage {
    interface Post {
      id: number;
      createdAt: string;
      title: string;
      description: string;
      content: string;
      authorId: number;
      categoryId: number;
      published: boolean;
    }
  }
}

export {};
