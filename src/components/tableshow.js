import React, { useState, useEffect } from 'react';
import './style.css';
 
function TableShow() {
    const [data, getData] = useState([])
    const URL = 'http://172.107.33.108:1009/api/BudgetManagement/GetBudgetSummary?year=2022';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL,{
            method:"POST"
        })
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
 
    return (
        <>
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                         <td>{item.data.budgetName}</td>
                <td>{item.data.budgetBucketName}</td>
                <td>{item.data.distributorName}</td>
                <td>{item.data.quarterName}</td>
                <td>{item.data.month}</td>
                <td>{item.data.year}</td>
                <td>{item.data.allocatedBudgetAmount}</td>
                <td>{item.data.remainingBudgetAmount}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableShow;