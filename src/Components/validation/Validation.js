import * as Yup from "yup";

export const signUpSchema = Yup.object({
  summary: Yup.string().min(2).max(25).required("Please enter the Summary"),
  description:Yup.string().min(2).max(25).required("Please enter the Summary"),
  title: Yup.string().min(2).max(25).required("Please enter the Title"),
  email: Yup.string().email().required("Please enter your Email"),
  name: Yup.string().min(2).max(25).required("Please enter the User Name"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirmPassword: Yup.string()
    .required("Please enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
