import React, { useState } from "react";
import {Modal} from "antd";
import { Form, Input, Button } from 'antd';  
import ImageUploader from 'react-images-upload';
 
import Notification from "core/components/notification/notification.component";

import { NewProjectStyles } from "./newProject.styles";
  
const NewProject = ({
    postNewProject = () => null,
    postImportUrlProject = () => null,
    visibleModal = false, 
    setIsModalVisible,
}) =>{   
  const [urlImage, setUrlImage] = useState("");

  const onImage = async (failedImages, successImages = []) => {  
    if(successImages.length > 0){
      try {  
          const parts = successImages[0].split(';'); 
          const mime = parts[0].split(':')[1];
          const name = parts[1].split('=')[1];
          const data = parts[2];
          const response = await postImportUrlProject({ mime, name, image: data }); 
          if(response?.imageURL){ 
            setUrlImage(response.imageURL);
          }
      } catch (error) {   
        console.log("Error: ", error)
      } 
    }
  };
 
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const onFinish = async fields => {
     const payload = {
         title: fields.title,
         subtitle: fields.subtitle,
         name: fields.name,
         link: urlImage
     }
     const response = await postNewProject(payload, fields.id);

     if(response === true){
        Notification("success", "Criado com sucesso!");
        setIsModalVisible(false)   
     }else
        Notification("fail", "Erro ao criar o projeto");
     
  };
    return (
        <NewProjectStyles> 
            <Modal
                title="Novo Projeto" 
                visible={visibleModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<div></div>}
                width={350}
            >
                <Form 
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{marginTop: "10px"}}
                >  <Form.Item
                    name="id"
                    rules={[{ required: true, message: 'Please input you id' }]}
                    >
                         <Input placeholder="ID" />
                    </Form.Item>
                    <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please input you tiltle' }]}
                    >
                         <Input placeholder="Titulo" />
                    </Form.Item>
                    <Form.Item
                    name="subtitle"
                    rules={[{ required: true, message: 'Please input you tiltle' }]}
                    >
                         <Input placeholder="Subtitulo" />
                    </Form.Item>
                    
                    <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                    <Input placeholder="Nome" />
                    </Form.Item> 
                    <Form.Item>
                      <ImageUploader
                          key="image-uploader"
                          withIcon={true}
                          singleImage={true}
                          withPreview={true}
                          label="Maximum size file: 5MB"
                          buttonText="Choose an image"
                          onChange={onImage}
                          imgExtension={['.jpg', '.png', '.jpeg']}
                          maxFileSize={5242880}
                      ></ImageUploader>   
                    </Form.Item> 
                    <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width:"100%"}}>
                        Criar Projeto
                    </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </NewProjectStyles>
    )
}

export default NewProject;