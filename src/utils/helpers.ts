import { User } from "../domain/users/types";

export const isUserAddedToFavorites = (users: User[], userId: number )=>{
   const user = users?.find((user)=>user.id === userId);
   if(user){
    return true;
   }
   return false;
}