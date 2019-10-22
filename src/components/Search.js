import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue :""
        }
    }
    isChange = (event) => {
        this.setState({tempValue: event.target.value})
    }
    render() {
        return (                  
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group search ">
                            <input value = {this.state.tempValue} onChange={this.isChange} type="text" className="form-control" placeholder="Nhập giá trị tìm kiếm" />                   
                        </div>
                        <div className="btn btn-info ml-3 search-button " onClick={()=>this.props.textSearch(this.state.tempValue)}>
                            Tìm kiếm 
                        </div>
                        <div className="btn btn-info float-right insert-button" onClick={()=>this.props.statusIns()}>
                            Thêm mới 
                        </div>
                    </div>  
                    <hr/> 
                </div>                                                                                                      
        );
    }
}

export default Search;