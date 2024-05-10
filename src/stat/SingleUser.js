import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleUser = () => {

  const {id}= useParams()
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')

    if(responce?.status === 200){
      const FindUser = responce?.data?.find((user) => user?.id == id);
      setUser(FindUser)
    };
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className='d-flex justify-content-start align-items-center'>
              <h3>{user?.name}</h3>
              <h5 className='ms-3'> | {user?.username}</h5>
          </div>
          <div>
            <span>E-mail:</span> <span className='fw-bold'>"{user?.email}</span>
          </div>
          <div>
            <span>Phone:</span> <span className='fw-bold'>"{user?.phonr}</span>
          </div>

          <div>
            <span className='d-block'>Address :</span>
            <address className='fw-bold'>{user?.address?.street} , {user?.address?.suite},
                {user?.address?.city},{user?.address?.zipcode}</address>
          </div>

          <div><span>Website :</span> <span className='fw-bold'>{user?.website}</span></div>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
