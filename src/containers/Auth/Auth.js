import React from "react";
import './Auth.css'
import CButton from "../../components/UI/Button/Button";
import Cinput from "../../components/UI/Cinput/Cinput";
import is from 'is_js'


class Auth extends React.Component {

    state = {
        isFormVal:true,
        formControls:{
            email:{
                type: 'email',
                label: 'Email',
                value: '',
                errorMessage:"Введите корректный email",
                valid:false,
                touch: false,
                validation: {
                    required:true,
                    email: true
                }
            },
            password:{
                type: 'password',
                label: 'Пароль',
                value: '',
                errorMessage:"Введите корректный пароль",
                valid:false,
                touch: false,
                validation: {
                    required:true,
                    minLength:6
                }
            }
        }
    }

    loginHand(){

    }

    registerHand(){

    }

    formHand(e){
        e.preventDefault();
    }

    isValidate(value, validation){
        if(!validation){
            return true;
        }

        let val = true;

        if(validation.required){
            val = value.trim() !== '' && val;
        }

        if(validation.email){
            val = is.email(value) && val;
        }

        if(validation.minLength){
            val = value.length >= validation.minLength && val;
        }

        return val
    }

    onChangeHand(e,contName){
        console.log(contName + ' ' + e.target.value)
        const formControls = {...this.state.formControls};
        const control = {...formControls[contName]};
        control.value = e.target.value;
        control.touch = true;
        control.valid = this.isValidate(control.value, control.validation);

        let isFormVal = true;

        Object.keys(formControls).map((name)=>{
            isFormVal = formControls[name].valid && isFormVal
        })

        formControls[contName] = control;
        this.setState({
            formControls,isFormVal
        })


    }

    crCInList(){

        return Object.keys(this.state.formControls).map((contName,index)=>{
            const control = this.state.formControls[contName]
            return(
              <Cinput
                  key={index}
                  value={control.value}
                  label={control.label}
                  type ={control.type}
                  errorMessage = {control.errorMessage}
                  valid={control.valid}
                  touch={control.touch}
                  shouldVal={true}
                  onChange={e=>this.onChangeHand(e,contName)}
              />
            )
        })
    }

    render() {
        return (
            <div className='Auth'>
                <div>
                    <h1>Аутентификация</h1>
                    <form onClick={this.formHand} className='AuthForm'>
                        {this.crCInList()}
                        <CButton type = "primary" onClick ={this.loginHand} disabled={!this.state.isFormVal}>Войти</CButton>
                        <CButton type = "success" onClick = {this.registerHand} disabled={!this.state.isFormVal}>Зарегистрироваться</CButton>
                    </form>
                    </div>
            </div>
        )
    }
}

export default Auth