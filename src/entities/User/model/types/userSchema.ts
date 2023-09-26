import { User, Session } from "@supabase/supabase-js";

export interface AuthData {
  user: User | null;
  session: Session | null;
}

export interface UserSchema {
  authData?: AuthData;
}
