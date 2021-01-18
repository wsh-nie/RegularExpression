import React from 'react';
import './index.css';

class RegularExpressionInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: "输入将要匹配的字符串",
            output: "将显示正则表达式匹配的结果",
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
        return(<div className="line-input-button">
            <div className="area">
                 <textarea className="input-area" value={this.state.input} onChange={this.handleChange.bind(this,"input")}/>
                 <textarea className="output-area" value={this.state.output} readOnly/>
            </div>
           
            <div className="expression-input">
                <input className = "line-input" type="text" value={this.state.expression} onChange={this.handleChange.bind(this,"expression")}/>
                <input className = "submitButton" type = "submit" onClick={this.handleSubmit.bind(this)} />
            </div>
        </div>);
    }
}


export default RegularExpressionInput;