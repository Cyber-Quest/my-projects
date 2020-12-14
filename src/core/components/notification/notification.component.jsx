import { notification } from "antd";

const Notification = (type, description) => { 

    notification.open({
        message: type === "success"? "Sucesso!": "Erro!",
        description: description,
    });
}

export default Notification