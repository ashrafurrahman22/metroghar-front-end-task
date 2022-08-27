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
        <th className='font-normal'>#1002</th>
        <td>Srishti  Launch Code    
     Blockbuster Living</td>
        <td>Villa</td>
        <td>Ready To Move</td>
        <td><button className='bg-yellow-600 p-1 rounded text-white '>Approved</button></td>
        <td>100</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
      <tr>
        <th className='font-normal'>#1003</th>
        <td>Lodha Codename Premier</td>
        <td>Residential</td>
        <td>Under Construction</td>
        <td><button className='bg-yellow-500 p-1 rounded text-white '>Pending</button></td>
        <td>30</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
      <tr>
        <th className='font-normal'>#1004</th>
        <td>Lodha Codename Premier</td>
        <td>Residential</td>
        <td>Under Construction</td>
        <td><button className='bg-yellow-600 p-1 rounded text-white '>Approved</button></td>
        <td>0</td>
        <td>
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </td>
      </tr>
      <tr>
        <th className='font-normal'>#1005</th>
        <td>Lodha Codename Premier</td>
        <td>Commercial</td>
        <td>New Launch</td>
        <td><button className='bg-yellow-500 p-1 rounded text-white '>pending</button></td>
        <td>50</td>
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