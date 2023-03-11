import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import BooksList from '@/Modules/BooksList/BooksList';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Книги</h2>}
            button={<a href="/create_book"><PrimaryButton>Создать</PrimaryButton></a>}
        >
            <Head title="Dashboard" />

            <div className="py-12 px-20">
                    <BooksList data={props.books}></BooksList>
            </div>
        </AuthenticatedLayout>
    );
}
