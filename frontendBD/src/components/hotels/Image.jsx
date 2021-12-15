import React,{useEffect,useContext,useState} from 'react';
import cl from './Image.module.css'
import axios from "axios";
import {AuthContext} from "../../context";

const Image = (props) => {


    const {token,admin} = useContext(AuthContext);
    const [image,setImage] = useState(null);


    async function deleteImage(e){
        try{
            e.preventDefault();
            const response = await axios.delete('/hotels/image',{
                params:{
                    image:props.path
                },
                headers:{
                    'Authorization':`Bearer ${token}`,
                }
            });
            console.log(response);
        }catch(e)
        {
            console.log(e);
        }
    }


    async function fetchImage(){
        try{
            const response = await axios.get('/hotels/image',{
                params:{
                    image:props.path
                },
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
                responseType:'blob'
            })
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(response.data)
            console.log(imageUrl);
            setImage(imageUrl);
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect((e)=>{
            fetchImage(e);
    },[props.images]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className = {cl.container}>
            <img className = {cl.image_box} src = {image} />
            { admin ?
            <p onClick = {e => {deleteImage(e); props.fetchImages(e)}} className = {cl.delete}/> : null}
        </div>
    );
};

export default Image;