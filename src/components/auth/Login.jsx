import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';

import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const Login = () => {

    let history = useHistory()
    
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            password: '',
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es valido').required('El email es necesario'),
            password: Yup.string().required('La contraseña es necesaria').min(6, 'La contraseña debe de tener al menos 6 caracteres'),
        }),
        onSubmit: formValues => {
            console.log(formValues) 
            dispatch(startLogin(formValues.email, formValues.password))
        }
    })

    return (
        <>
            <div className="auth__main">
                <Grid 
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"   
                >
                    <div className="auth__main-form">
                        <h2 className="auth__title">
                            Iniciar Sesion
                        </h2>
                        <form
                            noValidate 
                            onSubmit={formik.handleSubmit}
                        >
                            <TextField value={formik.values.email} onChange={formik.handleChange} helperText={formik.errors.email} error={formik.errors.email && formik.touched.email} name="email" label="Email" className="w-100" />
                            <TextField value={formik.values.password} onChange={formik.handleChange} helperText={formik.errors.password} error={formik.errors.password && formik.touched.password} name="password" label="Password" className="w-100" />
                            <Button type="submit" variant="contained" color="primary" className="w-100 auth__form-button">
                                Entrar
                            </Button>
                        </form>
                    </div>
                </Grid>
            </div>
        </>
    )
}