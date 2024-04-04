import React, { useState } from "react";
import axios from "axios";

export default function AppForm(){
    const [form, setForm] = useState({uid:'', uname:''});
    const handleChange = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('uid', form.uid);
        params.append('uname', form.uname);
        console.log(params);
        axios
            .post('/rp/react/form', params)
            .then(res => console.log(res));
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="uid">아이디:</label>
                <input type="text" id="uid" name='uid' value={form.uid} onChange={handleChange} /><br />
                <label htmlFor="uname">이름:</label>
                <input type="text" id="uid" name='uname' value={form.uname} onChange={handleChange} /><br />
                <button>확인</button>
            </form>
        </div>
    );
}