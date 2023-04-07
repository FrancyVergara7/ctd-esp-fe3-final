import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState({});

useEffect(() => {
  const getDetail = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setDetail(data);
  };
  getDetail();
}, [id]);

  return (
    <>
      <Navbar />
      <h1>Detail Dentist id {id}</h1>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{detail.name}</td>
      <td>{detail.email}</td>
      <td>{detail.phone}</td>
      <td>{detail.website}</td>
    </tr>
  </tbody>
</table>

      <Footer />
    </>
  )
}

export default Detail;


