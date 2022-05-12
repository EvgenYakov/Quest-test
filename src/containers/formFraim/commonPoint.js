export function commonPoint(divPoint,validation){
    return{
        ...divPoint,
        validation,
        valid:!validation,
        touch: false,
        value:''
    }
}

export function validate(value,validation){
    if(!validation){
        return true;
    }

    let val = true;

    if(validation.required){
        val = value.trim() !=='' && val
    }

    return val
}


export function butValidate(formControls){
    let val = true;

    for(let obj in formControls){
        if(formControls.hasOwnProperty(obj)){
            val = formControls[obj].valid && val
        }
    }


    return val
}