export function Login(){
    return <h1>login</h1>;
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-componets";
import GithubButton from "../components/github-btn";

export default function CreateAccount(){
    const navigate = useNavigate();
    const [isLoading, setLoading]=useState(false);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target;
        if(name==="email"){
            setEmail(value);
        }else if(name==="password"){
            setPassword(value);
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError("");
        if(isLoading || email ==="" || password === "") return;
        try{
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        }finally{
            setLoading(false);
        }
    }
    return <Wrapper>
        <Title>Log into ??</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required/>
            <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required/>
            <Input type="submit" value={isLoading ? "Loading...":"Log in" } />
        </Form>
        {error !== "" ? <Error>{error}</Error>:null}
        <Switcher>
            Don't have an account? <Link to="/create-account">Create one &rarr;</Link>
        </Switcher>
        <GithubButton/>
    </Wrapper>
}

