import { Component } from 'react';

import { IconContext } from "react-icons";

class FormField extends Component {

    IsError(){
        let keys = [];
        if(this.props.error) keys = Object.keys(this.props.error) || [];
        return keys.includes(this.props.name);
    }

    inputElement(){
        if(this.props.type === 'submit'){
           return <input className={this.props.className} 
            type={this.props.type}
            name={this.props.name} 
            id={this.props.name}
            value={this.props.value}
        />
        }
        
        return <input className={this.props.className +` ${this.IsError() ? 'form__input--error' : ''}`} 
            type={this.props.type || "text"}
            name={this.props.name} 
            id={this.props.name}
            value={this.props.value}
            onChange = {this.props.onChange(this.props.name)}
            placeholder={this.props.placeholder || ''}
            required={this.props.required || true} 
            error={this.props.error}
        />
    }

    render(){
        return(
            <div className="form__group">
                
                {this.inputElement()}

                <span className="form__icon">
                    
                    <IconContext.Provider value={{className: `${this.IsError() ? 'form__icon--error' : ''}` }}>
                        {this.props.children}
                    </IconContext.Provider>
                </span>
                <label className='form__label' htmlFor={this.props.name}>{this.props.label || ''} </label>
                {this.IsError()}
            </div> 
        )
    }

}

export default FormField;