import { User } from "../model";

export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

export interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{
    getUsers: async (parent, args, { model }, info ) => {
      try{
        const users = await User.findAll();
        return users
      }
      catch(error){
        console.log(error)
      }
    }
}