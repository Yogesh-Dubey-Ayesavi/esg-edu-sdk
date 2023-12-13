import { SupabaseClient } from "@supabase/supabase-js";
import signIn from "../../authentication/sign_in";


export default async function acceptInvitation(supabase:SupabaseClient,accessToken:string){
      if(  (await supabase.rpc("validate_token",{
            "access_token":accessToken
        })).data){
          return await signIn(supabase,(a,b)=>{});
        }else {
            throw Error("Access Token either expired, Either Wrong");
        }
}

