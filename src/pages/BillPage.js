import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import ToContent from '../components/ToContent';
import Table from '../components/Table';

const BillPage = () => {

  const printPage = () => {
    window.print();
  };

  // const printToPDF = () => {

  // };

  return (
    <div className="a4-page">
      <Header /> <br/>
      <hr style={{ borderTop: '2px solid black' }} /> <br/>
      {/* Other content can go here */}
      <SubHeader /> <br/>
      <ToContent /> <br/>
      <Table /> <br/> <br/> <br/> <br/> <br/>
      <div style={{textAlign: 'end', paddingRight: '80px'}}>M. Hariram</div>
      <div class="print-button">
        {/* <button id="downloadButton" type="button" onClick={printToPDF}>Download</button> */}
        <button id="printButton" type="button" onClick={printPage}>Print</button>
      </div>
    </div>
  );
}

export default BillPage;