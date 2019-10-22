import React, { Component } from 'react';

class EditData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.objAccount.id,
            type : this.props.objAccount.type,
            account : this.props.objAccount.account,
            password : this.props.objAccount.password,
            phone : this.props.objAccount.phone
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        });
    }
    btnSave = () => {
        this.props.statusEdit(); 
        var editedData = {};
        editedData.id = this.state.id;
        editedData.type = this.state.type;
        editedData.account = this.state.account;
        editedData.password = this.state.password;
        editedData.phone = this.state.phone;
        if(editedData.type === "" || editedData.account === "" || editedData.password === "" ||editedData.phone ==="" ){
            alert("Mời nhập đầy đủ thông tin!")
        }
        else{
            this.props.getEditData(editedData);
        }
    }
    btnExit = () => {
        this.props.statusEdit();
    }
    render() {
        return (
                <div className="edit">
                    <div className="card border-primary mb-3" style={{minWidth: '18rem'}}>
                        <div className="card-header">Sửa thông tin tài khoản</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input defaultValue = {this.props.objAccount.type} onChange = {this.isChange}
                                    type="text" name="type" id="" className="form-control" placeholder="Kiểu tài khoản"  />                                   
                                </div>
                                <div className="form-group">                                   
                                    <input defaultValue = {this.props.objAccount.account} onChange = {this.isChange} 
                                    type="text" name="account" id="" className="form-control" placeholder="Tài khoản"  />                                   
                                </div>
                                <div className="form-group">
                                    <input defaultValue = {this.props.objAccount.password}  onChange = {this.isChange}
                                    type="text" name="password" id="" className="form-control" placeholder="Mật khẩu"  />                                     
                                </div>
                                <div className="form-group">
                                    <input defaultValue = {this.props.objAccount.phone}  onChange = {this.isChange}
                                    type="text" name="phone" id="" className="form-control" placeholder="Số điện thoại"  />                                     
                                </div>
                                <div className="form-group">
                                <div className="btn btn-block btn-info" onClick = {()=>this.btnSave()}>Lưu lại</div>  
                                <div className="btn btn-block btn-warning" onClick = {()=>this.btnExit()} >Đóng</div>                               
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default EditData;

