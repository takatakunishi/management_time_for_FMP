import Axios from "../Axios";
import { UserModel } from "../Model";

export type GetUserParam = {
  id: string
}

export async function getUserApi({ id }: GetUserParam) {
  try {
    // return await Axios.get<UserModel>('/getMethod', {
    //   params: {
    //     id
    //   }
    // })
    return await Axios.get<UserModel>('/getMethod')
  } catch (e) {
    throw new Error(e)
  }
};