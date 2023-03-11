import React from 'react'
import s from './Contact.module.css'
import axios from 'axios';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

const Contact = () => {


    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
        message: '',
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password');
    //     };
    // }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {

        let form_data = new FormData();

        for ( let key in data ) {
            form_data.append(key, data[key]);
        }

        console.log(form_data)

        e.preventDefault();

        axios.post('/api/send/email', form_data).then(res => {
            console.log(res)
        })

        // post(route('login'));
    };


  return (
    <div className={s.contact}>
        <h1>Связаться с нами</h1>
        <form onSubmit={submit}>
            <div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                
                <div>
                    <InputLabel htmlFor="name" value="Имя" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                
                <div>
                    <InputLabel htmlFor="message" value="Сообщение" />

                    <TextInput
                        id="message"
                        type="text"
                        name="message"
                        value={data.message}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
            </div>
            
            <PrimaryButton disabled={processing}>
                Отправить
            </PrimaryButton>
        </form>
    </div>
  )
}

export default Contact