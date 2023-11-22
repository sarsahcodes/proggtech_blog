export enum ThemeTypes {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeProviderProps {
  theme: ThemeTypes;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: string;
  user: User;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  emailVerified?: string;
  image?: string;
  accounts: Account[];
  sessions: Session[];
  Post: Post[];
  Comment: Comment[];
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;

  user: User;
}

export interface Comment {
  id: string;
  createdAt: string;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
  post: Post;
}

export interface Post {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  cat: Category;
  userEmail: string;
  user: User;
  comments: Comment[];
}

export interface Category {
  _id: string;
  slug: string;
  title: string;
  img: string;
  Posts: Post[];
}
