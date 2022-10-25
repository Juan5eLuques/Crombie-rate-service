import React,{useState} from "react";
import {FormType} from '../../types/Form'

export const useForm = (stars : number = 1) => {

const [form, setForm] = useState<FormType>({name:'',country:'',email:'', company:'', stars : 1})

const handlerChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,name:event.target.value});
};

const handlerChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,country:event.target.value});
};

const handlerChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,email:event.target.value});
};

const handlerChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,company:event.target.value});
};

const handlerChangeStar = (star : number) => {
    setForm({...form, stars:star})
}

return {form, setForm, handlerChangeCountry,handlerChangeName,handlerChangeEmail,handlerChangeCompany,handlerChangeStar}

}  