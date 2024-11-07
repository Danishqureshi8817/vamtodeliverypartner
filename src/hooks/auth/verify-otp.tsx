import { useMutation } from '@tanstack/react-query';
import { errorToast } from '../../utils/helperFunctions';
import authService from '../../services/auth-service';


function useVerifyOtp() {

  return useMutation({
    mutationFn: authService.verifyOtp,
    onError: (error) => {
      console.log(error, 'vrotp ERR');
      errorToast('Something went wrong, please try again later')

    },
  });
}

export default useVerifyOtp;