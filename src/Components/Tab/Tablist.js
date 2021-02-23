import React from 'react';

class Tablist extends React.Component{
    render(){
        if(this.props.isSelected){
            return(
                <div>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default Tablist;