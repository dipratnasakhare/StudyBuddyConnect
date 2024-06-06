import axios from "axios";
import {  GET_USER_COUNT } from "./AdminTypes";


export const googleAuthenticate = () => async (dispatch) => {
  // const toast = useToast()
  try {
    let res = await axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}/users`);
    const data = res.data.count


    // dispatch({ type: GET_USER_COUNT, payload: data })
  } catch (err) {
    console.log(err);
    // toast({
    //   position: "top",
    //   title: "Something is wrong please try later",
    //   status: "error",
    //   duration: 2000,
    //   isClosable: true,
    // });
  }
}
