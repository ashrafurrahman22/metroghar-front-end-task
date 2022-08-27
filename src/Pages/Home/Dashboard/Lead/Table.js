import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Table = () => {
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th className='normal-case'>Id</th>
        <th className='normal-case'>Property Name</th>
        <th className='normal-case'>Property Type</th>
        <th className='normal-case'>Prossession Status</th>
        <th className='normal-case'>Status</th>
        <th className='normal-case'>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </th>
        <th className='normal-case'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th className='font-normal'>#1001</th>
        <td>Lodha Codename Premier</td>
        <td>Residential</td>
        <td>Under Construction</td>
        <td><button className='bg-yellow-600 p-1 rounded text-white '>Approved</button></td>
        <td>3</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
      <tr>
        <th className='font-normal'>#1001</th>
        <td>Lodha Codename Premier</td>
        <td>Residential</td>
        <td>Under Construction</td>
        <td><button className='bg-yellow-600 p-1 rounded text-white '>Approved</button></td>
        <td>3</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
      <tr>
        <th className='font-normal'>#1001</th>
        <td>Lodha Codename Premier</td>
        <td>Residential</td>
        <td>Under Construction</td>
        <td><button className='bg-yellow-600 p-1 rounded text-white '>Approved</button></td>
        <td>3</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Table;