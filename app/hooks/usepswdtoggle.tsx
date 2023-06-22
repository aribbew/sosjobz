import { useState } from "react"


export const useToggleConfirmPasswordVisibility = () => {
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
  const [rightIconConfirm, setRightIconConfirm] = useState('eye');

  const handleConfirmPasswordVisibility = () => {
    if (rightIconConfirm === 'eye') {
      setRightIconConfirm('eye-off');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (rightIconConfirm === 'eye-off') {
      setRightIconConfirm('eye');
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  };

  return {
    handleConfirmPasswordVisibility,
    confirmPasswordVisibility,
    rightIconConfirm,
    };

}



export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
  };
  
  
  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
    };
  };