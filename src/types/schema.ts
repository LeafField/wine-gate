export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          category: string
          chara: string
          id: number
          sub: Database["public"]["Enums"]["subcategory"]
        }
        Insert: {
          category: string
          chara: string
          id?: number
          sub: Database["public"]["Enums"]["subcategory"]
        }
        Update: {
          category?: string
          chara?: string
          id?: number
          sub?: Database["public"]["Enums"]["subcategory"]
        }
        Relationships: []
      }
      favorite: {
        Row: {
          created_at: string
          id: number
          user_id: string
          wine_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          user_id: string
          wine_id: string
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string
          wine_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorite_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_wine_id_fkey"
            columns: ["wine_id"]
            isOneToOne: false
            referencedRelation: "wines"
            referencedColumns: ["id"]
          }
        ]
      }
      wines: {
        Row: {
          author_id: string
          author_name: string
          category_id: number
          created_at: string
          description: string
          erudition: string | null
          fruity: number
          id: string
          image_src: string
          place: string | null
          price: number
          sober_or_sweet: number
          tags: string | null
          tart: number
          title: string
        }
        Insert: {
          author_id: string
          author_name: string
          category_id: number
          created_at?: string
          description: string
          erudition?: string | null
          fruity: number
          id?: string
          image_src: string
          place?: string | null
          price: number
          sober_or_sweet: number
          tags?: string | null
          tart: number
          title: string
        }
        Update: {
          author_id?: string
          author_name?: string
          category_id?: number
          created_at?: string
          description?: string
          erudition?: string | null
          fruity?: number
          id?: string
          image_src?: string
          place?: string | null
          price?: number
          sober_or_sweet?: number
          tags?: string | null
          tart?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "wines_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wines_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_favorite_wine_small_articles: {
        Args: {
          category_name: string
        }
        Returns: {
          id: string
          image_src: string
          tags: string
          title: string
          categories_chara: string
          favorite_count: number
        }[]
      }
      get_search_wines: {
        Args: {
          search_text: string
        }
        Returns: {
          title: string
          sober_or_sweet: number
          tart: number
          fruity: number
          author_name: string
          id: string
          tags: string
          price: number
          image_src: string
          category_id: number
          category_name: string
          category_chara: string
          category_sub: Database["public"]["Enums"]["subcategory"]
        }[]
      }
      get_wine_category_favorite: {
        Args: {
          category_value: string
        }
        Returns: {
          title: string
          sober_or_sweet: number
          tart: number
          fruity: number
          author_name: string
          id: string
          tags: string
          price: number
          image_src: string
          favorite_count: number
          category_id: number
          category_name: string
          category_chara: string
          category_sub: Database["public"]["Enums"]["subcategory"]
        }[]
      }
      get_wine_my_favorite: {
        Args: {
          client_id: string
        }
        Returns: {
          id: string
          title: string
        }[]
      }
      pgroonga_command:
        | {
            Args: {
              groongacommand: string
            }
            Returns: string
          }
        | {
            Args: {
              groongacommand: string
              arguments: string[]
            }
            Returns: string
          }
      pgroonga_command_escape_value: {
        Args: {
          value: string
        }
        Returns: string
      }
      pgroonga_equal_query_text_array: {
        Args: {
          targets: string[]
          query: string
        }
        Returns: boolean
      }
      pgroonga_equal_query_varchar_array: {
        Args: {
          targets: string[]
          query: string
        }
        Returns: boolean
      }
      pgroonga_equal_text: {
        Args: {
          target: string
          other: string
        }
        Returns: boolean
      }
      pgroonga_equal_text_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_equal_varchar: {
        Args: {
          target: string
          other: string
        }
        Returns: boolean
      }
      pgroonga_equal_varchar_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_escape:
        | {
            Args: {
              value: boolean
            }
            Returns: string
          }
        | {
            Args: {
              value: number
            }
            Returns: string
          }
        | {
            Args: {
              value: number
            }
            Returns: string
          }
        | {
            Args: {
              value: number
            }
            Returns: string
          }
        | {
            Args: {
              value: number
            }
            Returns: string
          }
        | {
            Args: {
              value: number
            }
            Returns: string
          }
        | {
            Args: {
              value: string
            }
            Returns: string
          }
        | {
            Args: {
              value: string
            }
            Returns: string
          }
        | {
            Args: {
              value: string
            }
            Returns: string
          }
        | {
            Args: {
              value: string
              special_characters: string
            }
            Returns: string
          }
      pgroonga_flush: {
        Args: {
          indexname: unknown
        }
        Returns: boolean
      }
      pgroonga_handler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      pgroonga_highlight_html:
        | {
            Args: {
              target: string
              keywords: string[]
            }
            Returns: string
          }
        | {
            Args: {
              target: string
              keywords: string[]
              indexname: unknown
            }
            Returns: string
          }
        | {
            Args: {
              targets: string[]
              keywords: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              targets: string[]
              keywords: string[]
              indexname: unknown
            }
            Returns: unknown
          }
      pgroonga_index_column_name:
        | {
            Args: {
              indexname: unknown
              columnindex: number
            }
            Returns: string
          }
        | {
            Args: {
              indexname: unknown
              columnname: string
            }
            Returns: string
          }
      pgroonga_is_writable: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      pgroonga_match_positions_byte:
        | {
            Args: {
              target: string
              keywords: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              target: string
              keywords: string[]
              indexname: unknown
            }
            Returns: unknown
          }
      pgroonga_match_positions_character:
        | {
            Args: {
              target: string
              keywords: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              target: string
              keywords: string[]
              indexname: unknown
            }
            Returns: unknown
          }
      pgroonga_match_term:
        | {
            Args: {
              target: string[]
              term: string
            }
            Returns: boolean
          }
        | {
            Args: {
              target: string[]
              term: string
            }
            Returns: boolean
          }
        | {
            Args: {
              target: string
              term: string
            }
            Returns: boolean
          }
        | {
            Args: {
              target: string
              term: string
            }
            Returns: boolean
          }
      pgroonga_match_text_array_condition: {
        Args: {
          target: string[]
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_match_text_array_condition_with_scorers: {
        Args: {
          target: string[]
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_match_text_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_match_text_condition_with_scorers: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_match_varchar_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_match_varchar_condition_with_scorers: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_normalize:
        | {
            Args: {
              target: string
            }
            Returns: string
          }
        | {
            Args: {
              target: string
              normalizername: string
            }
            Returns: string
          }
      pgroonga_prefix_varchar_condition: {
        Args: {
          target: string
          conditoin: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_query_escape: {
        Args: {
          query: string
        }
        Returns: string
      }
      pgroonga_query_expand: {
        Args: {
          tablename: unknown
          termcolumnname: string
          synonymscolumnname: string
          query: string
        }
        Returns: string
      }
      pgroonga_query_extract_keywords: {
        Args: {
          query: string
          index_name?: string
        }
        Returns: unknown
      }
      pgroonga_query_text_array_condition: {
        Args: {
          targets: string[]
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_query_text_array_condition_with_scorers: {
        Args: {
          targets: string[]
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_query_text_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_query_text_condition_with_scorers: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_query_varchar_condition: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition"]
        }
        Returns: boolean
      }
      pgroonga_query_varchar_condition_with_scorers: {
        Args: {
          target: string
          condition: Database["public"]["CompositeTypes"]["pgroonga_full_text_search_condition_with_scorers"]
        }
        Returns: boolean
      }
      pgroonga_result_to_jsonb_objects: {
        Args: {
          result: Json
        }
        Returns: Json
      }
      pgroonga_result_to_recordset: {
        Args: {
          result: Json
        }
        Returns: Record<string, unknown>[]
      }
      pgroonga_score:
        | {
            Args: {
              row: Record<string, unknown>
            }
            Returns: number
          }
        | {
            Args: {
              tableoid: unknown
              ctid: unknown
            }
            Returns: number
          }
      pgroonga_set_writable: {
        Args: {
          newwritable: boolean
        }
        Returns: boolean
      }
      pgroonga_snippet_html: {
        Args: {
          target: string
          keywords: string[]
          width?: number
        }
        Returns: unknown
      }
      pgroonga_table_name: {
        Args: {
          indexname: unknown
        }
        Returns: string
      }
      pgroonga_tokenize: {
        Args: {
          target: string
        }
        Returns: unknown
      }
      pgroonga_vacuum: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      pgroonga_wal_apply:
        | {
            Args: Record<PropertyKey, never>
            Returns: number
          }
        | {
            Args: {
              indexname: unknown
            }
            Returns: number
          }
      pgroonga_wal_set_applied_position:
        | {
            Args: Record<PropertyKey, never>
            Returns: boolean
          }
        | {
            Args: {
              block: number
              offset: number
            }
            Returns: boolean
          }
        | {
            Args: {
              indexname: unknown
            }
            Returns: boolean
          }
        | {
            Args: {
              indexname: unknown
              block: number
              offset: number
            }
            Returns: boolean
          }
      pgroonga_wal_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          name: string
          oid: unknown
          current_block: number
          current_offset: number
          current_size: number
          last_block: number
          last_offset: number
          last_size: number
        }[]
      }
      pgroonga_wal_truncate:
        | {
            Args: Record<PropertyKey, never>
            Returns: number
          }
        | {
            Args: {
              indexname: unknown
            }
            Returns: number
          }
    }
    Enums: {
      subcategory: "red" | "white" | "interim" | "other"
    }
    CompositeTypes: {
      pgroonga_full_text_search_condition: {
        query: string
        weigths: unknown
        indexname: string
      }
      pgroonga_full_text_search_condition_with_scorers: {
        query: string
        weigths: unknown
        scorers: unknown
        indexname: string
      }
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
