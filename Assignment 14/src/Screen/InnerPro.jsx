



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const InnerPro = () => {
    let { id } = useParams();
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [id]);

    let fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;
    if (!data) return <div>No data found</div>;

    return (
        <>
        <Navbar/>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', marginTop : "100px" }}>
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
            <p>{data.description}</p>
            <div>
                <strong>Rating:</strong> {data.rating.rate} ({data.rating.count} reviews)
            </div>
            <div>
                <strong>Price:</strong> ${data.price}
            </div>
        </div>
        </>
    );
};

export default InnerPro;

