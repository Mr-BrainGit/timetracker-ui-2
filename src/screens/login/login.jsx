import { LockClosedIcon } from '@heroicons/react/solid'
import { Formik } from 'formik';
import * as Yup from "yup"; // used when validating with a pre-built solution
import './login.css';

export default function Login() {
    
  return (
    
    <Formik
        validationSchema={Yup.object().shape({
            email: Yup.string()
            .email()
            .required("Champs requis !"),
            password: Yup.string()
            .required("Aucun mot de passe n'a été fourni !")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
        }, 500);
        }}
    >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
        } = props;

            return (
                <div className='grid h-screen place-items-center '>
                     <div class=" login bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
                        <form class="space-y-6" action="#">
                            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Connectez-vous</h5>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mot de passe</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            
                        </form>
                    </div>
                </div>
               

            );
        }}
    </Formik>
      
    
  )
}