import React ,{ useState }from 'react';
import {Divider, Radio,Layout, Table } from 'antd';
import App from './App';

const { Header, Content } = Layout;
  
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <App name={text} link="http://google.com/">{text}</App>,
        width:"10%",
    },
    {
        title: 'problem',
        dataIndex: 'pro_name',
        key: 'pro_name',
        render: (text) => <App name={text} link="http://google.com/">{text}</App>,
    },
    
];




const dataSource = [];

  for(let i = 1; i < 41; i++){
    dataSource.push({
        key: i,
        id: 'pro'+i,
        pro_name:'test',
    })
  }

 
class HomePage extends React.Component{
    render(){
        return (
            <div>   
                <div className='navbar'> 
                    <ul>
                        <li><App name="XXOJ" link="https://www.google.com.tw/"/></li>
                        <li><App name="題目區" link="https://www.google.com.tw/"/></li>
                    </ul>
                </div> 
                <div className='tmpdiv'>
                    <h1>tmp</h1>
                </div>
                <div className="search">
                    <input className="search-bar" type="text" name="search" id="search" placeholder="輸入名稱"></input>
                    <button className="search-btn"> search</button>
                </div>
                <Table dataSource={dataSource} columns={columns} pagination={{
                position: ['bottomCenter'],pageSize:20
                }} className='List'/>;
            </div>
        );
    }
}
 
export default HomePage;
