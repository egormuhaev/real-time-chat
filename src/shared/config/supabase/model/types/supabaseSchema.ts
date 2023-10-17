export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      friends: {
        Row: {
          created_at: string
          friend: string | null
          id: number
          person: string | null
        }
        Insert: {
          created_at?: string
          friend?: string | null
          id?: number
          person?: string | null
        }
        Update: {
          created_at?: string
          friend?: string | null
          id?: number
          person?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "friends_friend_fkey"
            columns: ["friend"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friends_person_fkey"
            columns: ["person"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      friends_requests: {
        Row: {
          created_at: string
          from: string | null
          id: number
          status: boolean | null
          to: string | null
        }
        Insert: {
          created_at?: string
          from?: string | null
          id?: number
          status?: boolean | null
          to?: string | null
        }
        Update: {
          created_at?: string
          from?: string | null
          id?: number
          status?: boolean | null
          to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "friends_requests_from_fkey"
            columns: ["from"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "friends_requests_to_fkey"
            columns: ["to"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
