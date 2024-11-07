import { fetcher } from "../utils/fetcher";

class AuthService {
  queryKeys = {
    userLogin: 'userLogin',
    userRegister: 'userRegister',
    verifyOtp: 'verifyOtp',
  };

  userLogin = async (data: any) => {
    return fetcher({
      url: '/driver/login',
      method: 'POST',
      data
    });
  }


  userRegister = async (data: any) => {
    return fetcher({
      url: '/driver/register',
      method: 'POST',
      data
    });
  }
  

  verifyOtp = async (data: any) => {
    return fetcher({
      url: '/driver/verify',
      method: 'POST',
      data
    });
  }

  // getUserInfo = async (data:any)  : Promise<AxiosResponse<GET_USER_INFO>> => {
  //   let device_no = await uniqueId()
  //   let version = await getVersion()
  //   const accessToken = tokenStorage.getString('accessToken')

  //   const payload = {
  //     platform: Platform.OS,
  //     version: version,
  //     ts: Date.now(),
  //     channel: channel,
  //     device_no: device_no,
  //     token: accessToken,
  //   }
  //   return fetcher({
  //     url: '/user/info',
  //     method: 'POST',
  //     data : payload
  //   });
  // }


}

export default new AuthService();