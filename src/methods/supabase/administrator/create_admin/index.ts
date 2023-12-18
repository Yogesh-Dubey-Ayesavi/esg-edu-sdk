import { SupabaseClient } from "@supabase/supabase-js";
import { UserRole } from "../../../../models/enumerations/user_role";

export default async function changeAdminRole(supabase:SupabaseClient, userId : string,role:UserRole):Promise<void> {
   await supabase.from("users").update({"role":role}).eq('id',userId);
} 