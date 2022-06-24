import React, { useState, useEffect } from 'react';
import './style.css';
 
function Table() {
 
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
                <tr>
                    <td rowspan={6}>On Invoice</td>
                    <td className='borderremove' style={{backgroundColor:'#1f1641'}}> </td>
                    <td className='sumTotal'>379</td>
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
                    <td rowspan={6}>Whole Sale</td>
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
                    
                    <td rowspan={6}>NRA</td>
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
 
export default Table;