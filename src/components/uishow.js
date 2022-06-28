import React, { useState, useEffect } from 'react';
import './style.css';
 
function UIShow() {
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
        <table>
            <thead className='header' >
            <tr>
                    <td>Budget Type</td>
                    <td>Distributor</td>
                    <td colSpan={3}>First Quarter</td>
                    <td colSpan={3}>Second Quarter</td>
                    <td colSpan={3}>Third Quarter</td>
                    <td colSpan={3}>Forth Quarter</td>
                </tr>
                <tr>
                    <td>Promo</td>
                    <td className='borderremove' style={{backgroundColor:" #1f1641"}}>           </td>
                    <td >Jan</td>
                    <td >Feb</td>
                    <td >Mar</td>
                    <td >Apr</td>
                    <td >May</td>
                    <td >Jun</td>
                    <td >July</td>
                    <td >Aug</td>
                    <td >Sep</td>
                    <td >Oct</td>
                    <td >Nov</td>
                    <td >Dec</td>
                </tr>
                <tr>
                    <td className='borderremove' style={{backgroundColor:"#1f1641"}}>     </td>
                    <td className='borderremove' style={{backgroundColor:"#1f1641"}}>           </td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                    <td >0000</td>
                </tr>
            </thead>
            <hr/>
            <tbody>
            {data.map((item, i) => (
                    <tr key={i}>
                        <td >On Invoice</td>
                    <td className='borderremove' style={{backgroundColor:'#1f1641'}}> </td>
                    <td className='sumTotal'></td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    </tr>
                ))}
                <tr>
                <td rowspan={5} className='borderremove' style={{backgroundColor:'#1f1641'}}></td>
                    <td>AGC</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>NPD</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>IBL</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>SHAN</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>NIT</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                
            </tbody>
            <hr/>
            <tbody>
            <tr>
                    <td>Whole Sale</td>
                    <td className='borderremove' style={{backgroundColor:"#1f1641"}}> </td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                </tr>
                <tr>
                <td rowspan={5} className='borderremove' style={{backgroundColor:'#1f1641'}}></td>
                    <td>NPD</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>IBL</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>SHAN</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>NIT</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
            </tbody>
            <hr/>
            <tbody>
            <tr>
                    
                    <td>NRA</td>
                    <td className='borderremove' style={{backgroundColor:" #1f1641"}}> </td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                    <td  className='sumTotal'>379</td>
                </tr>
                <tr>
                <td rowspan={5} className='borderremove' style={{backgroundColor:'#1f1641'}}></td>
                    <td>NPD</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>IBL</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>SHAN</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>NIT</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
            </tbody>
 </table>
    );
}
 
export default UIShow;