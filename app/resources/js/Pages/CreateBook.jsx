import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BooksList from '@/Modules/BooksList/BooksList';

import axios from 'axios';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        author: '',
        price: 0,
    });

    const [image, setImage] = useState()

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
        
        form_data.append('image', image);

        e.preventDefault();

        axios.post('/api/create/book', form_data).then(res => {
            console.log(res)
        })

        
    };




    return (
        <form onSubmit={submit}>
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Создать книгу</h2>}
            button={<a href="/create_book"><PrimaryButton>Создать</PrimaryButton></a>}
            >
                <Head title="Создать книгу" />

                <div className="py-12 px-20">
                    <div className='mb-4'>
                        <InputLabel htmlFor="title" value="Название" />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    
                    <div className='mb-4'>
                        <InputLabel htmlFor="author" value="Автор" />

                        <TextInput
                            id="author"
                            type="text"
                            name="author"
                            value={data.author}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.author} className="mt-2" />
                    </div>
                    
                    <div className='mb-4'>
                        <InputLabel htmlFor="price" value="Цена" />

                        <TextInput
                            id="price"
                            type="number"
                            name="price"
                            value={data.price}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.price} className="mt-2" />
                    </div>

                    
                    <div className='mb-4'>
                        <InputLabel htmlFor="image" value="Изображение" />

                        <TextInput
                            id="image"
                            type="file"
                            name="image"
                            value={data.image}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) =>
                                setImage(e.target.files[0])
                            }
                        />

                        <InputError message={errors.image} className="mt-2" />
                    </div>

                </div>
            </AuthenticatedLayout>
        </form>
    );
}
