import CartList from '@/Modules/CartList/CartList';
import { Link, Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Contact from '@/Modules/Contact/Contact';

export default function Cart(props) {




    return (
        <>
            <Head title="Cart" />
            <div className="relative pt-20 min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
               
                <Layout {...props}>
                    <CartList data={props?.books}></CartList>
                </Layout>
          

            </div>

        </>
    );
}
