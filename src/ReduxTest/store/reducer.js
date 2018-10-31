const defaultState={//创建一个默认state
    inputValue:'',
    list:[],
};

export default (state=defaultState,action)=>{

    //3：处理store自动传过来的action消息
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));//对原有数据进行深拷贝、
        newState.inputValue=action.value;
        return newState;//4:reducer把newState传给store,store进行更新处理
    }
    if (action.type==='add_item'){
        const newState=JSON.parse(JSON.stringify(state));//对原有数据进行深拷贝、
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if (action.type==='delete_item'){
        const newState=JSON.parse(JSON.stringify(state));//对原有数据进行深拷贝、
        newState.list.splice(action.index,1);//删除从索引开始的1个
        return newState;
    }



    return state;
}