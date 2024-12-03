import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ToContent from '../components/ToContent';
import Table from '../components/Table';

const BillPage =() => {
  return (
    <div className="a4-page">
    <Header /> <br/>
    <hr style={{ borderTop: '2px solid black' }} /> <br/>
    {/* Other content can go here */}
    <SubHeader/> <br/>
    <ToContent/> <br/>
    <Table/> <br/> <br/>
    <div style={{textAlign: 'end', paddingRight: '80px'}}>M. Hariram</div>
    </div>
  );
}

export default BillPage;