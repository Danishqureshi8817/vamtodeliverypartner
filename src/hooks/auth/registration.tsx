import { useMutation } from '@tanstack/react-query';
import { errorToast } from '../../utils/helperFunctions';
import authService from '../../services/auth-service';


function useUserRegister() {

  return useMutation({
    mutationFn: authService.userRegister,
    onError: (error) => {
      console.log(error, 'regis ERR');
      errorToast('Something went wrong, please try again later')

    },
  });
}

export default useUserRegister;