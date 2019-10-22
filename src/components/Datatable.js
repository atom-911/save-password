import React, { Component } from 'react';
import DataTableRow from './DataTableRow';

class Datatable extends Component {
    render() {
        return ( 
                <div className="col table-col">
                    <table className="table-data table-striped" >
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Kiểu tài khoản</th>
                                <th>Tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Số điện thoại</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dataProp.map((value,index)=>(
                                <DataTableRow id={index} key={index} account = {value.account} 
                                type = {value.type} password={value.password} phone = {value.phone}
                                deleteItem = {()=>this.props.deleteProp(index)} 
                                editItem ={()=>this.props.editProp(value)}
                                statusEdit = {() =>this.props.statusEdit()}/> 
                                
                            ))}                                                                                      
                        </tbody>
                    </table>
                </div>                      
            );
        }
    }

export default Datatable;