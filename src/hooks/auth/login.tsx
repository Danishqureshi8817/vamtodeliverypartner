import { useMutation } from '@tanstack/react-query';
import { errorToast } from '../../utils/helperFunctions';
import authService from '../../services/auth-service';


function useUserLogin() {

  return useMutation({
    mutationFn: authService.userLogin,
    onError: (error) => {
      console.log(error, 'login ERR');
      errorToast('Something went wrong, please try again later')

    },
  });
}

export default useUserLogin;