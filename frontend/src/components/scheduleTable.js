import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import '../App.css';



function ScheduleTable(){
 
    return(
    <>
    <div className="d-flex justify-content-center">
    <Table className="ScheduleTable" size="md">
            <thead>
                <tr className="text-center">
                    <th></th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THR</th>
                    <th>FRI</th>
                </tr>
            </thead>
            <tbody>
                
                {Array.from({length:21}).map((_,index)=>(
                <tr key={9.00+0.5*index} className={'A'+index}>
                    <td>{9.00+0.5*index}</td>
                    <td id={'B'+0}></td>
                    <td id={'B'+1}></td>
                    <td id={'B'+2}></td>
                    <td id={'B'+3}></td>
                    <td id={'B'+4}></td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
        


    </>
    )
}

export default ScheduleTable;