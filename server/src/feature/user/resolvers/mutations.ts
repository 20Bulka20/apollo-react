import { User } from '../model';
import { UserInputError, AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken'

const createToken = async (user: any, secret: any, expiresIn: any) => {
  const { id, email, userName } = user;
  return await jwt.sign({ id, email, userName }, secret, {
    expiresIn,
  });
};

export type ResolverFn = (parent: any, args: any, ctx: any, info: any) => Promise<any>;

export interface IResolverMap {
  [field: string]: ResolverFn;
}

export default <IResolverMap>{

  signUp: async (parent, args, { model }, info) => {
    try {
    const { userName, userLastName, email } = args;
    const user = await User.create({
      userName,
      userLastName,
      email
    })
    return { token: createToken(user, 'secret', '30m')};
  } catch(e){
        console.log('Error happened')
  }
  },
  signIn: async (
    parent,
    { userName, email },
    { models, secret },
  ) => {
    const user = await User.findOne({ where: { userName: userName }});

    if (!user) {
      throw new UserInputError(
        'No user found with this login credentials.',
      );
    }
    const myUser = user.get()
    if (email !== myUser.email) {
      throw new AuthenticationError('Invalid email.');
    }
    return { token: createToken(myUser, 'secret', '30m')};
  },
}