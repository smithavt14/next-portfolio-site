import React from 'react';
import Head from 'next/head';

const PageHead = () => {
    return (
        <Head>
            <title>{"Alex's Site"}</title>
            <meta name="description" content="A website created by Alex." />
            <link rel="icon" href="/favicon.png" />
        </Head>
    );
}

export default PageHead; 