import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

function Register() {
    return (
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
            <span className="inline-block mb-8 text-xs text-secondary font-semibold">
                Sign Up
            </span>
            <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
                Join our community
            </h3>
            <form action="#">
                <div className="flex flex-wrap -mx-2">
                    <div className="relative w-full lg:w-1/2 px-2 flex flex-wrap mb-6">
                        <Input
                            className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                            type="text"
                            placeholder="John"
                        />
                        <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                            First name
                        </span>
                    </div>
                    <div className="relative w-full lg:w-1/2 px-2 flex flex-wrap mb-6">
                        <Input
                            className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                            type="text"
                            placeholder="Doe"
                        />
                        <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                            Last name
                        </span>
                    </div>
                </div>
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
                <label className="inline-flex mb-5 text-left">
                    <input
                        className="mr-2"
                        type="checkbox"
                        name="terms"
                        value="1"
                    />
                    <span className="-mt-1 inline-block text-sm text-gray-500">
                        By signing up, you agree to our{" "}
                        <Link
                            to="/terms"
                            className="text-primary hover:underline"
                        >
                            Terms &amp; Agreements
                        </Link>
                        .
                    </span>
                </label>
                <Button className="mb-8">Get started</Button>
            </form>
            <p className="text-sm text-gray-500">
                <span>Already have an account? </span>
                <Link
                    to="/login"
                    className="text-primary font-semibold hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
}

export { Register };
