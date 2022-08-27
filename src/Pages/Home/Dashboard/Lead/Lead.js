import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Table from './Table';

const Lead = () => {
    return (
        <div className='py-8 bg-base-100'>
            <div className='px-12 pb-5'>
            <div className='border p-3 rounded-xl w-full'>
            <div className='flex justify-between items-center'>
            <h2>All (5) | Approved (3) | Pending (2)</h2>
            <button style={{backgroundColor:"#2EACAA"}} className='btn text-white border-none normal-case'>Post a Property
            <FontAwesomeIcon className='p-2' icon={faHome}></FontAwesomeIcon>
            </button>
            </div>
            </div>
            </div>
            <div className='px-12'>
            <Table></Table>
            </div>
        </div>
    );
};

export default Lead;