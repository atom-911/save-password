import React, { Component } from 'react';

class DataTableRow extends Component {
  
btnDelete = () => {
   this.props.deleteItem()
}
btnEdit = () => {
    this.props.editItem();
    this.props.statusEdit();
}
    render() {
        return (           
                <tr>
                    <td>{this.props.id+1}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.account}</td>
                    <td>{this.props.password}</td>
                    <td>{this.props.phone}</td>
                    <td>
                        
                            <div className="btn btn-warning sua" onClick = {()=>this.btnEdit()}><i className="fa fa-edit  " />Sửa</div>
                            <div className="btn btn-danger xoa "onClick = {()=>this.btnDelete()}><i className="fa fa-trash  " />Xóa</div>
                        
                    </td>                   
                </tr>                 
        );
    }
}

export default DataTableRow;