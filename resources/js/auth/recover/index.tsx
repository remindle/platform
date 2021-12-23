import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

function Recover() {
    return (
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
            <span className="inline-block mb-8 text-xs text-secondary font-semibold">
                Forgot password
            </span>
            <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
                Recover your account
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
                <Button className="mb-8">Recover</Button>
            </form>
            <p className="text-sm text-gray-500">
                Please enter your email adres for account recovery <br />
                (also known as password reset) <br />
                We will be sending an email containing a recovery link to the
                email adres.
            </p>
        </div>
    );
}

export { Recover };
