const checkPasswordMatch=(pass1,pass2)=>(pass1===pass2);
const checkPasswordExp = (pass1) => {
    const regEx = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    return regEx.test(pass1);
  };

export {checkPasswordMatch, checkPasswordExp}
