import './index.css';

import { Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';

import Button from '../components/button/Button';
import Header from '../components/Header';
import Input from '../components/input/Input';
import { Login } from './login';
import { NoMatch } from './no-match';
import { Recover } from './recover';
import { Register } from './register';
import { Terms } from './terms';

export default function InboxApp() {
    return (
        <Routes>
            {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work. */}
            <Route path="*" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="terms" element={<Terms />} />
                <Route path="recover" element={<Recover />} />
                <Route path="*" element={<Navigate to="login" />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}

function Layout() {
    return (
        <div className="flex flex-col min-h-screen text-center bg-white dark:bg-tetriary-dark dark:text-white">
            <Header />
            <section className="flex grow flex-col justify-center">
                <img
                    className="hidden lg:block absolute bottom-0 left-0 mb-32 w-1/5"
                    src="/backgrounds/primary-circle-fade.svg"
                    alt="primary-circle"
                />
                <img
                    className="hidden lg:block absolute top-0 right-0 mt-20 w-1/6"
                    src="/backgrounds/secondary-circle-fade.svg"
                    alt="secondary-circle"
                />
                <div className="container px-4 mx-auto">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}

function NotFound({ is404 = true }: { is404: boolean }) {
    return (
        <>
            <span className="text-xs font-semibold text-gray-500 uppercase">
                {is404 ? "404" : "500"}
            </span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
                {is404 ? "Page Not Found" : "Internal Server Error"}
            </h2>
            <p className="mb-12 text-xl text-gray-500">
                {is404
                    ? "Sorry! We are unable to find the page you are looking for"
                    : "Something went wrong."}
            </p>
            <Link to="/login" className="inline-block">
                <Button>Go back to Sign in</Button>
            </Link>
        </>
    );
}
