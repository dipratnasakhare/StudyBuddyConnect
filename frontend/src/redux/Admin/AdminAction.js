import axios from "axios";
import {  GET_USER_COUNT } from "./AdminTypes";

const backendUrl = 'http://localhost:4000'

export const googleAuthenticate = (data, user, toast) => async (dispatch) => {

  console.log(data, 'user')
  console.log(user.displayName, 'user')
  console.log(user.email, 'user')

  const userData = {data, userName:user.displayName, email:user.email}

  try {
    let res = await axios.post(`${backendUrl}/user/auth`, userData);
    console.log(res)
    toast({
      position: "top",
      title: res.data.msg,
      status: res.data.status,
      duration: 2000,
      isClosable: true,
    });
  } catch (err) {
    toast({
      position: "top",
      title: "Something is wrong please try later",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }


}
