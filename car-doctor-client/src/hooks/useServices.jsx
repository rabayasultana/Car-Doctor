import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-roan-one.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

        // axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        //     .then(res => setServices(res.data))
    }, [])

    return services;
};

export default useServices;