import {react , useContext} from "react";
import {useNavigate} from 'react-router-dom'
import AxiosNote from "../../AxiosNote";
import { MainContext } from "../../context/main-context";
import { useFormik } from "formik";
import * as Yup from 'yup'
import './Account.css'

const Account = () => {

    const mainContext = useContext(MainContext)
    const navigate  = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .label('username')
                .min(5, 'حداقل تعداد کاراکتر 5 باید باشد')
                .max(24, 'حداکثر تعداد کاراکتر 24 باید باشد')
                .required('اجباری می باشد'),
            password: Yup.string()
                .min(8, 'حداقل تعداد کاراکتر 8 باید باشد')
                .max(32, 'حداکثر تعداد کاراکتر 32 باید باشد')
                .required('اجباری می باشد')
        }),
        onSubmit: function (values) {
            AxiosNote.get('user.json')
            .then((response) => {
                if (response.data) {
                    const data = response.data;
                    if(data.username !== values.username || data.password !== values.password){
                        alert('نام کاربری یا کلمه عبور اشتباه است')
                    }
                    else{
                        mainContext.onAuthentication(values.username)
                        return navigate('/')
                    }
                }
            })
        }
    })


    return (
        <div className="login">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>نام کاربری:</label>
                    <input name="username" type='text' className={`${formik.touched.username && formik.errors.username ? 'box-error' : ''}`}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                    {formik.touched.username && formik.errors.username && (
                        <span className='error-message'>{formik.errors.username}</span>
                    )}
                </div>
                <div>
                    <label>کلمه عبور:</label>
                    <input name="password" type='password' className={`${formik.touched.password && formik.errors.password ? 'box-error' : ''}`}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                    {formik.touched.password && formik.errors.password && (
                        <span className='error-message'>{formik.errors.password}</span>
                    )}
                </div>

                <div>
                    <button>ورود</button>
                </div>
            </form>
        </div>
    )
}
export default Account