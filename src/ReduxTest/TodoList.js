import React,{Component} from  'react';
//第二步
import {connect} from 'react-redux';


class TodoList extends  Component{
     render(){
        return(
            <div>
                <input
                    value={this.props.inputValue}//使用store传的值
                    onChange={this.props.changeInputValue}
                />
                <button  onClick={this.props.addItem}>提交</button>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index} onClick={()=>this.props.deleteItem(index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}
//规定映射条件
//store里的state映射到组件的props里
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,//inputValue是指组件this.props.inputValue,state.inputValue是指store里的inputValue
        list:state.list,
    }
};

//把store.dispatch映射到组件的props上
const mapDispatchToProps=(dispatch)=>{
  return {
      //把这个函数映射到组件的props上
      changeInputValue(e){
           const action={//1:创建action消息
               type:'change_input_value',
               value:e.target.value,//把输入框里的值传给store
           };
           dispatch(action);//2：把这个消息传给store处理
      },
      addItem(){
          const  action={
              type:'add_item',
          };
          dispatch(action);
      },
      deleteItem(index){
          const action={
              type:'delete_item',
              index:index,
          };
          dispatch(action);
      }
  }
};

//目的：使TodoList和store做链接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

