import '../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Datatable from './Datatable';
import Insertdata from './Insertdata';
import EditData from './EditData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [],
      valueSearch : "",
      statusEdit : false,
      statusIns : false,
      objAccount : {}
    }
  }
  
  componentDidMount() {
    if (localStorage.getItem('data') === null)
    {
      localStorage.setItem('data',JSON.stringify(this.state.data))
    }
    else{    
      this.setState({
        data : JSON.parse(localStorage.getItem('data'))
      })
    }
  }
 
  getTextSearch=(dt)=>{
    this.setState({
      valueSearch : dt
      
    });
  }
  // lấy giá trị cần tìm 

  changeStatusCloseEdit = () => {
    this.setState({
      statusEdit : false
  });
  }
  changeStatusOpenEdit = () => {
    this.setState({
      statusEdit : true,
      statusIns : false
  });
  }
// trạng thái nút edit 

  changeStatusCloseIns = () => {
    this.setState({
      statusIns : false
  });
  }
  changeStatusOpenIns = () => {
    this.setState({
      statusIns : true,
      statusEdit : false
  });
  }
// trạng thái núi thêm 

  deleteData = (deleteId) => {
    var deletedData = this.state.data    
        deletedData.splice(deleteId,1)     
        this.setState({
          data : deletedData
        });  
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }
  // Xóa giá trị được chọn 

  editData = (editData) => {
    this.setState({
      objAccount : editData
    });
  }
  // Lấy đối tượng cần sửa

  getEditData = (editedData) =>{
    this.state.data.forEach((value)=>{

      if(value.id === editedData.id){
        value.type = editedData.type
        value.account = editedData.account
        value.password =editedData.password
        value.phone = editedData.phone
      }
    })  
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }

  getInsData = (insertedData) =>{
    var insData = this.state.data
        insData.push(insertedData)
        this.setState({
          data : insData
        });
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }

  showFormEdit = () => {
    if(this.state.statusEdit === true )
      {
        return <EditData statusEdit = {() =>this.changeStatusCloseEdit()}      
                        objAccount = {this.state.objAccount}
                        getEditData = {(editedData)=>this.getEditData(editedData)}
                        />                    
      }
    }
    
  showFormInsert = () => {
    if(this.state.statusIns === true )
      {
            return <Insertdata statusIns = {() =>this.changeStatusCloseIns()}
                               getInsData = {(insertedData)=>this.getInsData(insertedData)}
                              />
      }
    }
  render() {
      var data = []
      this.state.data.forEach((item) => 
        {
          if(item.type.indexOf(this.state.valueSearch) !== -1)
          {
            data.push(item)
          }
        })
     
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <Search textSearch = {(dt)=>this.getTextSearch(dt)} statusIns = {() =>this.changeStatusOpenIns()}/>
            <Datatable dataProp = {data} 
            deleteProp = {(deleteId) => this.deleteData(deleteId)}
            editProp = {(editData) => this.editData(editData)}
            statusEdit = {() =>this.changeStatusOpenEdit()}
            />
            {this.showFormEdit()}
            {this.showFormInsert()}
          </div>
        </div>       
      </div>
    );
  }
}

export default App;

