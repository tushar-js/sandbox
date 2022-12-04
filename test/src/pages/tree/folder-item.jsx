import { useEffect } from "react";
import FileItem from "./file-item";

const FolderItem = ({ data }) => {

    useEffect(() => {
        console.log(data)
    }, [])

    let folderName = Object.keys(data)[0];
    let folderItems = Object.values(data)[0] || [];

    return (
        <div style={{paddingLeft: '20px'}}>
            <h4>{folderName}</h4>
            {folderItems.map(item => {
                if (typeof (item) == "string") {
                    return <FileItem fileName={item}></FileItem>
                } else {
                    return <FolderItem data={item}></FolderItem>

                }
            })}

        </div>
    )
}

export default FolderItem;