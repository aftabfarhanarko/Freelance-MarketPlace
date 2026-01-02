import React from 'react';
import JobNotFound from '../components/JobNotFound';

const ErrorPages = () => {
    return (
        <div className='min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-900'>
             <JobNotFound type="404" />
        </div>
    );
};

export default ErrorPages;