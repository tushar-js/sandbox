
import fileSystem from '../../data/file-system.json'
import FolderItem from './folder-item';

function Tree() {

    const root = fileSystem.root || [];

    return (
        <FolderItem
            data={fileSystem}
        ></FolderItem>
    )
}

export default Tree;