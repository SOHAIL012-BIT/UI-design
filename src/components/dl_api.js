import './style.css';
import React from 'react';
import { useState, useEffect } from "react";

function DlApi() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(
          `https://devapp.digitallandscape.com.pk:1009/api/BudgetManagement/GetBudgetSummary`,

          {
            method: "POST",
          }
        );
        const userreq = await result.json();
        debugger
        setSearchTerm(userreq.data);
        console.log(userreq);

      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    
    fetchData();
  }, []);
  return (
    <>
    <tbody>
        <tr>
            {/* <th>Budget Name</th>
            <th>Budget Bucket Name</th>
            <th>Distributor Name</th>
            <th>Quater Name</th> */}
            <th>Jan</th>
            {/* <th>Year</th>
            <th>Budget Allocated Amount</th>
            <th>Remaining Amount</th> */}
        </tr>
        {searchTerm.length > 0 && searchTerm.map((userreq, i) => (
            <tr key={i}>
                <td>{userreq.budgetName}</td>
                <td>{userreq.budgetBucketName}</td>
                <td>{userreq.distributorName}</td>
                <td>{userreq.quarterName}</td>
                <td>{userreq.month}</td>
                <td>{userreq.year}</td>
                <td>{userreq.allocatedBudgetAmount}</td>
                <td>{userreq.remainingBudgetAmount}</td>
                
            </tr>
        ))}
    </tbody>

</>
  );
}

export default DlApi;
