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
                <div className="bg min-h-full flex items-center justify-center py-10 px-4 sm:px-4 lg:px-6">
                    <div className="max-w-sm w-full space-y-8">
                    <div>
                        <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connectez-vous</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm space-y-1">
                        <div>
                            <label htmlFor="email-address" className='text-gray-500 text-sm'>
                            Adresse email
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border-red-500 appearance-none rounded-none relative block w-full rounded-b-md px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 md:text-md"
                            />
                            {errors.email && touched.email && (
                                <div className="text-red-500 text-sm">{errors.email}</div>
                                )}
                        </div>
                        <div>
                            <label htmlFor="password" className='text-gray-500 text-sm'>
                            Mot de passe
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 md:text-md"
                            />
                            {errors.password && touched.password && (
                                <div className="text-red-500 text-sm">{errors.password}</div>
                                )}
                        </div>
                        </div>

                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                            </a>
                        </div>
                        </div>

                        <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Sign in
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            );
        }}
    </Formik>
      
    
  )
}