import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
class Insertdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            type : '',
            account : '',
            password : '',
            phone : ''
        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        });
    }

    btnInsert=()=>{
        this.props.statusIns(); 
        var insertedData = {};
        insertedData.id = uuidv1();
        insertedData.type = this.state.type;
        insertedData.account = this.state.account;
        insertedData.password = this.state.password;
        insertedData.phone = this.state.phone;
        if(insertedData.type === "" || insertedData.account === "" || insertedData.password === "" ||insertedData.phone ==="" ){
            alert("Mời nhập đầy đủ thông tin!")
            
        }
        else{
            this.props.getInsData(insertedData);
        }

    }

    render() {
        return (
            <div className="insert">
                <div className="card border-primary mb-3" style={{minWidth: '18rem'}}>
                    <div className="card-header">Thêm mới tài khoản</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={this.isChange} type="text" name="type" id="" className="form-control" placeholder="Kiểu tài khoản"  />                                   
                            </div>
                            <div className="form-group">                                   
                                <input onChange={this.isChange} type="text" name="account" id="" className="form-control" placeholder="Tài khoản"  />                                   
                            </div>
                            <div className="form-group">
                                <input onChange={this.isChange} type="text" name="password" id="" className="form-control" placeholder="Mật khẩu"  />                                     
                            </div>
                            <div className="form-group">
                                <input onChange={this.isChange} type="text" name="phone" id="" className="form-control" placeholder="Số điện thoại"  />                                     
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-info" onClick={()=>this.btnInsert()}>Thêm mới</div> 
                                <div className="btn btn-block btn-warning" onClick = {()=>this.props.statusIns()}>Đóng</div>                                 
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Insertdata;