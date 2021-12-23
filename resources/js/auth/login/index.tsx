import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

function Login() {
    return (
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
            <span className="inline-block mb-8 text-xs text-secondary font-semibold">
                Sign In
            </span>
            <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
                Log in to your account
            </h3>
            <form action="#">
                <div className="relative flex flex-wrap mb-6">
                    <Input
                        className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                        type="email"
                        placeholder="e.g hello@remindle.io"
                    />
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                        Email address
                    </span>
                </div>
                <Button className="mb-8">Sign in</Button>
            </form>
            <p className="text-sm text-gray-500">
                <span>Don't have an account? </span>
                <Link
                    to="/register"
                    className="text-primary font-semibold hover:underline"
                >
                    Sign up
                </Link>
                <br />
                or
                <br />
                <Link
                    to="/recover"
                    className="text-primary font-semibold hover:underline"
                >
                    Forgot password?
                </Link>
            </p>
        </div>
    );
}

export { Login };
