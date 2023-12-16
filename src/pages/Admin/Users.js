import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
export const Users = () => {
  return (
    <Layout title="Dashboard-All Users">
      
        <div className='row '>
        <h2>Admin Panel</h2>
          <div className='col-md-3'>
            <AdminMenu/>
          </div>
          <div className='col-md-9'>
            <h1>All users</h1>
          </div>
        </div>
  
    </Layout>
    
  )
}

export default Users