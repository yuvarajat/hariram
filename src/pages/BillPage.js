import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ToContent from '../components/ToContent';
import Table from '../components/Table';

const BillPage = ({billDetails, rows}) => {
  console.log("rows: ",rows)
  return (
    <div className="a4-page">
    <Header /> <br/>
    <hr style={{ borderTop: '2px solid black' }} /> <br/>
    {/* Other content can go here */}
    <SubHeader billDetails={billDetails}/> <br/>
    <ToContent/> <br/>
    <Table billDetails={billDetails} rows={rows} /> <br/> <br/>
    <div style={{textAlign: 'end', paddingRight: '80px'}}>M. Hariram</div>
    </div>
  );
}

export default BillPage;