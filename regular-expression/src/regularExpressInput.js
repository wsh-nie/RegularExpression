import React from 'react';
import './index.css';

class RegularExpressionInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
            output: "",
            expression: "",
        };
    }
    handleSubmit(event){
        const text = this.state.input;
        const Rep = this.state.expression;
        const patt = new RegExp(Rep,'gi');
        const ans = text.match(patt);
        var result = "";
        for (let i in ans){
            if(ans[i] === null){
                result += "";
            }else{
                result += ans[i];
            }
            result += '\n';
        }
        this.setState({output:result});
    }
    handleChange(name,event){
        this.setState({[name] : event.target.value});
    }
    render(){
        return (
            <div className="w-screen h-screen font-sans mx-auto">
                <div className="text-center text-5xl font-bold my-8">测试正则表达式demo</div>
                <div className="grid grid-cols-2 gap-4 mx-auto mt-10 h-2/3 w-3/5">
                    <textarea className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none border border-8 border-red-400 mr-4 resize-none text-2xl px-4 py-2 placeholder-gray-500" value={this.state.input} onChange={this.handleChange.bind(this,"input")} placeholder="输入将要匹配的字符文本"/>
                    <textarea className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none border border-8 border-blue-400 resize-none text-2xl px-4 py-2 placeholder-gray-500" value={this.state.output} readOnly placeholder="将显示匹配结果"/>
                </div>
           
                <div className="grid grid-cols-5 gap-4 w-3/5  mx-auto mt-5">
                    <input className = "col-span-4 focus:border-light-purple-500 focus:ring-1 focus:ring-light-purple-500 focus:outline-none mx-2.5 text-2xl text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-5" type="text" value={this.state.expression} onChange={this.handleChange.bind(this,"expression")} placeholder = "输入正则表达式"/>
                    <button className = "bg-green-400 hover:bg-green-700 borde text-2xl px-4 py-2" onClick={this.handleSubmit.bind(this)}>开始匹配</button> 
                </div>
           </div>);
    }
}


export default RegularExpressionInput;