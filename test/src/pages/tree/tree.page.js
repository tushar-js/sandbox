
import { useEffect } from 'react';
import fileSystem from '../../data/file-system.json'
import FileItem from './file-item';
import FolderItem from './folder-item';

function Tree() {
    useEffect(()=> {
        console.log('start');
    }, [])

    const root = fileSystem.root || [];

    return root.map(item => {
        console.log(item)
        if(typeof(item) == "string") {
            return (
                <FileItem
                    fileName={item}
                ></FileItem>
            )
        } else {
            return (
                <FolderItem
                    folderName={Object.keys(item)[0]}
                ></FolderItem>
            )
        }
    })
}

export default Tree;