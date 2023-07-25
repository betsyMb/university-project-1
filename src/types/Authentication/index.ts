export type Status = "checking" | "authenticated" | "no-authenticated";

export interface Client {
  user: string;
  password: string;
}
