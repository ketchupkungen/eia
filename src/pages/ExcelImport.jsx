import React, { Component } from 'react';
import '../css/ExcelImport.scss';

// Components
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class ExcelImport extends Component {
	render() {
		return (
			<div>
				<Navbar />

				<div className="container-fluid" style={{marginTop:'150px'}}>
					<h2>Import CSV File Data into MySQL Database</h2>
					<h4>ATM using PHP & Ajax</h4>

					<br /><br />

  
          <form id="upload_csv" method="post" encType="multipart/form-data">
          	<div className="col-md-3">  
            	<br />  
            	<label>Add More Data</label>  
          	</div>
          	<div className="col-md-4">  
            	<input type="file" name="employee_file" style={{marginTop:'15px'}} />  
            </div>  
            <div className="col-md-5">  
              <input type="submit" name="upload" id="upload" value="Upload" style={{marginTop:'15px'}} className="btn btn-info" />  
            </div>  
            <div style={{clear:'both'}}></div> 
          </form>

          <br /><br /><br />

          <div className="table-responsive" id="employee_table">  
           	<table className="table table-bordered">  
	           	<tbody>
		           	<tr>  
		              <th width="5%">Radetiketter</th>  
		              <th width="5%">000-0000</th>  
		              <th width="5%">510-0000</th>  
		              <th width="5%">510-5001</th>  
		              <th width="5%">510-5002</th>  
		              <th width="5%">510-5003</th>
		              <th width="5%">510-5004</th>
		              <th width="5%">510-5005</th>
		              <th width="5%">510-5006</th>
		              <th width="5%">510-5007</th>
		              <th width="5%">510-5008</th>
		              <th width="5%">510-5009</th>
		              <th width="5%">510-5010</th>
		              <th width="5%">510-9002</th>
		              <th width="5%">Totalsumma</th>  
		           	</tr>  
	           	</tbody> 
           	</table>  
        	</div>
   			</div>
   			<Footer />
			</div>
		);
	}
}

export default ExcelImport;